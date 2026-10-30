import { useCallback, useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Product, Category } from '@/lib/types';

export function useAdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    const { data, error } = await supabase
      .from('products')
      .select('*, category:categories(*)')
      .order('created_at', { ascending: false });
    if (error) {
      setError(error.message);
    } else {
      setProducts((data ?? []) as unknown as Product[]);
    }
    const { data: cats, error: catErr } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });
    if (catErr) {
      setError(catErr.message);
    } else {
      setCategories((cats ?? []) as Category[]);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { products, categories, loading, error, reload: load };
}

const BUCKET = 'product-images';

async function optimizeProductImage(file: File): Promise<File> {
  const source = URL.createObjectURL(file);
  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const element = new Image();
      element.onload = () => resolve(element);
      element.onerror = () => reject(new Error('Image could not be read'));
      element.src = source;
    });
    const maxDimension = 1600;
    const scale = Math.min(1, maxDimension / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const context = canvas.getContext('2d');
    if (!context) return file;
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob | null>((resolve) => canvas.toBlob(resolve, 'image/webp', 0.82));
    return blob ? new File([blob], `${file.name.replace(/\.[^.]+$/, '')}.webp`, { type: 'image/webp' }) : file;
  } catch {
    return file;
  } finally {
    URL.revokeObjectURL(source);
  }
}

export async function uploadProductImage(file: File): Promise<{ url: string; error: string | null }> {
  if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
    return { url: '', error: 'Only JPEG, PNG, and WebP images are allowed.' };
  }
  if (file.size > 5 * 1024 * 1024) {
    return { url: '', error: 'Image must be 5MB or smaller.' };
  }
  const optimizedFile = await optimizeProductImage(file);
  const extension = optimizedFile.type === 'image/webp' ? 'webp' : optimizedFile.type.split('/')[1] || 'jpg';
  const path = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}.${extension}`;
  const { error: upErr } = await supabase.storage.from(BUCKET).upload(path, optimizedFile, {
    cacheControl: '31536000',
    upsert: false,
    contentType: optimizedFile.type,
  });
  if (upErr) return { url: '', error: upErr.message };
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return { url: data.publicUrl, error: null };
}

export async function deleteProductImage(url: string): Promise<void> {
  try {
    const u = new URL(url);
    const parts = u.pathname.split('/');
    const idx = parts.findIndex((p) => p === BUCKET);
    if (idx === -1) return;
    const path = parts.slice(idx + 1).join('/');
    if (!path) return;
    await supabase.storage.from(BUCKET).remove([path]);
  } catch {
    // ignore — best-effort cleanup
  }
}

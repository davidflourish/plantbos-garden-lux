import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { Product, Category } from '@/lib/types';

export function useProducts() {
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
      .eq('publication_status', 'published')
      .order('created_at', { ascending: false });
    if (error) {
      setError(error.message);
    } else {
      setProducts((data ?? []) as unknown as Product[]);
    }
    const { data: cats } = await supabase
      .from('categories')
      .select('*')
      .order('name', { ascending: true });
    setCategories((cats ?? []) as Category[]);
    setLoading(false);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { products, categories, loading, error, reload: load };
}

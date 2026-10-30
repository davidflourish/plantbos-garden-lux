import { useEffect, useState, useCallback } from 'react';
import { supabase } from '@/lib/supabase';
import { Product, Category } from '@/lib/types';

export function useProducts(options: { limit?: number; includeCategories?: boolean } = {}) {
  const { limit, includeCategories = true } = options;
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    let query = supabase
      .from('products')
      .select('*, category:categories(*)')
      .eq('publication_status', 'published')
      .order('created_at', { ascending: false });
    if (limit) query = query.limit(limit);
    const { data, error } = await query;
    if (error) {
      setError(error.message);
    } else {
      setProducts((data ?? []) as unknown as Product[]);
    }
    if (includeCategories) {
      const { data: cats } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true });
      setCategories((cats ?? []) as Category[]);
    }
    setLoading(false);
  }, [includeCategories, limit]);

  useEffect(() => {
    load();
  }, [load]);

  return { products, categories, loading, error, reload: load };
}

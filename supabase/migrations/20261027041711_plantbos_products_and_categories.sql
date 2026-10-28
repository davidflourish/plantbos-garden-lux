/*
# Plantbos — Products, Categories, and Storage

## Overview
Creates the product catalog schema for the Plantbos Gardens & Landscapes marketplace.
Admin users (authenticated via Supabase Auth) manage products through a dashboard;
public visitors browse published products on the marketplace.

## Tables

### `categories`
Lookup table for product categories. Admin-managed but seeded with defaults.
- `id` (uuid, PK)
- `name` (text, unique, not null) — e.g. "Indoor Plants"
- `slug` (text, unique, not null)
- `created_at` (timestamptz)

### `products`
The main catalog table. Admin creates/edits; public reads published only.
- `id` (uuid, PK)
- `name` (text, not null)
- `slug` (text, unique, not null)
- `description` (text, not null)
- `price` (numeric(12,2), not null) — in NGN
- `category_id` (uuid, FK → categories)
- `main_image_url` (text)
- `gallery_image_urls` (text[]) — array of additional image URLs
- `sku` (text)
- `stock_quantity` (int, default 0)
- `availability_status` (text, default 'in_stock') — in_stock | low_stock | out_of_stock | on_request
- `publication_status` (text, default 'draft') — draft | published
- `is_featured` (boolean, default false)
- `plant_attributes` (jsonb) — sunlight, watering, soil, fertilizer, height, pot_size, botanical_name, tags, weight, notes
- `created_by` (uuid, references auth.users)
- `created_at`, `updated_at` (timestamptz)

## Security (RLS)
- `categories`: public read (anon, authenticated); admin write (authenticated only).
- `products`: public SELECT only published rows; authenticated INSERT/UPDATE/DELETE all rows.
- `service_role` granted for edge-function use if needed.

## Indexes
- products.slug (unique)
- products.category_id
- products.publication_status
- products.is_featured
- categories.slug (unique)

## Storage
- Public bucket `product-images` for admin product image uploads.
- Public read; authenticated write (upload/update/delete own — but since admins are
  the only writers, authenticated write is acceptable).
*/

-- ---------- categories ----------
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON categories TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON categories TO authenticated;

DROP POLICY IF EXISTS "public_read_categories" ON categories;
CREATE POLICY "public_read_categories"
  ON categories FOR SELECT TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "admin_insert_categories" ON categories;
CREATE POLICY "admin_insert_categories"
  ON categories FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_categories" ON categories;
CREATE POLICY "admin_update_categories"
  ON categories FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_categories" ON categories;
CREATE POLICY "admin_delete_categories"
  ON categories FOR DELETE TO authenticated USING (true);

-- ---------- products ----------
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  price numeric(12,2) NOT NULL CHECK (price >= 0),
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  main_image_url text,
  gallery_image_urls text[] DEFAULT '{}',
  sku text,
  stock_quantity integer NOT NULL DEFAULT 0 CHECK (stock_quantity >= 0),
  availability_status text NOT NULL DEFAULT 'in_stock'
    CHECK (availability_status IN ('in_stock','low_stock','out_of_stock','on_request')),
  publication_status text NOT NULL DEFAULT 'draft'
    CHECK (publication_status IN ('draft','published')),
  is_featured boolean NOT NULL DEFAULT false,
  plant_attributes jsonb DEFAULT '{}'::jsonb,
  created_by uuid REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

GRANT SELECT ON products TO anon, authenticated;
GRANT INSERT, UPDATE, DELETE ON products TO authenticated;

-- public can read only published products
DROP POLICY IF EXISTS "public_read_published_products" ON products;
CREATE POLICY "public_read_published_products"
  ON products FOR SELECT TO anon, authenticated
  USING (publication_status = 'published');

-- authenticated admins manage all products
DROP POLICY IF EXISTS "admin_insert_products" ON products;
CREATE POLICY "admin_insert_products"
  ON products FOR INSERT TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "admin_update_products" ON products;
CREATE POLICY "admin_update_products"
  ON products FOR UPDATE TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "admin_delete_products" ON products;
CREATE POLICY "admin_delete_products"
  ON products FOR DELETE TO authenticated USING (true);

-- updated_at auto-touch trigger
CREATE OR REPLACE FUNCTION touch_updated_at()
RETURNS trigger LANGUAGE plpgsql AS $$
BEGIN
  NEW.updated_at := now();
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS products_touch_updated_at ON products;
CREATE TRIGGER products_touch_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW EXECUTE FUNCTION touch_updated_at();

-- indexes
CREATE INDEX IF NOT EXISTS idx_products_category_id ON products(category_id);
CREATE INDEX IF NOT EXISTS idx_products_publication_status ON products(publication_status);
CREATE INDEX IF NOT EXISTS idx_products_is_featured ON products(is_featured);
CREATE INDEX IF NOT EXISTS idx_products_created_at ON products(created_at DESC);

-- ---------- seed default categories ----------
INSERT INTO categories (name, slug) VALUES
  ('Indoor Plants', 'indoor-plants'),
  ('Outdoor Plants', 'outdoor-plants'),
  ('Ornamental Plants', 'ornamental-plants'),
  ('Palm Trees', 'palm-trees'),
  ('Flowering Plants', 'flowering-plants'),
  ('Garden Accessories', 'garden-accessories'),
  ('Pots and Planters', 'pots-and-planters'),
  ('Other', 'other')
ON CONFLICT (slug) DO NOTHING;

-- ---------- storage bucket ----------
INSERT INTO storage.buckets (id, name, public)
VALUES ('product-images', 'product-images', true)
ON CONFLICT (id) DO NOTHING;

-- storage policies: public read, authenticated write
DROP POLICY IF EXISTS "public_read_product_images" ON storage.objects;
CREATE POLICY "public_read_product_images"
  ON storage.objects FOR SELECT TO anon, authenticated
  USING (bucket_id = 'product-images');

DROP POLICY IF EXISTS "admin_upload_product_images" ON storage.objects;
CREATE POLICY "admin_upload_product_images"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (bucket_id = 'product-images');

DROP POLICY IF EXISTS "admin_update_product_images" ON storage.objects;
CREATE POLICY "admin_update_product_images"
  ON storage.objects FOR UPDATE TO authenticated
  USING (bucket_id = 'product-images') WITH CHECK (bucket_id = 'product-images');

DROP POLICY IF EXISTS "admin_delete_product_images" ON storage.objects;
CREATE POLICY "admin_delete_product_images"
  ON storage.objects FOR DELETE TO authenticated
  USING (bucket_id = 'product-images');

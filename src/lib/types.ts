export type AvailabilityStatus = 'in_stock' | 'low_stock' | 'out_of_stock' | 'on_request';
export type PublicationStatus = 'draft' | 'published';

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface PlantAttributes {
  sunlight?: string;
  watering?: string;
  soil?: string;
  fertilizer?: string;
  botanicalName?: string;
  height?: string;
  potSize?: string;
  tags?: string[];
  weight?: string;
  notes?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  category_id: string | null;
  main_image_url: string | null;
  gallery_image_urls: string[];
  sku: string | null;
  stock_quantity: number;
  availability_status: AvailabilityStatus;
  publication_status: PublicationStatus;
  is_featured: boolean;
  plant_attributes: PlantAttributes;
  created_by: string | null;
  created_at: string;
  updated_at: string;
  // joined
  category?: Category | null;
}

export interface ProductInput {
  name: string;
  description: string;
  price: number;
  category_id: string | null;
  main_image_url: string | null;
  gallery_image_urls: string[];
  sku: string | null;
  stock_quantity: number;
  availability_status: AvailabilityStatus;
  publication_status: PublicationStatus;
  is_featured: boolean;
  plant_attributes: PlantAttributes;
}

export const AVAILABILITY_LABELS: Record<AvailabilityStatus, string> = {
  in_stock: 'In Stock',
  low_stock: 'Low Stock',
  out_of_stock: 'Out of Stock',
  on_request: 'Available on Request',
};

export const AVAILABILITY_COLORS: Record<AvailabilityStatus, string> = {
  in_stock: 'bg-emerald-100 text-emerald-800 border-emerald-200',
  low_stock: 'bg-amber-100 text-amber-800 border-amber-200',
  out_of_stock: 'bg-rose-100 text-rose-800 border-rose-200',
  on_request: 'bg-sky-100 text-sky-800 border-sky-200',
};

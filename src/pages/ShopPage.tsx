import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Search, X, MessageCircle, Star, Leaf, Minus, Plus, ArrowRight, SlidersHorizontal } from 'lucide-react';
import { useProducts } from '@/lib/useProducts';
import { Product, AVAILABILITY_LABELS, AVAILABILITY_COLORS } from '@/lib/types';
import { formatNaira, classNames } from '@/lib/utils';
import { ProductImage } from '@/components/ProductImage';
import { whatsappSingle } from '@/lib/order';
import { isWhatsAppConfigured, siteConfig } from '@/lib/config';
import { setPageMeta, setProductStructuredData } from '@/lib/seo';

const ALL = 'all';

export function ShopPage() {
  const { products, categories, loading, error } = useProducts();
  const { slug } = useParams<{ slug?: string }>();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [activeCat, setActiveCat] = useState<string>(ALL);
  const [sort, setSort] = useState<'newest' | 'price-low' | 'price-high' | 'name'>('newest');
  const [selected, setSelected] = useState<Product | null>(null);
  const requestedProduct = slug ? products.find((product) => product.slug === slug) : null;

  useEffect(() => {
    if (!slug || loading) return;
    setSelected(requestedProduct ?? null);
  }, [slug, loading, requestedProduct]);

  useEffect(() => {
    if (requestedProduct) {
      setPageMeta({
        title: `${requestedProduct.name} — Plantbos Abuja`,
        description: `${requestedProduct.description} Shop plants and garden products from Plantbos Gardens & Landscapes in Abuja.`,
        canonical: `${window.location.origin}/shop/${requestedProduct.slug}`,
      });
      return setProductStructuredData(requestedProduct);
    }

    setPageMeta({
      title: 'Shop Plants in Abuja — Plantbos Gardens & Landscapes',
      description: 'Browse rare plants, indoor plants, garden plants, and premium planters available from Plantbos in Abuja.',
      canonical: `${window.location.origin}/shop`,
    });
  }, [requestedProduct]);

  const filtered = useMemo(() => {
    let list = products;
    if (activeCat !== ALL) list = list.filter((p) => p.category_id === activeCat);
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.sku ?? '').toLowerCase().includes(q)
      );
    }
    const sorted = [...list];
    if (sort === 'price-low') sorted.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') sorted.sort((a, b) => b.price - a.price);
    else if (sort === 'name') sorted.sort((a, b) => a.name.localeCompare(b.name));
    else sorted.sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at));
    return sorted;
  }, [products, activeCat, search, sort]);

  const featured = useMemo(
    () => products.filter((p) => p.is_featured).slice(0, 4),
    [products]
  );

  if (slug && !loading && !error && !requestedProduct) {
    return (
      <div className="min-h-[60vh] bg-[var(--background)] flex flex-col items-center justify-center px-4 text-center">
        <h1 className="font-serif text-4xl text-white mb-3">Product unavailable</h1>
        <p className="text-white/65 mb-6">This product is no longer available in the public marketplace.</p>
        <button onClick={() => navigate('/shop')} className="rounded-full bg-[#1E6B4E] px-6 py-3 font-semibold text-white hover:bg-[#2A8060]">
          Back to marketplace
        </button>
      </div>
    );
  }

  return (
    <div className="bg-[var(--background)] min-h-screen">
      {/* heading */}
      <section className="pt-28 sm:pt-36 pb-12 bg-gradient-to-b from-[#0A3D2B] to-[#062418]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">
            The Marketplace
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            Shop Plants
          </h1>
          <p className="text-white/75 max-w-2xl mx-auto leading-relaxed">
            Browse our living collection of rare and beloved plants. Reserve yours with a quick
            WhatsApp inquiry — no account needed.
          </p>
        </div>
      </section>

      {/* featured */}
      {featured.length > 0 && (
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-2xl text-white mb-5 flex items-center gap-2">
              <Star className="w-5 h-5 text-[#D97757]" /> Popular Right Now
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {featured.map((p) => (
                <ProductCard key={p.id} product={p} onOpen={() => { setSelected(p); navigate(`/shop/${p.slug}`); }} compact />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* controls + grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between mb-8">
            {/* search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search plants..."
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-[#1E6B4E] focus:bg-white/10 transition-colors"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* sort */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4 text-white/50" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as typeof sort)}
                className="bg-white/5 border border-white/10 text-white text-sm rounded-full px-4 py-2.5 focus:outline-none focus:border-[#1E6B4E]"
              >
                <option value="newest" className="bg-[#0A3D2B]">Newest</option>
                <option value="price-low" className="bg-[#0A3D2B]">Price: Low to High</option>
                <option value="price-high" className="bg-[#0A3D2B]">Price: High to Low</option>
                <option value="name" className="bg-[#0A3D2B]">Name: A–Z</option>
              </select>
            </div>
          </div>

          {/* category chips */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-3 mb-6">
            <CategoryChip label="All" active={activeCat === ALL} onClick={() => setActiveCat(ALL)} />
            {categories.map((c) => (
              <CategoryChip
                key={c.id}
                label={c.name}
                active={activeCat === c.id}
                onClick={() => setActiveCat(c.id)}
              />
            ))}
          </div>

          {/* states */}
          {loading && <LoadingState />}
          {error && <ErrorState message={error} />}
          {!loading && !error && filtered.length === 0 && (
            <EmptyState hasProducts={products.length > 0} />
          )}

          {/* grid */}
          {!loading && !error && filtered.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onOpen={() => { setSelected(p); navigate(`/shop/${p.slug}`); }} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* product detail */}
      {selected && (
        <ProductDetailModal
          product={selected}
          onClose={() => { setSelected(null); if (slug) navigate('/shop'); }}
        />
      )}
    </div>
  );
}

function CategoryChip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors border',
        active
          ? 'bg-[#1E6B4E] text-white border-[#1E6B4E]'
          : 'bg-white/5 text-white/70 border-white/10 hover:border-[#1E6B4E]/50 hover:text-white'
      )}
    >
      {label}
    </button>
  );
}

function ProductCard({
  product,
  onOpen,
  compact,
}: {
  product: Product;
  onOpen: () => void;
  compact?: boolean;
}) {
  const status = product.availability_status;
  return (
    <button
      onClick={onOpen}
      className="group text-left bg-[#0F4D36]/40 border border-white/10 rounded-2xl overflow-hidden hover:border-[#1E6B4E]/60 hover:-translate-y-1 transition-all duration-300"
    >
      <div className={classNames('relative overflow-hidden', compact ? 'aspect-square' : 'aspect-square')}>
        <ProductImage
          src={product.main_image_url}
          alt={product.name}
          className="w-full h-full"
          imgClassName="group-hover:scale-105 transition-transform duration-500"
        />
        <span
          className={classNames(
            'absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full border',
            AVAILABILITY_COLORS[status]
          )}
        >
          {AVAILABILITY_LABELS[status]}
        </span>
        {product.is_featured && (
          <span className="absolute top-3 right-3 bg-[#D97757] text-white text-xs font-semibold px-2 py-1 rounded-full">
            Featured
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-white leading-tight">{product.name}</h3>
        {product.category && (
          <p className="text-xs text-white/50 mt-1">{product.category.name}</p>
        )}
        <p className="text-sm text-white/70 mt-2 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-semibold text-[#4DA583]">
            {formatNaira(product.price)}
          </span>
          <span className="text-xs text-white/60 group-hover:text-[#D97757] transition-colors flex items-center gap-1 font-medium">
            Details <ArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </button>
  );
}

function ProductDetailModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState<string | null>(product.main_image_url);
  const gallery = [product.main_image_url, ...product.gallery_image_urls].filter(
    (x): x is string => !!x
  );

  useEffect(() => {
    setQty(1);
    setActiveImg(product.main_image_url);
  }, [product]);

  const canInquire = product.availability_status !== 'out_of_stock';
  const maxQuantity = product.stock_quantity > 0 ? product.stock_quantity : null;

  const subtotal = product.price * qty;
  const productUrl = `${window.location.origin}/shop/${product.slug}`;

  const buy = () => {
    const url = whatsappSingle(product, qty, productUrl);
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const attrs = product.plant_attributes ?? {};

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white w-full sm:max-w-4xl sm:rounded-2xl rounded-t-2xl overflow-hidden max-h-[95vh] sm:max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* close */}
        <div className="sticky top-0 z-10 flex justify-end p-3 bg-white/80 backdrop-blur">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#0A3D2B]/5 hover:bg-[#0A3D2B]/10 flex items-center justify-center text-[#0A3D2B]"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* images */}
          <div className="bg-[#0A3D2B] p-5">
            <ProductImage
              src={activeImg}
              alt={product.name}
              className="w-full aspect-square rounded-xl"
            />
            {gallery.length > 1 && (
              <div className="mt-3 flex gap-2 overflow-x-auto no-scrollbar">
                {gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(g)}
                    className={classNames(
                      'w-16 h-16 rounded-lg overflow-hidden border-2 shrink-0',
                      activeImg === g ? 'border-[#D97757]' : 'border-transparent opacity-70'
                    )}
                  >
                    <ProductImage src={g} alt={`${product.name} ${i + 1}`} className="w-full h-full" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* info */}
          <div className="p-6 sm:p-8">
            {product.category && (
              <p className="text-xs text-[#1E6B4E] font-semibold uppercase tracking-widest mb-2">
                {product.category.name}
              </p>
            )}
            <h2 className="font-serif text-3xl text-[#0A3D2B] mb-2">{product.name}</h2>
            {attrs.botanicalName && (
              <p className="text-sm italic text-[#112F23]/60 mb-3">{attrs.botanicalName}</p>
            )}
            <span
              className={classNames(
                'inline-block text-xs font-semibold px-2.5 py-1 rounded-full border mb-4',
                AVAILABILITY_COLORS[product.availability_status]
              )}
            >
              {AVAILABILITY_LABELS[product.availability_status]}
            </span>

            <p className="text-2xl font-semibold text-[#0A3D2B] mb-4">
              {formatNaira(product.price)}
            </p>

            <p className="text-[#112F23]/80 leading-relaxed mb-5">{product.description}</p>

            {/* attributes */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {attrs.sunlight && <Attr label="Sunlight" value={attrs.sunlight} />}
              {attrs.watering && <Attr label="Watering" value={attrs.watering} />}
              {attrs.soil && <Attr label="Soil" value={attrs.soil} />}
              {attrs.height && <Attr label="Height" value={attrs.height} />}
              {attrs.potSize && <Attr label="Pot Size" value={attrs.potSize} />}
              {product.stock_quantity > 0 && <Attr label="Available" value={`${product.stock_quantity} in stock`} />}
              {product.sku && <Attr label="SKU" value={product.sku} />}
            </div>

            {attrs.fertilizer && (
              <div className="mb-4 text-sm text-[#112F23]/75">
                <span className="font-semibold text-[#0A3D2B]">Care: </span>
                {attrs.fertilizer}
              </div>
            )}
            {attrs.notes && <p className="mb-4 text-sm text-[#112F23]/75 leading-relaxed">{attrs.notes}</p>}

            {/* quantity + buy */}
            {canInquire && (
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm font-medium text-[#0A3D2B]">Quantity</span>
                <div className="flex items-center border border-[#0A3D2B]/15 rounded-full">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="w-9 h-9 flex items-center justify-center text-[#0A3D2B] hover:bg-[#0A3D2B]/5 rounded-l-full"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-semibold text-[#0A3D2B]">{qty}</span>
                  <button
                    onClick={() => setQty((q) => maxQuantity ? Math.min(maxQuantity, q + 1) : q + 1)}
                    disabled={maxQuantity !== null && qty >= maxQuantity}
                    className="w-9 h-9 flex items-center justify-center text-[#0A3D2B] hover:bg-[#0A3D2B]/5 rounded-r-full disabled:opacity-40"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <span className="ml-auto text-sm text-[#112F23]/70">
                  Subtotal: <span className="font-semibold text-[#0A3D2B]">{formatNaira(subtotal)}</span>
                </span>
              </div>
            )}

            {!isWhatsAppConfigured() && (
              <p className="text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 mb-3">
                WhatsApp ordering isn't configured yet. Please call {siteConfig.business.phoneDisplay}.
              </p>
            )}

            {canInquire ? (
              <button
                onClick={buy}
                disabled={!isWhatsAppConfigured()}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-[#25D366] text-white font-semibold hover:bg-[#1ebe57] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Get our Product
              </button>
            ) : (
              <div className="space-y-2">
                <p className="text-sm text-[#112F23]/70 text-center bg-rose-50 border border-rose-200 rounded-lg px-3 py-2">
                  This product is currently out of stock.
                </p>
                <button
                  onClick={buy}
                  disabled={!isWhatsAppConfigured()}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#0A3D2B] text-[#0A3D2B] font-semibold hover:bg-[#0A3D2B] hover:text-white disabled:opacity-50 transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  Request Availability
                </button>
              </div>
            )}

            <p className="mt-3 text-xs text-[#112F23]/50 text-center leading-relaxed">
             @officialplantbos 2024. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Attr({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-[#f6f9f7] rounded-lg px-3 py-2">
      <p className="text-[10px] uppercase tracking-wider text-[#1E6B4E] font-semibold">{label}</p>
      <p className="text-sm text-[#112F23] mt-0.5">{value}</p>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="bg-[#0F4D36]/30 border border-white/10 rounded-2xl overflow-hidden">
          <div className="aspect-square bg-white/5 animate-pulse" />
          <div className="p-4 space-y-2">
            <div className="h-4 bg-white/10 rounded animate-pulse w-2/3" />
            <div className="h-3 bg-white/10 rounded animate-pulse w-1/3" />
            <div className="h-5 bg-white/10 rounded animate-pulse w-1/2 mt-2" />
          </div>
        </div>
      ))}
    </div>
  );
}

function ErrorState({ message }: { message: string }) {
  return (
    <div className="text-center py-20">
      <p className="text-white/70 mb-2">We couldn't load the marketplace.</p>
      <p className="text-sm text-white/40">{message}</p>
    </div>
  );
}

function EmptyState({ hasProducts }: { hasProducts: boolean }) {
  return (
    <div className="text-center py-20">
      <div className="inline-flex w-16 h-16 rounded-full bg-[#1E6B4E]/20 items-center justify-center mb-5">
        <Leaf className="w-8 h-8 text-[#4DA583]" />
      </div>
      <h3 className="font-serif text-2xl text-white mb-2">
        {hasProducts ? 'No matches found' : 'Our shelves are being planted'}
      </h3>
      <p className="text-white/60 max-w-md mx-auto">
        {hasProducts
          ? 'Try a different category or search term.'
          : 'New plants are being added soon. Check back shortly, or message us on WhatsApp for what you need.'}
      </p>
    </div>
  );
}

import { FormEvent, useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import {
  AlertCircle,
  Check,
  Edit3,
  Eye,
  ImagePlus,
  Leaf,
  Loader2,
  LogOut,
  Package,
  Plus,
  Search,
  Trash2,
  X,
} from 'lucide-react';
import { useAuth } from '@/lib/auth';
import { supabase } from '@/lib/supabase';
import { useAdminProducts, uploadProductImage } from '@/lib/adminApi';
import { Product, ProductInput, AvailabilityStatus, AVAILABILITY_LABELS } from '@/lib/types';
import { formatNaira, slugify } from '@/lib/utils';
import { ProductImage } from '@/components/ProductImage';

const emptyForm: ProductInput = {
  name: '', description: '', price: 0, category_id: null, main_image_url: null,
  gallery_image_urls: [], sku: null, stock_quantity: 0, availability_status: 'in_stock',
  publication_status: 'published', is_featured: false,
  plant_attributes: { sunlight: '', watering: '', soil: '', fertilizer: '', botanicalName: '', height: '', potSize: '', notes: '' },
};

export function AdminDashboardPage() {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { products, categories, loading, error, reload } = useAdminProducts();
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [checkingAccess, setCheckingAccess] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);
  const [query, setQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'published' | 'draft'>('all');
  const [notice, setNotice] = useState<string | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    if (!user) {
      setCheckingAccess(false);
      return;
    }
    supabase.from('admin_users').select('user_id').eq('user_id', user.id).maybeSingle().then(({ data }) => {
      if (active) {
        setIsAdmin(Boolean(data));
        setCheckingAccess(false);
      }
    });
    return () => { active = false; };
  }, [user]);

  if (authLoading || checkingAccess) {
    return <AdminLoading />;
  }
  if (!user) return <Navigate to="/admin/login" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#f6f9f7] flex items-center justify-center px-4">
        <div className="max-w-md text-center">
          <AlertCircle className="w-12 h-12 text-[#D97757] mx-auto mb-4" />
          <h1 className="font-serif text-3xl text-[#0A3D2B] mb-3">Access not available</h1>
          <p className="text-[#112F23]/70 mb-6">This account is signed in but has not been approved for catalog management.</p>
          <button onClick={() => signOut()} className="px-6 py-3 rounded-full bg-[#0A3D2B] text-white font-semibold">Sign out</button>
        </div>
      </div>
    );
  }

  const visibleProducts = products.filter((p) => {
    const matchesQuery = !query || `${p.name} ${p.sku ?? ''}`.toLowerCase().includes(query.toLowerCase());
    return matchesQuery && (statusFilter === 'all' || p.publication_status === statusFilter);
  });
  const published = products.filter((p) => p.publication_status === 'published').length;
  const drafts = products.filter((p) => p.publication_status === 'draft').length;
  const outOfStock = products.filter((p) => p.availability_status === 'out_of_stock').length;

  const openNew = () => { setEditing(null); setActionError(null); setShowForm(true); };
  const openEdit = (product: Product) => { setEditing(product); setActionError(null); setShowForm(true); };

  const deleteProduct = async (product: Product) => {
    if (!window.confirm(`Delete “${product.name}”? This cannot be undone.`)) return;
    setActionError(null);
    const { error: deleteError } = await supabase.from('products').delete().eq('id', product.id);
    if (deleteError) setActionError('Could not delete this product. Please try again.');
    else { setNotice('Product deleted.'); await reload(); }
  };

  const togglePublish = async (product: Product) => {
    setActionError(null);
    const next = product.publication_status === 'published' ? 'draft' : 'published';
    const { error: updateError } = await supabase.from('products').update({ publication_status: next }).eq('id', product.id);
    if (updateError) setActionError('Could not update publication status. Please try again.');
    else { setNotice(next === 'published' ? 'Product published.' : 'Product moved to drafts.'); await reload(); }
  };

  const onSaved = async (message: string) => {
    setShowForm(false);
    setNotice(message);
    await reload();
  };

  return (
    <div className="min-h-screen bg-[#f6f9f7] text-[#112F23]">
      <header className="bg-[#0A3D2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3"><Leaf className="w-6 h-6 text-[#D97757]" /><span className="font-serif text-2xl">Plantbos <span className="text-white/60 text-base">Admin</span></span></Link>
          <div className="flex items-center gap-4"><span className="hidden sm:block text-sm text-white/60">{user.email}</span><button onClick={() => signOut().then(() => navigate('/'))} className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white"><LogOut className="w-4 h-4" /> Sign out</button></div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div><p className="text-sm text-[#1E6B4E] font-semibold uppercase tracking-widest">Marketplace</p><h1 className="font-serif text-4xl text-[#0A3D2B]">Product dashboard</h1></div>
          <button onClick={openNew} className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#1E6B4E] text-white font-semibold hover:bg-[#2A8060] transition-colors"><Plus className="w-5 h-5" /> Add new product</button>
        </div>

        {notice && <Toast message={notice} onClose={() => setNotice(null)} />}
        {(error || actionError) && <div className="mb-6 p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm flex gap-2"><AlertCircle className="w-4 h-4 shrink-0" /> {actionError ?? 'Could not load your products.'}</div>}

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          <Stat icon={Package} label="Total products" value={products.length} />
          <Stat label="Published" value={published} />
          <Stat label="Drafts" value={drafts} />
          <Stat label="Out of stock" value={outOfStock} />
          <Stat label="Added recently" value={products.filter((p) => Date.now() - +new Date(p.created_at) < 30 * 86400000).length} />
        </div>

        <div className="bg-white border border-[#0A3D2B]/10 rounded-2xl overflow-hidden shadow-sm">
          <div className="p-4 sm:p-5 border-b border-[#0A3D2B]/10 flex flex-col sm:flex-row gap-3 justify-between">
            <div className="relative flex-1 max-w-sm"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#112F23]/40" /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products…" className="w-full pl-9 pr-3 py-2.5 rounded-lg border border-[#0A3D2B]/15 focus:outline-none focus:border-[#1E6B4E]" /></div>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)} className="py-2.5 px-3 rounded-lg border border-[#0A3D2B]/15 focus:outline-none"><option value="all">All statuses</option><option value="published">Published</option><option value="draft">Drafts</option></select>
          </div>
          {loading ? <AdminLoading /> : visibleProducts.length === 0 ? <div className="py-16 text-center"><Leaf className="w-10 h-10 text-[#1E6B4E]/50 mx-auto mb-3" /><p className="text-[#112F23]/60">No products match your search.</p></div> : <ProductTable products={visibleProducts} onEdit={openEdit} onDelete={deleteProduct} onTogglePublish={togglePublish} />}
        </div>
      </main>

      {showForm && <ProductForm product={editing} categories={categories} onClose={() => setShowForm(false)} onSaved={onSaved} />}
    </div>
  );
}

function Stat({ label, value, icon: Icon }: { label: string; value: number; icon?: typeof Package }) {
  return <div className="bg-white rounded-xl border border-[#0A3D2B]/10 p-4"><div className="flex justify-between items-start"><p className="text-xs text-[#112F23]/60 uppercase tracking-wider font-semibold">{label}</p>{Icon && <Icon className="w-4 h-4 text-[#1E6B4E]" />}</div><p className="font-serif text-3xl text-[#0A3D2B] mt-2">{value}</p></div>;
}

function ProductTable({ products, onEdit, onDelete, onTogglePublish }: { products: Product[]; onEdit: (p: Product) => void; onDelete: (p: Product) => void; onTogglePublish: (p: Product) => void }) {
  return <div className="overflow-x-auto"><table className="w-full text-left"><thead className="bg-[#f6f9f7] text-xs uppercase tracking-wider text-[#112F23]/60"><tr><th className="p-4 font-semibold">Product</th><th className="p-4 font-semibold">Category</th><th className="p-4 font-semibold">Price</th><th className="p-4 font-semibold">Availability</th><th className="p-4 font-semibold">Status</th><th className="p-4 font-semibold text-right">Actions</th></tr></thead><tbody className="divide-y divide-[#0A3D2B]/10">{products.map((p) => <tr key={p.id} className="hover:bg-[#f6f9f7]/70"><td className="p-4 min-w-[250px]"><div className="flex items-center gap-3"><ProductImage src={p.main_image_url} alt={p.name} className="w-12 h-12 rounded-lg" /><div><p className="font-semibold text-[#0A3D2B]">{p.name}</p><p className="text-xs text-[#112F23]/50">{new Date(p.created_at).toLocaleDateString()}</p></div></div></td><td className="p-4 text-sm text-[#112F23]/70">{p.category?.name ?? 'Uncategorised'}</td><td className="p-4 text-sm font-semibold">{formatNaira(p.price)}</td><td className="p-4"><span className="text-xs font-medium px-2 py-1 rounded-full bg-[#f6f9f7]">{AVAILABILITY_LABELS[p.availability_status]}</span></td><td className="p-4"><button onClick={() => onTogglePublish(p)} className={`text-xs font-semibold px-2 py-1 rounded-full transition-colors ${p.publication_status === 'published' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' : 'bg-amber-100 text-amber-800 hover:bg-amber-200'}`}>{p.publication_status}</button></td><td className="p-4"><div className="flex justify-end gap-2"><button onClick={() => onEdit(p)} className="p-2 rounded-lg text-[#1E6B4E] hover:bg-[#1E6B4E]/10" aria-label={`Edit ${p.name}`}><Edit3 className="w-4 h-4" /></button><a href={`/shop/${p.slug}`} target="_blank" rel="noreferrer" className="p-2 rounded-lg text-[#1E6B4E] hover:bg-[#1E6B4E]/10" aria-label={`Preview ${p.name}`}><Eye className="w-4 h-4" /></a><button onClick={() => onDelete(p)} className="p-2 rounded-lg text-rose-600 hover:bg-rose-50" aria-label={`Delete ${p.name}`}><Trash2 className="w-4 h-4" /></button></div></td></tr>)}</tbody></table></div>;
}

function ProductForm({ product, categories, onClose, onSaved }: { product: Product | null; categories: { id: string; name: string }[]; onClose: () => void; onSaved: (message: string) => Promise<void> }) {
  const [form, setForm] = useState<ProductInput>(() => product ? { name: product.name, description: product.description, price: product.price, category_id: product.category_id, main_image_url: product.main_image_url, gallery_image_urls: product.gallery_image_urls ?? [], sku: product.sku, stock_quantity: product.stock_quantity, availability_status: product.availability_status, publication_status: product.publication_status, is_featured: product.is_featured, plant_attributes: { ...emptyForm.plant_attributes, ...product.plant_attributes } } : emptyForm);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const update = <K extends keyof ProductInput>(key: K, value: ProductInput[K]) => setForm((prev) => ({ ...prev, [key]: value }));
  const updateAttr = (key: string, value: string) => setForm((prev) => ({ ...prev, plant_attributes: { ...prev.plant_attributes, [key]: value } }));

  const upload = async (file: File, gallery = false) => {
    setUploading(true); setFormError(null);
    const result = await uploadProductImage(file);
    setUploading(false);
    if (result.error) { setFormError(result.error); return; }
    if (gallery) update('gallery_image_urls', [...form.gallery_image_urls, result.url]); else update('main_image_url', result.url);
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault(); setFormError(null);
    if (!form.name.trim() || !form.description.trim() || form.price <= 0 || !form.category_id || !form.main_image_url) { setFormError('Please complete the required fields: name, description, price, category, and main image.'); return; }
    setSaving(true);
    const payload = { ...form, name: form.name.trim(), slug: `${slugify(form.name)}-${Date.now().toString(36)}`, price: Number(form.price), stock_quantity: Number(form.stock_quantity) };
    const result = product ? await supabase.from('products').update(payload).eq('id', product.id) : await supabase.from('products').insert(payload);
    setSaving(false);
    if (result.error) { setFormError('Could not save this product. Please check the details and try again.'); return; }
    await onSaved(product ? 'Product updated.' : 'Product created.');
  };

  return <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 overflow-y-auto"><form onSubmit={submit} className="admin-form bg-white w-full sm:max-w-3xl sm:rounded-2xl rounded-t-2xl max-h-[95vh] overflow-y-auto"><div className="sticky top-0 z-10 bg-white border-b border-[#0A3D2B]/10 p-5 flex items-center justify-between"><div><h2 className="font-serif text-2xl text-[#0A3D2B]">{product ? 'Edit product' : 'Add new product'}</h2><p className="text-xs text-[#112F23]/60 mt-1">Fields marked * are required.</p></div><button type="button" onClick={onClose} className="p-2 rounded-full hover:bg-[#f6f9f7]" aria-label="Close"><X className="w-5 h-5" /></button></div><div className="p-5 sm:p-7 space-y-6">
    {formError && <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-800 text-sm flex gap-2"><AlertCircle className="w-4 h-4 shrink-0" />{formError}</div>}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><Field label="Product name *"><input required value={form.name} onChange={(e) => update('name', e.target.value)} /></Field><Field label="Price (₦) *"><input required type="number" min="1" value={form.price || ''} onChange={(e) => update('price', Number(e.target.value))} /></Field></div>
    <Field label="Description *"><textarea required rows={3} value={form.description} onChange={(e) => update('description', e.target.value)} /></Field>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><Field label="Category *"><select required value={form.category_id ?? ''} onChange={(e) => update('category_id', e.target.value || null)}><option value="">Choose a category</option>{categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}</select></Field><Field label="SKU / reference"><input value={form.sku ?? ''} onChange={(e) => update('sku', e.target.value || null)} /></Field></div>
    <div><label className="block text-sm font-semibold text-[#0A3D2B] mb-2">Main image *</label>{form.main_image_url ? <div className="flex items-center gap-4"><ProductImage src={form.main_image_url} alt="Main product" className="w-24 h-24 rounded-lg" /><button type="button" onClick={() => update('main_image_url', null)} className="text-sm text-rose-600 hover:underline">Remove image</button></div> : <ImageUpload onFile={(file) => upload(file)} uploading={uploading} />}</div>
    <div><label className="block text-sm font-semibold text-[#0A3D2B] mb-2">Additional images</label><div className="flex flex-wrap gap-3">{form.gallery_image_urls.map((url) => <div key={url} className="relative"><ProductImage src={url} alt="Gallery" className="w-20 h-20 rounded-lg" /><button type="button" onClick={() => update('gallery_image_urls', form.gallery_image_urls.filter((x) => x !== url))} className="absolute -top-2 -right-2 w-5 h-5 bg-rose-600 text-white rounded-full flex items-center justify-center"><X className="w-3 h-3" /></button></div>)}<ImageUpload onFile={(file) => upload(file, true)} uploading={uploading} compact /></div></div>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4"><Field label="Availability"><select value={form.availability_status} onChange={(e) => update('availability_status', e.target.value as AvailabilityStatus)}>{Object.entries(AVAILABILITY_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></Field><Field label="Stock quantity"><input type="number" min="0" value={form.stock_quantity} onChange={(e) => update('stock_quantity', Number(e.target.value))} /></Field><Field label="Publication"><select value={form.publication_status} onChange={(e) => update('publication_status', e.target.value as 'draft' | 'published')}><option value="published">Publish now</option><option value="draft">Save as draft</option></select></Field></div>
    <div><h3 className="font-semibold text-[#0A3D2B] mb-3">Plant details <span className="font-normal text-[#112F23]/50 text-sm">(optional)</span></h3><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><Field label="Botanical name"><input value={form.plant_attributes.botanicalName ?? ''} onChange={(e) => updateAttr('botanicalName', e.target.value)} /></Field><Field label="Plant height / size"><input value={form.plant_attributes.height ?? ''} onChange={(e) => updateAttr('height', e.target.value)} /></Field><Field label="Pot size"><input value={form.plant_attributes.potSize ?? ''} onChange={(e) => updateAttr('potSize', e.target.value)} /></Field><Field label="Sunlight"><input value={form.plant_attributes.sunlight ?? ''} onChange={(e) => updateAttr('sunlight', e.target.value)} /></Field><Field label="Watering"><input value={form.plant_attributes.watering ?? ''} onChange={(e) => updateAttr('watering', e.target.value)} /></Field><Field label="Soil / fertilizer"><input value={form.plant_attributes.soil ?? ''} onChange={(e) => updateAttr('soil', e.target.value)} /></Field><Field label="Care notes"><textarea rows={2} value={form.plant_attributes.notes ?? ''} onChange={(e) => updateAttr('notes', e.target.value)} /></Field></div></div>
    <label className="flex items-center gap-3 text-sm text-[#112F23]"><input type="checkbox" checked={form.is_featured} onChange={(e) => update('is_featured', e.target.checked)} className="w-4 h-4 accent-[#1E6B4E]" /> Feature this product in Popular Right Now</label>
  </div><div className="sticky bottom-0 bg-white border-t border-[#0A3D2B]/10 p-5 flex justify-end gap-3"><button type="button" onClick={onClose} className="px-5 py-3 rounded-full border border-[#0A3D2B]/20 text-[#0A3D2B] font-semibold">Cancel</button><button type="submit" disabled={saving || uploading} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1E6B4E] text-white font-semibold disabled:opacity-60">{saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Check className="w-4 h-4" />}{saving ? 'Saving…' : product ? 'Save changes' : 'Create product'}</button></div></form></div>;
}

function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="block"><span className="block text-sm font-semibold text-[#0A3D2B] mb-1.5">{label}</span>{children}</label>; }
function ImageUpload({ onFile, uploading, compact }: { onFile: (file: File) => void; uploading: boolean; compact?: boolean }) { return <label className={`flex ${compact ? 'w-20 h-20' : 'w-full h-28'} cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-[#1E6B4E]/30 hover:border-[#1E6B4E] bg-[#f6f9f7] transition-colors`}>{uploading ? <Loader2 className="w-6 h-6 text-[#1E6B4E] animate-spin" /> : <div className="text-center text-[#1E6B4E]"><ImagePlus className="w-6 h-6 mx-auto mb-1" /><span className="text-xs">{compact ? 'Add' : 'Upload image'}</span></div>}<input type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" disabled={uploading} onChange={(e) => { const file = e.target.files?.[0]; if (file) onFile(file); e.currentTarget.value = ''; }} /></label>; }
function Toast({ message, onClose }: { message: string; onClose: () => void }) { return <div className="mb-5 flex items-center justify-between gap-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 text-sm"><span className="flex items-center gap-2"><Check className="w-4 h-4" />{message}</span><button onClick={onClose} aria-label="Dismiss"><X className="w-4 h-4" /></button></div>; }
function AdminLoading() { return <div className="min-h-screen flex items-center justify-center bg-[#f6f9f7]"><Loader2 className="w-8 h-8 text-[#1E6B4E] animate-spin" /></div>; }

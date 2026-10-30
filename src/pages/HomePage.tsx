import { useEffect, useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Truck,
  Store,
  ShoppingBag,
  Sprout,
  Leaf,
  Trees,
  Ruler,
  ShieldCheck,
  HeartHandshake,
  MapPin,
  Phone,
  Instagram,
  ArrowRight,
  Sparkles,
  Home,
  Briefcase,
  Gem,
  Wind as WindIcon,
} from 'lucide-react';
import { Logo } from '@/components/Logo';
import { getWhatsAppLink, siteConfig } from '@/lib/config';
import { plantCategories } from '@/lib/plantCare';
import { classNames, formatNaira } from '@/lib/utils';
import { setPageMeta } from '@/lib/seo';
import { useProducts } from '@/lib/useProducts';
import { ProductImage } from '@/components/ProductImage';
import { galleryImages } from '@/lib/gallery';

const services = [
  {
    icon: Sprout,
    title: 'Rare & Exotic Plants',
    desc: 'Hand-selected specimens sourced for collectors and connoisseurs across Abuja.',
  },
  {
    icon: Ruler,
    title: 'Garden Design & Landscaping',
    desc: 'Bespoke outdoor design — from compact courtyards to expansive compounds.',
  },
  {
    icon: Trees,
    title: 'Maintenance & Installation',
    desc: 'Professional planting, pruning, and ongoing care to keep every garden thriving.',
  },
  {
    icon: Leaf,
    title: 'Premium Pots & Planters',
    desc: 'Curated ceramic, fiberglass & concrete pots to complement any interior.',
  },
];

const whyPlantbos = [
  { icon: ShieldCheck, title: 'Healthy, Acclimated Plants', desc: 'Every plant is nurtured and acclimated to Abuja conditions before it reaches you.' },
  { icon: HeartHandshake, title: 'Expert Guidance', desc: 'Personal advice on care, placement, and pairing — from real horticulturalists.' },
  { icon: Truck, title: 'Delivery Across Abuja', desc: 'Careful hand-delivery so your plants arrive in perfect condition.' },
  { icon: Sparkles, title: 'Curated Quality', desc: 'Only the finest specimens make it to our floor. No compromise on beauty.' },
];

const testimonials = [
  {
    name: 'Aisha M.',
    location: 'Maitama, Abuja',
    text: 'Plantbos transformed my courtyard into a serene oasis. The landscaping team is meticulous and the plants are always flawless.',
  },
  {
    name: 'Chidi O.',
    location: 'Asokoro, Abuja',
    text: 'Found a rare variegated monstera here that I had been hunting for months. The care guidance was genuinely expert-level.',
  },
  {
    name: 'Funmi A.',
    location: 'Wuse II, Abuja',
    text: 'Beautiful pots, healthy plants, and delivery was right on time. My living room finally feels alive. Highly recommend.',
  },
];

const categoryIcons: Record<string, typeof Home> = {
  home: Home,
  trees: Trees,
  wind: WindIcon,
  briefcase: Briefcase,
  gem: Gem,
  sprout: Sprout,
  leaf: Leaf,
};

const heroImages = [
  'https://images.pexels.com/photos/11518498/pexels-photo-11518498.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/5472387/pexels-photo-5472387.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/33456527/pexels-photo-33456527.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/28787255/pexels-photo-28787255.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  'https://images.pexels.com/photos/2336784/pexels-photo-2336784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
];

// ---------- Hero ----------
function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % heroImages.length);
    }, 6000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* background */}
      <div className="absolute inset-0">
        <img
          key={heroImages[activeImage]}
          src={heroImages[activeImage]}
          alt="Lush tropical plants in a sunlit garden center"
          loading={activeImage === 0 ? 'eager' : 'lazy'}
          fetchPriority={activeImage === 0 ? 'high' : 'low'}
          decoding="async"
          className="w-full h-full object-cover animate-hero-image"
        />
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 pt-28 pb-16 flex flex-col items-center max-w-4xl mx-auto">
        <div className="mb-10 animate-fade-up">
          <Logo variant="white" className="text-4xl" />
        </div>

        <h1
          className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] font-medium animate-fade-up"
          style={{ animationDelay: '0.1s' }}
        >
          Bring Nature Home
        </h1>

        <p
          className="mt-6 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed animate-fade-up"
          style={{ animationDelay: '0.2s' }}
        >
          {siteConfig.business.tagline}
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Link
            to="/shop"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1E6B4E] text-white font-semibold text-base hover:bg-[#2A8060] hover:scale-105 transition-all shadow-lg shadow-black/20"
          >
            <ShoppingBag className="w-5 h-5" />
            Shop Plants
          </Link>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-semibold text-base hover:bg-white hover:text-[#0A3D2B] transition-all"
          >
            Request a Quote
          </Link>
        </div>

        {/* trust bar */}
        <div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/90 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <span className="flex items-center gap-1.5">
            <span className="font-semibold text-white">{siteConfig.business.rating}</span>
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={classNames(
                    'w-4 h-4',
                    i < Math.round(siteConfig.business.rating)
                      ? 'fill-[#D97757] text-[#D97757]'
                      : 'text-white/40'
                  )}
                />
              ))}
            </span>
          </span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-[#D97757]" /> Delivery
          </span>
          <span className="flex items-center gap-1.5">
            <Store className="w-4 h-4 text-[#D97757]" /> Kerbside Pickup
          </span>
          <span className="flex items-center gap-1.5">
            <ShoppingBag className="w-4 h-4 text-[#D97757]" /> In-Store
          </span>
        </div>

        <div className="mt-8 flex items-center gap-2" aria-label="Hero image selector">
          {heroImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setActiveImage(index)}
              aria-label={`Show garden image ${index + 1}`}
              aria-current={activeImage === index}
              className={classNames(
                'h-1.5 rounded-full transition-all duration-300',
                activeImage === index ? 'w-8 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
              )}
            />
          ))}
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 animate-bounce">
        <ArrowRight className="w-5 h-5 rotate-90" />
      </div>
    </section>
  );
}

// ---------- Services ----------
function Services() {
  return (
    <section id="services" className="bg-[var(--card)] py-20 sm:py-28">
      <div id="contact" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">
            What We Do
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-[#0F4D36]/60 border border-white/10 rounded-2xl p-5 sm:p-8 hover:bg-[#0F4D36] hover:border-[#1E6B4E]/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-[#1E6B4E]/30 flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-[#1E6B4E] transition-colors">
                <s.icon className="w-5 h-5 sm:w-7 sm:h-7 text-[#4DA583]" />
              </div>
              <h3 className="font-serif text-lg sm:text-xl text-white mb-2 sm:mb-3">{s.title}</h3>
              <p className="text-xs sm:text-sm text-white/75 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <ConsultationForm />
      </div>
    </section>
  );
}

function ConsultationForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      'PLANTBOS LANDSCAPE CONSULTATION REQUEST',
      '',
      `Name: ${form.get('name')}`,
      `Phone: ${form.get('phone')}`,
      `Email: ${form.get('email') || 'Not provided'}`,
      `Property type: ${form.get('propertyType')}`,
      `Property location: ${form.get('location')}`,
      '',
      'Project brief:',
      `${form.get('brief')}`,
      '',
      'Please contact me to arrange a consultation and prepare a custom quote.',
    ].join('\n');

    window.open(getWhatsAppLink(message), '_blank', 'noopener,noreferrer');
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <div
      className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-cover bg-center p-6 sm:p-10"
      style={{ backgroundImage: "url('/images/follow-the-journey/featured-4.jpg')" }}
    >
      <div className="absolute inset-0 bg-[#0A3D2B]/85" />
      <div className="relative z-10">
      <div className="max-w-2xl mb-8">
        <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">
          Custom Landscape Consultation
        </p>
        <h3 className="font-serif text-3xl sm:text-4xl text-white">Let’s shape your outdoor space</h3>
        <p className="mt-3 text-white/75 leading-relaxed">
          Tell us about your property and our team will receive your request directly on WhatsApp.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="text-sm text-white/80">
          Name
          <input name="name" required className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#1E6B4E] focus:outline-none" placeholder="Your full name" />
        </label>
        <label className="text-sm text-white/80">
          Phone number
          <input name="phone" type="tel" required className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#1E6B4E] focus:outline-none" placeholder="0903 591 2539" />
        </label>
        <label className="text-sm text-white/80">
          Email <span className="text-white/45">(optional)</span>
          <input name="email" type="email" className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#1E6B4E] focus:outline-none" placeholder="you@example.com" />
        </label>
        <label className="text-sm text-white/80">
          Property type
          <select name="propertyType" required defaultValue="" className="mt-2 w-full rounded-xl border border-white/15 bg-[var(--secondary)] px-4 py-3 text-white focus:border-[#1E6B4E] focus:outline-none">
            <option value="" disabled>Select one</option>
            <option>Residential home</option>
            <option>Office or commercial space</option>
            <option>Estate or compound</option>
            <option>Hospitality venue</option>
          </select>
        </label>
        <label className="text-sm text-white/80 sm:col-span-2">
          Property location
          <input name="location" required className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#1E6B4E] focus:outline-none" placeholder="Area or address in Abuja" />
        </label>
        <label className="text-sm text-white/80 sm:col-span-2">
          What would you like to create?
          <textarea name="brief" required rows={4} className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 focus:border-[#1E6B4E] focus:outline-none" placeholder="Share your ideas, approximate size, and preferred timeline" />
        </label>
        <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-4">
          <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E6B4E] px-7 py-3.5 font-semibold text-white transition-all hover:bg-[#2A8060] hover:scale-[1.02]">
            Send consultation request
            <ArrowRight className="w-4 h-4" />
          </button>
          {sent && <p className="text-sm text-[#4DA583]">Your request is ready in WhatsApp.</p>}
        </div>
      </form>
      </div>
    </div>
  );
}

// ---------- Featured Collection ----------
function FeaturedCollection() {
  const { products, loading, error } = useProducts({ limit: 6, includeCategories: false });

  return (
    <section className="bg-[var(--background)] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">
              Curated for You
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-white">Shop Plant</h2>
          </div>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#D97757] transition-colors group"
          >
            Browse Full Collection
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="aspect-[4/3] sm:aspect-[0.92] rounded-2xl bg-white/5 animate-pulse" />
            ))}
          </div>
        )}
        {error && !loading && (
          <p className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center text-white/70">
            We could not load the latest collection right now.
          </p>
        )}
        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {products.map((product, index) => (
              <Link
                to={`/shop/${product.slug}`}
                key={product.id}
                className={classNames(
                  'group bg-[#0F4D36]/50 border border-white/10 rounded-2xl overflow-hidden hover:border-[#1E6B4E]/60 hover:-translate-y-1 transition-all duration-300',
                  index > 1 ? 'hidden sm:block' : ''
                )}
              >
                <ProductImage
                  src={product.main_image_url}
                  alt={product.name}
                  className="aspect-[4/3] sm:aspect-square"
                  imgClassName="group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-lg sm:text-xl text-white">{product.name}</h3>
                  <p className="text-xs sm:text-sm text-white/70 mt-1.5 leading-relaxed line-clamp-2">{product.description}</p>
                  <p className="mt-3 sm:mt-4 text-base sm:text-lg font-semibold text-[#4DA583]">{formatNaira(product.price)}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
        {!loading && !error && products.length === 0 && (
          <p className="rounded-2xl border border-white/10 bg-white/5 px-5 py-6 text-center text-white/70">
            New plants are being added soon. Browse the shop for the latest availability.
          </p>
        )}

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#1E6B4E] text-white font-semibold hover:bg-[#2A8060] hover:scale-105 transition-all shadow-lg"
          >
            View All Plants
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------- Why Plantbos ----------
function WhyPlantbos() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">
            The Plantbos Difference
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-[#0A3D2B]">Why Plantbos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyPlantbos.map((f) => (
            <div
              key={f.title}
              className="group bg-[#f6f9f7] border border-[#1E6B4E]/10 rounded-2xl p-8 hover:bg-white hover:shadow-xl hover:shadow-[#0A3D2B]/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#0A3D2B]/5 flex items-center justify-center mb-6 group-hover:bg-[#1E6B4E] transition-colors">
                <f.icon className="w-7 h-7 text-[#0A3D2B] group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-serif text-xl text-[#0A3D2B] mb-3">{f.title}</h3>
              <p className="text-sm text-[#112F23]/70 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------- Plant Care Knowledge Cards ----------
function PlantCareSection() {
  return (
    <section id="plant-care" className="bg-[var(--card)] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">
            Learn &amp; Grow
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white">Plant Care Hub</h2>
          <p className="mt-4 text-white/75 max-w-2xl mx-auto leading-relaxed">
            Expert seasonal care guidance for every kind of plant. Tap any card to explore
            detailed Harmattan &amp; Rainy season care for our most-loved specimens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plantCategories.map((cat, index) => {
            const Icon = categoryIcons[cat.iconKey] ?? Leaf;
            return (
              <Link
                to={`/plant-care/${cat.slug}`}
                key={cat.slug}
                className={classNames(
                  'group relative overflow-hidden rounded-2xl p-4 sm:p-7 bg-gradient-to-br border border-white/10',
                  index > 2 ? 'hidden sm:block' : '',
                  'hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40 transition-all duration-300',
                  cat.gradient
                )}
              >
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/10 flex items-center justify-center mb-3 sm:mb-5 group-hover:bg-white/20 transition-colors">
                    <Icon className={classNames('w-5 h-5 sm:w-6 sm:h-6', cat.accent)} />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white mb-2">{cat.name}</h3>
                  <p className="text-sm text-white/80 leading-relaxed">{cat.description}</p>

                  {/* "Best for" subtitle — fades in on hover; always visible on touch */}
                  <div className="mt-3 max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                    <p className={classNames('text-xs font-medium leading-relaxed', cat.accent)}>
                      Best for: {cat.bestFor}
                    </p>
                  </div>

                  <div className="mt-auto pt-5">
                    <span
                      className={classNames(
                        'inline-flex items-center gap-1.5 text-sm font-semibold',
                        cat.accent
                      )}
                    >
                      Explore
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

                {/* decorative large icon */}
                <Leaf className="absolute -bottom-4 -right-4 w-28 h-28 text-white/5 group-hover:text-white/10 transition-colors" />
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/plant-care"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[#4DA583]/60 bg-[#1E6B4E]/30 px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#1E6B4E] transition-colors"
          >
            Explore All Plant Care
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------- Visit Our Garden Center ----------
function VisitSection() {
  const addr = siteConfig.business.address;
  return (
    <section id="visit" className="bg-white py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">
              Come Say Hello
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl text-[#0A3D2B] mb-6">
              Visit Our Garden Center
            </h2>
            <div className="space-y-5 text-[#112F23]">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#1E6B4E] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{addr.line1}</p>
                  <p className="text-[#112F23]/75">{addr.line2}</p>
                  <p className="text-[#112F23]/75">{addr.line3}</p>
                  <p className="text-[#112F23]/75">
                    {addr.city}, {addr.region}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-[#1E6B4E] shrink-0" />
                <a
                  href={`tel:${siteConfig.business.phoneDisplay.replace(/\s/g, '')}`}
                  className="font-medium hover:text-[#1E6B4E] transition-colors"
                >
                  {siteConfig.business.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Instagram className="w-6 h-6 text-[#1E6B4E] shrink-0" />
                <a
                  href={siteConfig.business.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium hover:text-[#1E6B4E] transition-colors"
                >
                  {siteConfig.business.instagramHandle}
                </a>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/yA7tcW69cCdSeCBn7"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A3D2B] text-white font-semibold hover:bg-[#1E6B4E] transition-colors"
            >
              <MapPin className="w-5 h-5" />
              Open in Google Maps
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl shadow-[#0A3D2B]/10 border border-[#1E6B4E]/20 min-h-[360px]">
            <iframe
              title="Plantbos Garden Center location"
              src="https://www.google.com/maps?q=Plot+3508,+Cadastral+Zone+B11,+Kaura+District+Galadimawa,+Opposite+Kingfem+Estate,+Abuja+961102,+Federal+Capital+Territory&output=embed"
              className="w-full h-[360px] lg:h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ---------- Instagram Gallery ----------
function InstagramGallery() {
  return (
    <section className="bg-[var(--background)] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">
            Plantbos Gallery
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white">
            {siteConfig.business.instagramHandle}
          </h2>
          <a
            href={siteConfig.business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-white/80 hover:text-[#D97757] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryImages.map((src, i) => (
            <a
              key={i}
              href={siteConfig.business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={classNames(
                'group relative aspect-square overflow-hidden rounded-xl',
                i > 1 ? 'hidden sm:block' : ''
              )}
            >
              <img
                src={src}
                alt="Plantbos on Instagram"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0A3D2B]/0 group-hover:bg-[#0A3D2B]/40 transition-colors flex items-center justify-center">
                <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1E6B4E] px-7 py-3.5 text-sm font-semibold text-white hover:bg-[#2A8060] transition-colors shadow-lg"
          >
            View More
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ---------- Testimonials ----------
function Testimonials() {
  return (
    <section className="bg-[#0F4D36] py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">
            Loved by Abuja
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl text-white">What Our Clients Say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-black/10 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#D97757] text-[#D97757]" />
                ))}
              </div>
              <p className="text-[#112F23] leading-relaxed italic flex-1">“{t.text}”</p>
              <div className="mt-6 pt-5 border-t border-[#0A3D2B]/10">
                <p className="font-semibold text-[#0A3D2B]">{t.name}</p>
                <p className="text-sm text-[#112F23]/60">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomePage() {
  useEffect(() => {
    setPageMeta({
      title: 'Plantbos Gardens & Landscapes — Plants and Landscaping in Abuja',
      description: 'Shop rare plants, premium planters, and professional gardening and landscaping services from Plantbos Gardens & Landscapes in Abuja.',
      canonical: window.location.origin,
    });
  }, []);

  return (
    <>
      <Hero />
      <Services />
      <FeaturedCollection />
      <WhyPlantbos />
      <PlantCareSection />
      <VisitSection />
      <InstagramGallery />
      <Testimonials />
    </>
  );
}

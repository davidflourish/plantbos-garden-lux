import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import {
  Leaf,
  Trees,
  Wrench,
  FlowerIcon,
  Star,
  MapPin,
  Phone,
  Instagram,
  Truck,
  Store,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  MessageCircle,
  Mail,
  Droplets,
  Sun,
  Scissors,
  Check,
  Menu,
  X,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import logoWhite from "@/assets/logo-white.png";
import logoGreen from "@/assets/logo-green.png";
import recent1 from "@/assets/recent/recent-1.jpg";
import recent2 from "@/assets/recent/recent-2.jpg";
import recent3 from "@/assets/recent/recent-3.jpg";
import recent4 from "@/assets/recent/recent-4.jpg";
import recent5 from "@/assets/recent/recent-5.jpg";
import recent6 from "@/assets/recent/recent-6.jpg";
import recent7 from "@/assets/recent/recent-7.jpg";
import recent8 from "@/assets/recent/recent-8.jpg";

const SITE_URL = "https://www.plantbosgardensandlandscapes.com.ng";
const HOME_URL = `${SITE_URL}/`;
const HERO_URL = new URL(hero, HOME_URL).href;

export const Route = createFileRoute("/")({
  component: Index,

  head: () => ({
    meta: [
      { title: "Landscaping in Abuja | Plantbos Gardens" },
      {
        name: "description",
        content:
          "Transform your outdoor space with Plantbos Gardens. Explore landscaping, garden design, plant sales and garden maintenance services in Abuja. Contact us today.",
      },
      
      {
  title: "Best Landscaping in Abuja | Plantbos Gardens",
},
{
  name: "description",
  content:
    "Looking for the best landscaping in Abuja? Plantbos Gardens offers professional landscaping, garden design, plant sales and garden maintenance to transform your space. Enquire today.",
},

      {
        name: "robots",
        content: "index, follow, max-image-preview:large",
      },

      // Google Search Console verification
      {
        name: "google-site-verification",
        content: "3Ejo1Ux4Oyk4GTGXXcCP7ycybLtGl9usdzXD82DXjNs",
      },

      // Open Graph: social sharing
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Plantbos Gardens & Landscapes" },
      { property: "og:locale", content: "en_NG" },
      {
        property: "og:title",
        content: "Landscaping in Abuja | Plantbos Gardens",
      },
      {
        property: "og:description",
        content:
          "Discover professional landscaping, garden design and plant services in Abuja with Plantbos Gardens.",
      },
      { property: "og:url", content: HOME_URL },
      { property: "og:image", content: HERO_URL },
      {
        property: "og:image:alt",
        content: "Garden and landscaping services by Plantbos Gardens in Abuja",
      },

      // X / Twitter sharing
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Landscaping in Abuja | Plantbos Gardens",
      },
      {
        name: "twitter:description",
        content:
          "Explore garden design, landscaping and plant services in Abuja with Plantbos Gardens.",
      },
      { name: "twitter:image", content: HERO_URL },
      {
        name: "twitter:image:alt",
        content: "Plantbos Gardens landscaping services in Abuja",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: HOME_URL,
      },
    ],
  }),
});

const services = [
  { icon: Leaf, title: "Rare & Exotic Plants", desc: "A curated catalogue of tropical and rare varieties, ethically sourced and nursery-cared.", cta: "Shop Plants", href: "#shop" },
  { icon: Trees, title: "Garden Design & Landscaping", desc: "Bespoke outdoor sanctuaries — from concept sketches to full installation.", cta: "Book a Consultation", href: "#contact" },
  { icon: Wrench, title: "Maintenance & Installation", desc: "Ongoing care plans and expert installation that keep your green spaces thriving.", cta: "Get a Quote", href: "#contact" },
  { icon: FlowerIcon, title: "Premium Pots & Planters", desc: "Ceramic, fiberglass and concrete vessels — sculptural pieces for every interior.", cta: "Browse Planters", href: "https://instagram.com/plant_bos" },
];

const features = [
  { icon: Sparkles, title: "Curated Rarity", desc: "Hand-selected varieties you won't find elsewhere in Abuja." },
  { icon: ShieldCheck, title: "Healthy Guarantee", desc: "Every plant leaves our nursery acclimated, inspected and ready to thrive." },
  { icon: Truck, title: "Door-to-Door Delivery", desc: "Safe, climate-aware delivery across the FCT and surrounding states." },
  { icon: PackageCheck, title: "Expert Aftercare", desc: "Lifetime advice from our horticulturists — text us anytime." },
];

const testimonials = [
  { name: "Adaeze O.", role: "Interior Designer, Maitama", quote: "Plantbos transformed our showroom. The selection is unmatched and their team is meticulous." },
  { name: "Chinedu K.", role: "Homeowner, Asokoro", quote: "From design to install, every detail felt considered. Our garden is now the heart of the house." },
  { name: "Hauwa B.", role: "Boutique Owner, Wuse", quote: "Their rare collection is a dream. The Pink Princess they delivered is absolutely thriving." },
];

import { plantCategories } from "@/lib/plant-categories";
import { Home as HomeIcon, Briefcase, Sprout } from "lucide-react";

const categoryIconMap = {
  home: HomeIcon,
  trees: Trees,
  flower: FlowerIcon,
  briefcase: Briefcase,
  sparkles: Sparkles,
  sprout: Sprout,
  leaf: Leaf,
} as const;

const navLinks = [
  { label: "Shop", href: "#shop" },
  { label: "Services", href: "#services" },
  { label: "Plant Care", href: "#care" },
  { label: "Visit", href: "#visit" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-background/90 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-6"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Plantbos home">
          <img src={logoWhite} alt="Plantbos Gardens & Landscape logo" className="h-10 w-auto opacity-95" width={400} height={400} />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-10 text-sm tracking-wide text-foreground/90 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-sage transition">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-sage px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-sage-foreground transition hover:bg-sage/90 md:inline-flex"
          >
            Get a Quote
          </a>
          <a
            href="https://instagram.com/plant_bos"
            target="_blank"
            rel="noreferrer"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 text-foreground/90 hover:border-sage hover:text-sage transition md:flex"
            aria-label="Plantbos on Instagram (opens in new tab)"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-foreground transition hover:border-sage hover:text-sage md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[calc(100%+1px)] z-40 overflow-hidden bg-background/95 backdrop-blur-xl transition-all duration-300 ease-out md:hidden ${open ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <nav aria-label="Mobile" className="mx-auto flex max-w-7xl flex-col px-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-4 text-lg font-display text-foreground/90 transition hover:text-sage"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-sage px-6 py-3.5 text-sm font-medium uppercase tracking-widest text-sage-foreground transition hover:bg-sage/90"
          >
            Get a Quote
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="https://instagram.com/plant_bos"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-foreground transition hover:border-sage hover:text-sage"
            aria-label="Plantbos on Instagram (opens in new tab)"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            Follow @plant_bos
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative min-h-dvh w-full overflow-hidden">
      <img
        src={hero}
        alt="Lush tropical garden with monstera and palms at Plantbos Abuja"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
        fetchPriority="high"
        decoding="async"
      />
      <div className="absolute inset-0 bg-gradient-hero" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl flex-col items-center justify-center px-6 pt-28 text-center">
        <img
          src={logoWhite}
          alt=""
          className="mb-10 h-24 w-auto animate-fade-in md:h-28"
          width={400}
          height={400}
          aria-hidden="true"
        />
        <p className="mb-6 animate-fade-up text-xs uppercase tracking-[0.4em] text-foreground/80 delay-100">
          Abuja · Est. Lokogoma
        </p>
        <h1 id="hero-heading" className="animate-fade-up text-balance font-display text-6xl font-light leading-[1.05] text-foreground md:text-8xl delay-200">
          Bring Nature <em className="not-italic text-sage italic font-light">Home.</em>
        </h1>
        <p className="mt-8 max-w-2xl animate-fade-up text-base leading-relaxed text-foreground/85 md:text-lg delay-300">
          Rare & Exotic Plants · Professional Landscaping · Abuja's Premier Garden Center
        </p>
        <div className="mt-12 flex animate-fade-up flex-col items-center gap-4 sm:flex-row delay-500">
          <a
            href="#shop"
            className="group inline-flex items-center gap-3 rounded-full bg-sage px-8 py-4 text-sm font-medium uppercase tracking-widest text-sage-foreground shadow-luxe transition hover:bg-sage/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage"
          >
            Shop Plants
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 rounded-full border border-white/50 bg-white/5 px-8 py-4 text-sm font-medium uppercase tracking-widest text-foreground transition hover:bg-white hover:text-background"
          >
            Book a Consultation
          </a>
        </div>

        <div className="mt-16 flex animate-fade-up flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-foreground/80 delay-500">
          <span className="flex items-center gap-2" aria-label="Rated 4.8 out of 5 from 16 reviews">
            <span className="flex text-terracotta" aria-hidden="true">
              {[...Array(4)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
              <Star className="h-3.5 w-3.5 fill-current opacity-50" />
            </span>
            4.8 · 16 reviews
          </span>
          <span className="h-3 w-px bg-white/20" aria-hidden="true" />
          <span className="flex items-center gap-2"><Truck className="h-3.5 w-3.5" aria-hidden="true" /> Delivery</span>
          <span className="h-3 w-px bg-white/20" aria-hidden="true" />
          <span className="flex items-center gap-2"><PackageCheck className="h-3.5 w-3.5" aria-hidden="true" /> Kerbside Pickup</span>
          <span className="h-3 w-px bg-white/20" aria-hidden="true" />
          <span className="flex items-center gap-2"><Store className="h-3.5 w-3.5" aria-hidden="true" /> In-Store</span>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="bg-gradient-deep py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-sage">What we do</p>
          <h2 id="services-heading" className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
            A complete, considered green service.
          </h2>
        </div>
        <div className="mt-20 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, cta, href }) => (
            <article
              key={title}
              className="group relative bg-background p-10 transition duration-500 hover:bg-card"
            >
              <Icon className="h-8 w-8 text-sage transition group-hover:text-terracotta" strokeWidth={1.25} aria-hidden="true" />
              <h3 className="mt-8 text-2xl font-light">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <a
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noreferrer" } : {})}
                className="mt-8 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-sage transition hover:text-terracotta"
              >
                {cta}
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-2" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import featured1 from "@/assets/featured/featured-1.jpg";
import featured2 from "@/assets/featured/featured-2.jpg";
import featured3 from "@/assets/featured/featured-3.jpg";
import featured4 from "@/assets/featured/featured-4.jpg";
import featured5 from "@/assets/featured/featured-5.jpg";
import featured6 from "@/assets/featured/featured-6.jpg";
import featured7 from "@/assets/featured/featured-7.jpg";
import featured8 from "@/assets/featured/featured-8.jpg";
import featured9 from "@/assets/featured/featured-9.jpg";
import featured10 from "@/assets/featured/featured-10.jpg";

const featuredImages: { src: string; alt: string }[] = [
  { src: featured1, alt: "Plantbos team packaging a plant order" },
  { src: featured2, alt: "Customer holding a blooming orchid in a white pot" },
  { src: featured3, alt: "Shoppers browsing lush palms at Plantbos" },
  { src: featured4, alt: "Customer holding a pink aglaonema plant" },
  { src: featured5, alt: "Marble pothos in a woven rabbit-shaped planter" },
  { src: featured6, alt: "Glass terrarium with moss and ferns" },
  { src: featured7, alt: "Pink kalanchoe in a glass jar arrangement" },
  { src: featured8, alt: "Succulents, cacti and snake plants in white ceramic pots" },
  { src: featured9, alt: "Pilea peperomioides and aglaonema on wooden shelves" },
  { src: featured10, alt: "Cacti and pilea plants in modern white planters" },
];

function InstagramFeed() {
  return (
    <section id="shop" aria-labelledby="shop-heading" className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-xs uppercase tracking-[0.4em] text-sage">Featured collection</p>
            <h2 id="shop-heading" className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
              Straight from <em className="not-italic italic text-sage">our greenhouse.</em>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Every plant is real, in stock, and ready to travel to your home. DM us{" "}
            <a href="https://instagram.com/plant_bos" target="_blank" rel="noreferrer" className="text-sage underline underline-offset-4 hover:text-terracotta">@plant_bos</a>{" "}
            to reserve, or shop in-store in Lokogoma.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featuredImages.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 ${i === 0 || i === 5 ? "row-span-2 aspect-[3/4] sm:aspect-[3/5]" : "aspect-square"
                }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://instagram.com/plant_bos"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-sage px-10 py-4 text-sm uppercase tracking-widest text-sage-foreground shadow-luxe transition hover:bg-sage/90"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            see more products
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/2349035912539?text=Hi%20Plantbos%2C%20I%27d%20like%20to%20order%20a%20plant"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 px-10 py-4 text-sm uppercase tracking-widest text-foreground transition hover:border-sage hover:text-sage"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            get our product
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-cream py-32 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.4em] text-sage">Why Plantbos</p>
            <h2 id="why-heading" className="mt-4 text-balance font-display text-5xl font-light leading-tight md:text-6xl">
              Quietly obsessed with every leaf.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-background/80">
              For over a decade, Abuja has trusted us to bring rare botanicals indoors and design landscapes that age beautifully.
            </p>
            <img src={logoGreen} alt="Plantbos Gardens & Landscape" className="mt-12 h-20 w-auto" loading="lazy" width={400} height={400} />
          </div>
          <div className="grid gap-px overflow-hidden rounded-3xl bg-background/10 sm:grid-cols-2 lg:col-span-7">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-cream p-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background text-cream" aria-hidden="true">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <h3 className="mt-6 font-display text-2xl font-light">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-background/80">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CareTips() {
  return (
    <section id="care" aria-labelledby="care-heading" className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-sage">Plant care knowledge</p>
          <h2 id="care-heading" className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
            Grow with confidence.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Seven plant families, tailored for Abuja's Harmattan & Rainy seasons. Pick a category to explore care guides for every plant we grow.
          </p>
        </div>
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {plantCategories.map((cat) => {
            const Icon = categoryIconMap[cat.icon];
            return (
              <Link
                key={cat.slug}
                to="/category/$slug"
                params={{ slug: cat.slug }}
                className={`group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${cat.accent} p-8 transition duration-500 hover:-translate-y-2 hover:border-sage hover:shadow-luxe`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-background/40 text-sage backdrop-blur-sm" aria-hidden="true">
                    <Icon className="h-6 w-6" strokeWidth={1.4} />
                  </div>
                  <span className="font-display text-3xl font-light text-foreground/40">{cat.number}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-light leading-snug text-foreground">
                  {cat.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/80">
                  {cat.description}
                </p>
                <div className="mt-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-sage">Best for</p>
                  <p className="mt-1 text-xs leading-relaxed text-foreground/75">{cat.bestFor}</p>
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5">
                  <span className="text-xs font-medium uppercase tracking-widest text-sage">Explore</span>
                  <ArrowRight className="h-4 w-4 text-sage transition group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visit" aria-labelledby="visit-heading" className="relative overflow-hidden bg-gradient-deep py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sage">Visit us</p>
          <h2 id="visit-heading" className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
            The garden, in person.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Step into our greenhouse in Lokogoma. Wander rows of rare tropicals, talk to our horticulturists, and find the piece that fits your home.
          </p>
          <ul className="mt-12 space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} aria-hidden="true" />
              <span className="leading-relaxed text-foreground/95">
                Peace Court Estate, Kado–Galadima Road,<br />
                After Living Faith Junction, Lokogoma,<br />
                Abuja 961102
              </span>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} aria-hidden="true" />
              <a href="tel:+2349035912539" className="text-foreground/95 hover:text-sage">0903 591 2539</a>
            </li>
            <li className="flex gap-4">
              <Instagram className="mt-1 h-5 w-5 shrink-0 text-sage" strokeWidth={1.5} aria-hidden="true" />
              <a href="https://instagram.com/plant_bos" target="_blank" rel="noreferrer" className="text-foreground/95 hover:text-sage">@plant_bos</a>
            </li>
          </ul>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-luxe">
          <iframe
            title="Plantbos Gardens location on Google Maps"
            src="https://www.google.com/maps?q=Lokogoma+Abuja&output=embed"
            className="h-[520px] w-full grayscale-[40%] contrast-110"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const images = [
    { src: recent1, alt: "Lush dracaena and rubber plants at Plantbos garden Abuja" },
    { src: recent2, alt: "Money tree plants in decorative planters" },
    { src: recent3, alt: "Customer shopping at Plantbos garden showroom" },
    { src: recent4, alt: "Plantbos team assisting a customer with purchase" },
    { src: recent5, alt: "Curated indoor plant display at Plantbos Abuja" },
    { src: recent6, alt: "Marble pothos in a bunny-shaped rattan planter" },
    { src: recent7, alt: "Succulents and cacti collection in ceramic pots" },
    { src: recent8, alt: "Chinese money plant and cacti arrangement" },
  ];
  return (
    <section aria-labelledby="gallery-heading" className="bg-background py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-sage">Our landscapes</p>
            <h2 id="gallery-heading" className="mt-4 text-balance text-4xl font-light md:text-5xl">Recent projects.</h2>
          </div>
          <a
            href="https://instagram.com/plant_bos"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-sm uppercase tracking-widest text-foreground/80 hover:text-sage md:inline-flex"
          >
            See more <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">
          {images.map((img, i) => (
            <figure key={i} className="group relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" aria-hidden="true" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section aria-labelledby="reviews-heading" className="bg-gradient-deep py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-sage">Loved across Abuja</p>
          <h2 id="reviews-heading" className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
            Words from our garden community.
          </h2>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl bg-cream p-10 text-background shadow-soft">
              <div className="flex gap-1 text-terracotta" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />)}
              </div>
              <blockquote className="mt-6 font-display text-2xl font-light leading-snug">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-8 border-t border-background/10 pt-5">
                <div className="text-sm font-medium">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-background/70">{t.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim().slice(0, 100);
    const phone = String(data.get("phone") || "").trim().slice(0, 40);
    const service = String(data.get("service") || "").trim().slice(0, 80);
    const message = String(data.get("message") || "").trim().slice(0, 1000);
    if (!name || !message) return;

    const text = `Hi Plantbos! 🌿%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AService: ${encodeURIComponent(service)}%0A%0A${encodeURIComponent(message)}`;
    setStatus("sending");
    window.open(`https://wa.me/2349035912539?text=${text}`, "_blank", "noopener,noreferrer");
    setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 400);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-background py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sage">Get in touch</p>
          <h2 id="contact-heading" className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
            Book a consultation or request a quote.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
            Tell us a little about your space or the plant you're looking for. Our team responds within one working day.
          </p>
          <ul className="mt-10 space-y-4 text-sm">
            {["Free 15-minute design consultation", "Site visits across the FCT", "Aftercare & maintenance plans"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/90">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage/20 text-sage" aria-hidden="true">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-white/10 bg-card/60 p-8 shadow-luxe backdrop-blur"
          aria-label="Contact and quote request form"
        >
          <div className="grid gap-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-[0.3em] text-foreground/80">Name</label>
              <input
                id="name" name="name" type="text" required maxLength={100} autoComplete="name"
                className="w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="phone" className="mb-2 block text-xs uppercase tracking-[0.3em] text-foreground/80">Phone</label>
                <input
                  id="phone" name="phone" type="tel" maxLength={40} autoComplete="tel"
                  className="w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage focus:outline-none"
                  placeholder="0903 000 0000"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-xs uppercase tracking-[0.3em] text-foreground/80">Service</label>
                <select
                  id="service" name="service"
                  className="w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-sm text-foreground focus:border-sage focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>Select…</option>
                  <option>Buy plants</option>
                  <option>Garden design</option>
                  <option>Landscape installation</option>
                  <option>Maintenance plan</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-[0.3em] text-foreground/80">Message</label>
              <textarea
                id="message" name="message" required maxLength={1000} rows={5}
                className="w-full rounded-xl border border-white/15 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-sage focus:outline-none"
                placeholder="Tell us about your space, budget, or the plants you love…"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-2 inline-flex items-center justify-center gap-3 rounded-full bg-sage px-8 py-4 text-sm font-medium uppercase tracking-widest text-sage-foreground shadow-luxe transition hover:bg-sage/90 disabled:opacity-70"
            >
              {status === "sending" ? "Opening WhatsApp…" : status === "sent" ? "Sent ✓ Send another" : "BOOK APPOINTMENT"}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
            </button>
            <p className="text-xs text-muted-foreground">
              Prefer email? Reach us at <a className="text-sage hover:underline" href="mailto:hello@plantbos.ng">hello@plantbos.ng</a>. By sending, you agree to be contacted about your enquiry.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Newsletter() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  return (
    <section aria-labelledby="news-heading" className="bg-cream py-24 text-background">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-sage">The Greenhouse Letter</p>
          <h2 id="news-heading" className="mt-4 font-display text-4xl font-light leading-tight md:text-5xl">
            New arrivals & care tips, once a month.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-background/80">
            Get first access to rare plant drops and seasonal care guides — never spam.
          </p>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); setStatus("sent"); (e.currentTarget as HTMLFormElement).reset(); }}
          className="flex flex-col gap-3 sm:flex-row"
          aria-label="Newsletter signup"
        >
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email" type="email" required maxLength={255} autoComplete="email"
            placeholder="you@email.com"
            className="w-full flex-1 rounded-full border border-background/20 bg-background/5 px-6 py-4 text-sm text-background placeholder:text-background/50 focus:border-background focus:outline-none"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-medium uppercase tracking-widest text-cream transition hover:bg-background/90"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {status === "sent" ? "Subscribed ✓" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="footer" className="border-t border-white/10 bg-background pb-12 pt-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logoWhite} alt="Plantbos Gardens & Landscape" className="h-16 w-auto" loading="lazy" width={400} height={400} />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Abuja's premier garden center for rare botanicals, considered landscape design, and luxury planters.
            </p>
          </div>
          <nav aria-label="Footer" className="md:col-span-3">
            <h2 className="text-xs uppercase tracking-[0.3em] text-sage">Explore</h2>
            <ul className="mt-6 space-y-3 text-sm text-foreground/90">
              <li><a href="#shop" className="hover:text-sage">Shop Plants</a></li>
              <li><a href="#services" className="hover:text-sage">Services</a></li>
              <li><a href="#care" className="hover:text-sage">Plant Care</a></li>
              <li><a href="#visit" className="hover:text-sage">Visit</a></li>
              <li><a href="#contact" className="hover:text-sage">Contact</a></li>
            </ul>
          </nav>
          <div className="md:col-span-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-sage">Contact</h2>
            <address className="mt-6 space-y-3 text-sm not-italic text-foreground/90">
              <div>Peace Court Estate, Kado–Galadima Rd,<br />Lokogoma, Abuja 961102</div>
              <div><a href="tel:+2349035912539" className="hover:text-sage">0903 591 2539</a></div>
              <div><a href="https://instagram.com/plant_bos" target="_blank" rel="noreferrer" className="hover:text-sage">@plant_bos</a></div>
            </address>
          </div>
        </div>
        <div className="mt-20 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs uppercase tracking-widest text-muted-foreground sm:flex-row">
          <span>© {new Date().getFullYear()} Plantbos Gardens & Landscape</span>
          <span>Designed in Abuja · Grown with care</span>
        </div>
      </div>
    </footer>
  );
}

function WhatsApp() {
  return (
    <a
      href="https://wa.me/2349035912539?text=Hi%20Plantbos%2C%20I%27d%20like%20to%20chat"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-sage text-sage-foreground shadow-luxe transition hover:scale-110 hover:bg-sage/90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage"
      aria-label="Chat with Plantbos on WhatsApp (opens in new tab)"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
    </a>
  );
}

function Index() {
  return (
    <>
      <Nav />
      <main id="main" className="bg-background text-foreground">
        <Hero />
        <Services />
        <InstagramFeed />
        <WhyUs />
        <CareTips />
        <Visit />
        <Gallery />
        <Testimonials />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}

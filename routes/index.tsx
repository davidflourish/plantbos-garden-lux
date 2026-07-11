import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import logoWhite from "@/assets/logo-white.png";
import logoGreen from "@/assets/logo-green.png";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Plantbos Gardens & Landscape — Abuja's Premier Garden Center" },
      {
        name: "description",
        content:
          "Buy rare indoor plants, hire expert landscapers, and shop premium planters in Abuja. Delivery, kerbside pickup, and in-store shopping in Lokogoma. Book a free consultation today.",
      },
      {
        name: "keywords",
        content:
          "garden center Abuja, plants Abuja, landscaping Abuja, rare plants Nigeria, indoor plants Abuja, Lokogoma nursery, Plantbos, plant delivery Abuja, garden design Nigeria",
      },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "Plantbos Gardens & Landscape — Abuja" },
      {
        property: "og:description",
        content:
          "Rare & exotic plants, luxury landscaping and premium planters. Abuja's most-loved garden center.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: hero },
      { name: "twitter:title", content: "Plantbos Gardens & Landscape" },
      {
        name: "twitter:description",
        content: "Bring nature home. Rare plants & luxury landscaping in Abuja.",
      },
      { name: "twitter:image", content: hero },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: hero, fetchpriority: "high" } as any,
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "@id": "#local-business",
          name: "Plantbos Gardens & Landscape",
          image: hero,
          url: "/",
          telephone: "+2349035912539",
          priceRange: "₦₦₦",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Peace Court Estate, Kado–Galadima Road, After Living Faith Junction",
            addressLocality: "Lokogoma",
            addressRegion: "FCT",
            postalCode: "961102",
            addressCountry: "NG",
          },
          geo: { "@type": "GeoCoordinates", latitude: 8.9806, longitude: 7.4467 },
          openingHours: "Mo-Sa 09:00-18:00",
          sameAs: ["https://instagram.com/plant_bos"],
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.8",
            reviewCount: "16",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Garden Design & Landscaping",
          provider: { "@type": "LocalBusiness", name: "Plantbos Gardens & Landscape" },
          areaServed: { "@type": "City", name: "Abuja" },
          description:
            "Bespoke garden design, professional landscape installation, ongoing maintenance and premium planters across Abuja and the FCT.",
        }),
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

const careTips = [
  {
    icon: Droplets,
    tag: "Watering",
    title: "How often should you water indoor plants in Abuja?",
    excerpt: "In Abuja's dry season, most tropicals need water once a week — but check the top inch of soil first. Here's a simple finger-test that prevents 80% of houseplant deaths.",
  },
  {
    icon: Sun,
    tag: "Light",
    title: "Choosing plants for low-light homes",
    excerpt: "Snake plants, ZZ plants and pothos thrive in the shaded corners of Abuja apartments. Learn the light zones in your space and the perfect plant for each.",
  },
  {
    icon: Scissors,
    tag: "Care",
    title: "Fiddle leaf figs: a first-year survival guide",
    excerpt: "The fiddle leaf is famously fussy. Follow our five-step routine for the first twelve months and you'll grow a tree that owns the room.",
  },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/85 backdrop-blur-xl border-b border-white/10 py-3" : "bg-transparent py-6"
        }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2" aria-label="Plantbos home">
          <img src={logoWhite} alt="Plantbos Gardens & Landscape logo" className="h-10 w-auto opacity-95" width={400} height={400} />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-10 text-sm tracking-wide text-foreground/90 md:flex">
          <a href="#shop" className="hover:text-sage transition">Shop</a>
          <a href="#services" className="hover:text-sage transition">Services</a>
          <a href="#care" className="hover:text-sage transition">Plant Care</a>
          <a href="#visit" className="hover:text-sage transition">Visit</a>
          <a href="#contact" className="hover:text-sage transition">Contact</a>
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
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-foreground/90 hover:border-sage hover:text-sage transition"
            aria-label="Plantbos on Instagram (opens in new tab)"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
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

function InstagramFeed() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Lazy-load LightWidget script only when user scrolls near the section
    if (!wrapRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting) && !loaded) {
          const s = document.createElement("script");
          s.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
          s.async = true;
          document.body.appendChild(s);
          setLoaded(true);
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(wrapRef.current);
    return () => io.disconnect();
  }, [loaded]);

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
            Every plant on our Instagram is real, in stock, and ready to travel to your home. DM us{" "}
            <a href="https://instagram.com/plant_bos" target="_blank" rel="noreferrer" className="text-sage underline underline-offset-4 hover:text-terracotta">@plant_bos</a>{" "}
            to reserve, or shop in-store in Lokogoma.
          </p>
        </div>

        <div ref={wrapRef} className="mt-16 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2">
          {/* LightWidget — @plant_bos Instagram feed. Replace data-widget-id with the user's own from lightwidget.com after they claim the free widget. */}
          <iframe
            src="https://cdn.lightwidget.com/widgets/2f6c3d9f4b8a5c1e7d0a9f2b3e5c4d6a.html"
            title="Plantbos Instagram feed"
            className="lightwidget-widget"
            style={{ width: "100%", border: 0, overflow: "hidden", minHeight: 520 }}
            scrolling="no"
            allowTransparency
            loading="lazy"
          />
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://instagram.com/plant_bos"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-sage px-10 py-4 text-sm uppercase tracking-widest text-sage-foreground shadow-luxe transition hover:bg-sage/90"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            See more products
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </a>
          <a
            href="https://wa.me/2349035912539?text=Hi%20Plantbos%2C%20I%27d%20like%20to%20order%20a%20plant"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-white/30 px-10 py-4 text-sm uppercase tracking-widest text-foreground transition hover:border-sage hover:text-sage"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Get our product
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
          <p className="text-xs uppercase tracking-[0.4em] text-sage">Plant care tips</p>
          <h2 id="care-heading" className="mt-4 text-balance text-5xl font-light leading-tight md:text-6xl">
            Grow with confidence.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Short, practical guides from our horticulturists — written for Abuja's climate.
          </p>
        </div>
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {careTips.map(({ icon: Icon, tag, title, excerpt }) => (
            <article key={title} className="group flex flex-col rounded-3xl border border-white/10 bg-card p-8 transition hover:border-sage hover:shadow-luxe">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/15 text-sage" aria-hidden="true">
                <Icon className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-sage">{tag}</p>
              <h3 className="mt-3 font-display text-2xl font-light leading-snug">{title}</h3>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{excerpt}</p>
              <a
                href="https://wa.me/2349035912539"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-sage transition hover:text-terracotta"
              >
                Ask our team
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </article>
          ))}
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
  const images = [g1, g2, g3, g4];
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
          {images.map((src, i) => (
            <figure key={i} className="group relative aspect-square overflow-hidden rounded-2xl">
              <img
                src={src}
                alt={`Plantbos landscaping project ${i + 1} in Abuja`}
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
              {status === "sending" ? "Opening WhatsApp…" : status === "sent" ? "Sent ✓ Send another" : "Book Appointment"}
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
      {/* <a href="#main" className="skip-link">Skip to content</a> */}
      <Nav />
      <main id="main" className="bg-background text-foreground">
        <Hero />
        <Services />
        <InstagramFeed />
        <WhyUs />
        <CareTips />
        <ContactForm />
        <Gallery />
        <Testimonials />
        <Visit />
        <Newsletter />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}

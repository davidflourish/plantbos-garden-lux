import { useEffect } from 'react';
import { ArrowLeft, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryImages } from '@/lib/gallery';
import { siteConfig } from '@/lib/config';
import { setPageMeta } from '@/lib/seo';

export function GalleryPage() {
  useEffect(() => {
    setPageMeta({
      title: 'Plantbos Gallery — Plants and Gardens in Abuja',
      description: 'See the Plantbos plant and garden journey, then follow us on Instagram for more inspiration.',
      canonical: `${window.location.origin}/gallery`,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-white pt-28 pb-20 sm:pt-36">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">Plantbos Gallery</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-5">A little more green</h1>
          <p className="text-white/75 leading-relaxed">
            Explore our latest plants, garden spaces, and moments from the Plantbos journey.
          </p>
          <a
            href={siteConfig.business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-white/80 hover:text-[#D97757] transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
          {galleryImages.map((src, index) => (
            <a
              key={src}
              href={siteConfig.business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <img
                src={src}
                alt={`Plantbos gallery image ${index + 1}`}
                loading={index < 4 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0A3D2B]/0 group-hover:bg-[#0A3D2B]/45 transition-colors flex items-center justify-center">
                <Instagram className="w-7 h-7 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
}

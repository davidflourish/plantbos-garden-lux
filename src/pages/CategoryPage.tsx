import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Droplets, CloudRain, Leaf, GraduationCap, Home } from 'lucide-react';
import { getCategoryBySlug } from '@/lib/plantCare';
import { siteConfig } from '@/lib/config';
import { setPageMeta } from '@/lib/seo';

export function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  useEffect(() => {
    if (category) {
      setPageMeta({
        title: `${category.name} Plant Care — Plantbos Abuja`,
        description: `${category.description} Learn seasonal plant care for Abuja gardens from Plantbos.`,
        canonical: `${window.location.origin}/plant-care/${category.slug}`,
      });
    }
  }, [category]);

  if (!category) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 pt-24">
        <h1 className="font-serif text-3xl text-[#0A3D2B] mb-3">Category not found</h1>
        <p className="text-[#112F23]/70 mb-8">We couldn't find that plant care category.</p>
        <Link
          to="/#plant-care"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0A3D2B] text-white font-semibold hover:bg-[#1E6B4E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Plant Care
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[var(--cream)] text-[var(--secondary)]">
      {/* header */}
      <section className={`bg-gradient-to-br ${category.gradient} pt-28 pb-16`}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            to="/#plant-care"
            className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Plant Care Hub
          </Link>
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-5">
            <Leaf className={`w-8 h-8 ${category.accent}`} />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white mb-4">
            {category.name}
          </h1>
          <p className="text-white/85 text-lg max-w-2xl mx-auto leading-relaxed">
            {category.description}
          </p>
          <div className="mt-6 inline-block bg-white/10 rounded-full px-5 py-2.5">
            <p className={`text-sm font-medium ${category.accent}`}>
              Best for: {category.bestFor}
            </p>
          </div>
        </div>
      </section>

      {/* examples with care guides */}
      <section className="py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#0A3D2B] text-center mb-4">
            Seasonal Care Guides
          </h2>
          <p className="text-[#112F23]/70 text-center mb-12 max-w-2xl mx-auto">
            Five of our most-loved {category.name.toLowerCase()} — with tailored guidance for both
            the dry Harmattan and the wet Rainy season in Abuja.
          </p>

          <div className="space-y-5">
            {category.examples.map((ex, i) => (
              <div
                key={ex.name}
                className="bg-[#f6f9f7] border border-[#1E6B4E]/15 rounded-2xl overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  {/* index + name */}
                  <div className="md:w-1/4 bg-[#0A3D2B] p-6 md:p-8 flex items-center gap-4">
                    <span className="font-serif text-3xl text-[#D97757]">{i + 1}</span>
                    <h3 className="font-serif text-2xl text-white leading-tight">{ex.name}</h3>
                  </div>

                  {/* care columns */}
                  <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#1E6B4E]/15">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2 text-[#D97757]">
                        <Droplets className="w-5 h-5" />
                        <h4 className="font-semibold text-sm uppercase tracking-wider">
                          Harmattan
                        </h4>
                      </div>
                      <p className="text-[#112F23] leading-relaxed">{ex.harmattan}</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-2 text-[#1E6B4E]">
                        <CloudRain className="w-5 h-5" />
                        <h4 className="font-semibold text-sm uppercase tracking-wider">Rainy</h4>
                      </div>
                      <p className="text-[#112F23] leading-relaxed">{ex.rainy}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* mandatory bottom buttons */}
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#1E6B4E] text-white font-semibold hover:bg-[#2A8060] hover:scale-105 transition-all shadow-lg"
            >
              <GraduationCap className="w-5 h-5" />
              Join the Tutorial Class
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border-2 border-[#0A3D2B] text-[#0A3D2B] font-semibold hover:bg-[#0A3D2B] hover:text-white transition-all"
            >
              <Home className="w-5 h-5" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>

      {/* contact strip */}
      <section className="bg-[#0A3D2B] py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-white/80 text-sm">
            Questions about {category.name.toLowerCase()}? Call{' '}
            <a
              href={`tel:${siteConfig.business.phoneDisplay.replace(/\s/g, '')}`}
              className="text-[#D97757] font-semibold hover:underline"
            >
              {siteConfig.business.phoneDisplay}
            </a>{' '}
            or visit our garden center in Kaura District, Abuja.
          </p>
        </div>
      </section>
    </div>
  );
}

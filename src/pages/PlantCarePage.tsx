import { useEffect } from 'react';
import { ArrowRight, Briefcase, Gem, Home, Leaf, Sprout, Trees, Wind } from 'lucide-react';
import { Link } from 'react-router-dom';
import { plantCategories } from '@/lib/plantCare';
import { setPageMeta } from '@/lib/seo';
import { classNames } from '@/lib/utils';

const categoryIcons: Record<string, typeof Home> = {
  home: Home,
  trees: Trees,
  wind: Wind,
  briefcase: Briefcase,
  gem: Gem,
  sprout: Sprout,
  leaf: Leaf,
};

export function PlantCarePage() {
  useEffect(() => {
    setPageMeta({
      title: 'Plant Care Hub — Plantbos Abuja',
      description: 'Explore seasonal plant care guidance for indoor, outdoor, rare, edible, and office plants in Abuja.',
      canonical: `${window.location.origin}/plant-care`,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--card)] text-white pt-28 pb-20 sm:pt-36">
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <p className="text-[#D97757] text-sm font-semibold tracking-widest uppercase mb-3">Learn &amp; Grow</p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl mb-5">Plant Care Hub</h1>
          <p className="text-white/75 leading-relaxed">
            Find practical seasonal guidance for every kind of plant, from easy desk greenery to rare collector specimens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {plantCategories.map((category) => {
            const Icon = categoryIcons[category.iconKey] ?? Leaf;
            return (
              <Link
                key={category.slug}
                to={`/plant-care/${category.slug}`}
                className={classNames(
                  'group relative overflow-hidden rounded-2xl p-6 sm:p-7 bg-gradient-to-br border border-white/10 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300',
                  category.gradient
                )}
              >
                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-white/20 transition-colors">
                    <Icon className={classNames('w-6 h-6', category.accent)} />
                  </div>
                  <h2 className="font-serif text-2xl text-white mb-2">{category.name}</h2>
                  <p className="text-sm text-white/80 leading-relaxed">{category.description}</p>
                  <span className={classNames('mt-5 inline-flex items-center gap-1.5 text-sm font-semibold', category.accent)}>
                    Read care guide
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
                <Leaf className="absolute -bottom-5 -right-5 w-32 h-32 text-white/5 group-hover:text-white/10 transition-colors" />
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/#plant-care" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
            Back to Homepage
          </Link>
        </div>
      </section>
    </div>
  );
}

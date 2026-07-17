import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, Sun, CloudRain } from "lucide-react";
import { getCategory, plantCategories } from "@/lib/plant-categories";

export const Route = createFileRoute("/category/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Category not found — Plantbos" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { category } = loaderData;
    const title = `${category.title} — Care Guide | Plantbos Abuja`;
    const description = `${category.description} Full Harmattan & Rainy season care tips for ${category.examples.map((e) => e.name).join(", ")}.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: CategoryPage,
  notFoundComponent: CategoryNotFound,
  errorComponent: ({ error, reset }) => (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div>
        <h1 className="font-display text-3xl">Something went wrong</h1>
        <p className="mt-3 text-sm text-muted-foreground">{error.message}</p>
        <button onClick={reset} className="mt-6 rounded-full bg-sage px-6 py-3 text-sm text-sage-foreground">Try again</button>
      </div>
    </div>
  ),
});

function CategoryNotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-center">
      <div>
        <p className="text-xs uppercase tracking-[0.4em] text-sage">Not found</p>
        <h1 className="mt-4 font-display text-4xl font-light">Category unavailable</h1>
        <p className="mt-3 text-sm text-muted-foreground">This plant category doesn't exist.</p>
        <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage px-6 py-3 text-sm text-sage-foreground">
          <ArrowLeft className="h-4 w-4" /> Back to Homepage
        </Link>
      </div>
    </div>
  );
}

function CategoryPage() {
  const { category } = Route.useLoaderData() as { category: NonNullable<ReturnType<typeof getCategory>> };
  const others = plantCategories.filter((c) => c.slug !== category.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-white/10 bg-gradient-deep">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-sage hover:text-terracotta">
            <ArrowLeft className="h-4 w-4" /> Plantbos
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${category.accent} py-24`}>
        <div className="mx-auto max-w-6xl px-6">
          <span className="font-display text-6xl font-light text-foreground/30">{category.number}</span>
          <h1 className="mt-4 text-balance font-display text-5xl font-light leading-tight md:text-7xl">
            {category.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
            {category.description}
          </p>
        </div>
      </section>

      {/* Best for */}
      <section className="border-b border-white/10 bg-card/40 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-sage">Best for</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {category.bestFor.split(",").map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-background/40 p-5">
                <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" strokeWidth={1.5} />
                <span className="text-sm leading-relaxed text-foreground/90">{item.trim()}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-sage">Care guide</p>
          <h2 className="mt-4 font-display text-4xl font-light md:text-5xl">
            Seasonal care for every plant.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Abuja has two seasons that make or break a plant. Follow these Harmattan and Rainy season routines for reliable results.
          </p>

          <div className="mt-14 space-y-6">
            {category.examples.map((plant, idx) => (
              <article
                key={plant.name}
                className="grid gap-6 rounded-3xl border border-white/10 bg-card p-8 md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-10"
              >
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <span className="font-display text-3xl font-light text-sage">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl font-light leading-tight md:mt-2">
                    {plant.name}
                  </h3>
                </div>
                <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                  <div className="flex items-center gap-2 text-amber-400">
                    <Sun className="h-4 w-4" strokeWidth={1.6} />
                    <span className="text-[11px] font-medium uppercase tracking-[0.25em]">Harmattan</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">{plant.harmattan}</p>
                </div>
                <div className="rounded-2xl border border-sky-500/20 bg-sky-500/5 p-5">
                  <div className="flex items-center gap-2 text-sky-400">
                    <CloudRain className="h-4 w-4" strokeWidth={1.6} />
                    <span className="text-[11px] font-medium uppercase tracking-[0.25em]">Rainy Season</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">{plant.rainy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Other categories */}
      <section className="border-t border-white/10 bg-card/30 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-sage">Keep exploring</p>
          <h2 className="mt-4 font-display text-3xl font-light md:text-4xl">Other plant categories</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {others.map((c) => (
              <Link
                key={c.slug}
                to="/category/$slug"
                params={{ slug: c.slug }}
                className={`group flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br ${c.accent} p-6 transition hover:-translate-y-1 hover:border-sage`}
              >
                <span className="font-display text-2xl font-light text-foreground/40">{c.number}</span>
                <h3 className="mt-3 font-display text-xl font-light">{c.title}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-sage">
                  Explore <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA buttons */}
      <section className="bg-gradient-deep py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-4xl font-light leading-tight md:text-5xl">
            Ready to grow with us?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Join our hands-on tutorial class or head back home to keep browsing.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/"
              hash="contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage px-8 py-4 text-sm font-medium uppercase tracking-widest text-sage-foreground transition hover:bg-terracotta hover:text-terracotta-foreground sm:w-auto"
            >
              Join the Tutorial Class
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-sage px-8 py-4 text-sm font-medium uppercase tracking-widest text-sage transition hover:bg-sage hover:text-sage-foreground sm:w-auto"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

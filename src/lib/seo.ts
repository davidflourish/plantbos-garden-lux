interface PageMeta {
  title: string;
  description: string;
  canonical?: string;
}

export function setPageMeta({ title, description, canonical }: PageMeta): void {
  document.title = title;

  let descriptionTag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (!descriptionTag) {
    descriptionTag = document.createElement('meta');
    descriptionTag.name = 'description';
    document.head.appendChild(descriptionTag);
  }
  descriptionTag.content = description;

  if (canonical) {
    let canonicalTag = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.href = canonical;
  }
}

export function setProductStructuredData(product: {
  name: string;
  description: string;
  price: number;
  availability_status: string;
  main_image_url: string | null;
  slug: string;
}): () => void {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.dataset.plantbosProduct = 'true';
  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.main_image_url ? [product.main_image_url] : undefined,
    url: `${window.location.origin}/shop/${product.slug}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'NGN',
      price: product.price,
      availability: product.availability_status === 'out_of_stock'
        ? 'https://schema.org/OutOfStock'
        : 'https://schema.org/InStock',
      url: `${window.location.origin}/shop/${product.slug}`,
    },
  });
  document.head.appendChild(script);
  return () => script.remove();
}

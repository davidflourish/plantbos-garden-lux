import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';
import { classNames } from '@/lib/utils';

interface ProductImageProps {
  src: string | null | undefined;
  alt: string;
  className?: string;
  // rounded corners etc
  imgClassName?: string;
}

// Shows the product image, or an elegant botanical placeholder when no image / broken.
function getOptimizedImageUrl(src: string): string {
  const objectPath = '/storage/v1/object/public/product-images/';
  const renderPath = '/storage/v1/render/image/public/product-images/';
  const objectIndex = src.indexOf(objectPath);
  if (objectIndex === -1 || src.includes('/storage/v1/render/image/')) return src;
  return `${src.slice(0, objectIndex)}${renderPath}${src.slice(objectIndex + objectPath.length)}?width=900&quality=78&resize=cover`;
}

export function ProductImage({ src, alt, className, imgClassName }: ProductImageProps) {
  const [errored, setErrored] = useState(false);
  useEffect(() => setErrored(false), [src]);
  const showPlaceholder = !src || errored;

  return (
    <div
      className={classNames(
        'relative overflow-hidden bg-gradient-to-br from-[#0A3D2B] to-[#1E6B4E] flex items-center justify-center',
        className
      )}
    >
      {showPlaceholder ? (
        <div className="flex flex-col items-center justify-center text-white/70 p-6">
          <Leaf className="w-10 h-10 mb-2 opacity-60" />
          <span className="text-xs uppercase tracking-widest">Plantbos</span>
        </div>
      ) : (
        <img
          src={getOptimizedImageUrl(src as string)}
          alt={alt}
          loading="lazy"
          decoding="async"
          onError={(event) => {
            if (event.currentTarget.src !== src) event.currentTarget.src = src as string;
            else setErrored(true);
          }}
          className={classNames('w-full h-full object-cover', imgClassName)}
        />
      )}
    </div>
  );
}

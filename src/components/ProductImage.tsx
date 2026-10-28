import { useState } from 'react';
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
export function ProductImage({ src, alt, className, imgClassName }: ProductImageProps) {
  const [errored, setErrored] = useState(false);
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
          src={src as string}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          className={classNames('w-full h-full object-cover', imgClassName)}
        />
      )}
    </div>
  );
}

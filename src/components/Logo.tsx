import { classNames } from '@/lib/utils';

interface LogoProps {
  variant?: 'white' | 'green';
  className?: string;
  showTagline?: boolean;
  compact?: boolean;
}

export function Logo({ variant = 'white', className, showTagline = true, compact = false }: LogoProps) {
  const logoSrc = variant === 'white' ? '/logo-white.png' : '/logo-green.png';

  return (
    <div className={classNames('flex flex-col items-center leading-none select-none', className)}>
      <img src={logoSrc} alt="Plantbos Gardens & Landscape" className={classNames(compact ? 'w-24 sm:w-32' : 'w-32 sm:w-40', 'h-auto object-contain')} />
      {!showTagline && <span className="sr-only">Plantbos Gardens &amp; Landscape</span>}
    </div>
  );
}

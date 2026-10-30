import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig } from '@/lib/config';
import { classNames } from '@/lib/utils';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Service', to: '/#services' },
  { label: 'Plant Care', to: '/#plant-care' },
  { label: 'Visit', to: '/#visit' },
  { label: 'Contact', to: '/#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={classNames(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[var(--background)]/95 backdrop-blur-md shadow-lg shadow-black/20'
          : 'bg-[var(--background)]/90 backdrop-blur-sm'
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between min-h-16 sm:min-h-20 py-2">
        <Link to="/" className="shrink-0" aria-label="Plantbos home">
          <Logo variant="white" compact />
        </Link>

        {/* desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="text-sm font-medium text-white/90 hover:text-white transition-colors tracking-wide"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={siteConfig.business.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/90 hover:text-[#D97757] transition-colors"
          >
            <Instagram className="w-5 h-5" />
          </a>
        </div>

        {/* mobile toggle */}
        <button
          className="md:hidden text-white p-2 -mr-2"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden bg-[var(--background)] border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-white/90 hover:bg-white/10 rounded-lg transition-colors text-base font-medium"
              >
                {l.label}
              </Link>
            ))}
            <a
              href={siteConfig.business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-3 text-white/90 hover:bg-white/10 rounded-lg transition-colors flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

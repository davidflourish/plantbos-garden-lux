import { Link } from 'react-router-dom';
import { Instagram, Phone, MapPin, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { siteConfig, getWhatsAppLink, isWhatsAppConfigured } from '@/lib/config';

export function Footer() {
  const addr = siteConfig.business.address;

  return (
    <footer id="contact" className="bg-[var(--background)] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* brand */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start">
            <Logo variant="white" />
            <p className="mt-5 text-sm text-white/70 leading-relaxed max-w-xs text-center md:text-left">
              Abuja's premier garden center. Rare &amp; exotic plants, professional landscaping,
              and premium pots.
            </p>
            <a
              href={siteConfig.business.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-white/80 hover:text-[#D97757] transition-colors text-sm"
            >
              <Instagram className="w-5 h-5" />
              {siteConfig.business.instagramHandle}
            </a>
          </div>

          {/* quick links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-5">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/shop" className="text-white/85 hover:text-white transition-colors">
                  Shop Plants
                </Link>
              </li>
              <li>
                <Link to="/#services" className="text-white/85 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/#plant-care" className="text-white/85 hover:text-white transition-colors">
                  Plant Care
                </Link>
              </li>
              <li>
                <Link to="/#visit" className="text-white/85 hover:text-white transition-colors">
                  Visit Us
                </Link>
              </li>
            </ul>
          </div>

          {/* contact */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[#1E6B4E] shrink-0" />
                <span>
                  {addr.line1}, {addr.line2}, {addr.line3}, {addr.city}, {addr.region}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#1E6B4E] shrink-0" />
                <a href={`tel:${siteConfig.business.phoneDisplay.replace(/\s/g, '')}`} className="hover:text-white">
                  {siteConfig.business.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#1E6B4E] shrink-0" />
                {isWhatsAppConfigured() ? (
                  <a
                    href={getWhatsAppLink('Hello Plantbos team, I have a question.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    WhatsApp us
                  </a>
                ) : (
                  <span>WhatsApp coming soon</span>
                )}
              </li>
            </ul>
          </div>

          {/* hours / promise */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold tracking-widest uppercase text-white/60 mb-5">
              Our Promise
            </h3>
            <ul className="space-y-3 text-sm text-white/85">
              <li>Healthy, acclimated plants</li>
              <li>Expert landscaping design</li>
              <li>Delivery across Abuja</li>
              <li>Kerbside pickup available</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/55 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {siteConfig.business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <Link to="/#visit" className="text-white/55 hover:text-white/80 transition-colors">
              Visit
            </Link>
            <Link to="/shop" className="text-white/55 hover:text-white/80 transition-colors">
              Shop
            </Link>
            {/* discreet admin login — final utility link */}
            <Link
              to="/admin/login"
              className="text-white/40 hover:text-white/70 transition-colors"
              aria-label="Admin login"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

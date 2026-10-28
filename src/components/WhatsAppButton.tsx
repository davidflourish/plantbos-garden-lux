import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink, isWhatsAppConfigured } from '@/lib/config';

export function WhatsAppButton() {
  if (!isWhatsAppConfigured()) return null;
  return (
    <a
      href={getWhatsAppLink('Hello Plantbos team, I have a question.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/30 hover:scale-110 hover:bg-[#1ebe57] transition-all duration-300"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}

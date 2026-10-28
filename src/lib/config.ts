// Central site configuration. Edit values here to update business details.
export const siteConfig = {
  business: {
    name: 'Plantbos Gardens & Landscapes',
    tagline: "Rare & Exotic Plants • Professional Landscaping • Abuja's Premier Garden Center",
    phoneDisplay: '0903 591 2539',
    instagram: 'https://instagram.com/plant_bos',
    instagramHandle: '@plant_bos',
    address: {
      line1: 'Plot 3508, Cadestral Zone B11',
      line2: 'Kaura District Galadimawa',
      line3: 'Opposite Kingfem Estate',
      city: 'Abuja 961102',
      region: 'Federal Capital Territory',
    },
    rating: 4.8,
    reviewsCount: 16,
  },
  // WhatsApp number in international format WITHOUT +, spaces, or punctuation.
  // Example for Nigeria: 2349035912539
  // Update this to the real Plantbos WhatsApp business number.
  whatsappNumber: '2349035912539',
  // Optional delivery fee note appended to WhatsApp order inquiries.
  deliveryNote:
    'Delivery fees and final order totals are subject to confirmation by the Plantbos team.',
};

export function getWhatsAppLink(message: string): string {
  const num = siteConfig.whatsappNumber.replace(/\D/g, '');
  if (!num) return '#';
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}

export function isWhatsAppConfigured(): boolean {
  return siteConfig.whatsappNumber.replace(/\D/g, '').length >= 10;
}

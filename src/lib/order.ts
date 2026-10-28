import { Product } from './types';
import { siteConfig, getWhatsAppLink } from './config';

export interface OrderLine {
  product: Product;
  quantity: number;
}

export function buildSingleProductMessage(product: Product, quantity: number, productUrl: string): string {
  const subtotal = product.price * quantity;
  return [
    'PLANTBOS PRODUCT ORDER INQUIRY',
    '',
    'Hello Plantbos team,',
    '',
    'I am interested in purchasing this product:',
    '',
    `- Product name: ${product.name}`,
    `- Product ID: ${product.id}`,
    `- Product price: ₦${product.price.toLocaleString()}`,
    `- Quantity requested: ${quantity}`,
    `- Estimated subtotal: ₦${subtotal.toLocaleString()}`,
    `- Product link: ${productUrl}`,
    '',
    'Please confirm the current availability, delivery options, delivery charges, and the next steps for completing my purchase.',
    siteConfig.deliveryNote,
    '',
    'Thank you.',
  ].join('\n');
}

export function buildCartMessage(lines: OrderLine[], origin: string): string {
  const rows = lines.map(
    (l, i) =>
      `${i + 1}. ${l.product.name}\n   Product ID: ${l.product.id}\n   Price: ₦${l.product.price.toLocaleString()}\n   Quantity: ${l.quantity}\n   Subtotal: ₦${(l.product.price * l.quantity).toLocaleString()}`
  );
  const total = lines.reduce((s, l) => s + l.product.price * l.quantity, 0);
  return [
    'PLANTBOS PRODUCT ORDER INQUIRY',
    '',
    'Hello Plantbos team,',
    '',
    'I am interested in purchasing the following items:',
    '',
    rows.join('\n\n'),
    '',
    `Estimated order total: ₦${total.toLocaleString()}`,
    `Store link: ${origin}/shop`,
    '',
    'Please confirm the current availability, delivery options, delivery charges, and the next steps for completing my purchase.',
    '',
    siteConfig.deliveryNote,
    '',
    'Thank you.',
  ].join('\n');
}

export function whatsappSingle(product: Product, quantity: number, productUrl: string): string {
  return getWhatsAppLink(buildSingleProductMessage(product, quantity, productUrl));
}

export function whatsappCart(lines: OrderLine[], origin: string): string {
  return getWhatsAppLink(buildCartMessage(lines, origin));
}

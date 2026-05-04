const BASE = 'https://wa.me/918169817022';

export function waReserve(location: string) {
  const msg = `Hi! I'd like to reserve a table at CocoBroma ${location}. Could you help me with availability?`;
  return `${BASE}?text=${encodeURIComponent(msg)}`;
}

export function waOrder(item: string, price: number, location: string) {
  const msg = `Hi! I'd like to order: ${item} (₹${price}) from CocoBroma ${location}.`;
  return `${BASE}?text=${encodeURIComponent(msg)}`;
}

export function waGeneral(location?: string) {
  const msg = location
    ? `Hi! I'm interested in CocoBroma ${location}.`
    : `Hi! I have a question about CocoBroma Coffee.`;
  return `${BASE}?text=${encodeURIComponent(msg)}`;
}

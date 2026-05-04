import { Coffee, CupSoda, MapPin, Flame, Leaf, GlassWater, Utensils, EggFried, Sandwich, FileText, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export const MENU_CATEGORIES = [
  { id: 'hot-coffee', label: 'Hot Coffee & Brews', icon: Coffee },
  { id: 'frappe', label: 'Frappe & Cold Brews', icon: CupSoda },
  { id: 'cold-brew', label: 'Signature Cold Brews 24hrs', icon: GlassWater },
  { id: 'specials', label: 'Specials', icon: Flame },
  { id: 'matcha', label: 'Japanese Matcha Collection', icon: Leaf },
  { id: 'mocktails', label: 'Mocktails', icon: GlassWater },
  { id: 'hot-teas', label: 'Hot Teas', icon: Coffee },
  { id: 'breakfast', label: 'All Day Breakfast', icon: EggFried },
  { id: 'toast', label: 'Open Toast & Sandwiches', icon: Sandwich },
  { id: 'burger', label: 'Cocobroma Burger', icon: Utensils },
  { id: 'pasta', label: 'Pasta', icon: Utensils },
] as const;

export default function MenuPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="font-display text-5xl md:text-6xl text-[var(--color-brand)] mb-6">Our Menu</h1>
          <p className="font-ui text-[var(--color-text)] opacity-80 text-lg max-w-2xl mx-auto">
            From 24-hour cold brews to our signature Japanese Matcha collection. Find your new favourite.
          </p>
        </div>

        {/* Categories (Placeholder for MenuTabs) */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {MENU_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button key={cat.id} className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--color-brand)] text-[var(--color-bg)] font-ui text-sm hover:bg-[var(--color-accent)] hover:text-[var(--color-brand)] transition-colors shadow-sm">
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Menu Grid (Placeholder for MenuCards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-[var(--shadow-amber)] transition-all border border-[var(--color-mid)]/10">
              <div className="w-full h-48 bg-[var(--color-mid)]/10 rounded-2xl mb-4 flex items-center justify-center text-[var(--color-mid)]">
                 <Coffee size={48} opacity={0.5} />
              </div>
              <h3 className="font-display text-2xl text-[var(--color-brand)] mb-2">Bali Breeze Coconut Coffee</h3>
              <p className="font-body text-sm text-[var(--color-text)] opacity-70 mb-4 line-clamp-2">
                Espresso coffee in coconut milk, frappe, whipped cream & caramel. Our bestseller.
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-[var(--color-mid)]/10">
                <span className="font-mono text-xl text-[var(--color-accent)] font-bold">₹280</span>
                <Link href="https://wa.me/918169817022?text=Hi!+I'd+like+to+order+Bali+Breeze+Coconut+Coffee+Brew+(₹280)." target="_blank" className="text-sm font-ui font-semibold px-4 py-2 bg-[var(--color-brand)] text-[var(--color-bg)] rounded-full hover:bg-[var(--color-accent)] transition-colors">
                  Order via WA
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

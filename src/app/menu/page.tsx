import { Coffee, CupSoda, MapPin, Flame, Leaf, GlassWater, Utensils, EggFried, Sandwich, FileText, ShoppingBag, ArrowUpRight } from 'lucide-react';
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
    <main className="min-h-screen pt-32 pb-24 bg-transparent border-t border-[var(--color-text)]/10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-20 border-b border-[var(--color-text)]/10 pb-12">
          <p className="font-mono text-[var(--color-text)]/40 tracking-[0.2em] uppercase text-xs mb-6">Explore</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text)] tracking-tight mb-8">Our Menu.</h1>
          <p className="font-ui text-[var(--color-text)]/60 font-light text-lg max-w-2xl mx-auto">
            From 24-hour cold brews to our signature Japanese Matcha collection. Find your new favourite.
          </p>
        </div>

        {/* Categories (Placeholder for MenuTabs) */}
        <div className="flex flex-wrap gap-2 justify-center mb-20 border-b border-[var(--color-text)]/10 pb-12">
          {MENU_CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            return (
              <button key={cat.id} className="flex items-center gap-3 px-6 py-4 border border-[var(--color-text)]/10 text-[var(--color-text)] font-ui text-xs uppercase tracking-widest hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-colors duration-300">
                <Icon size={14} strokeWidth={1.5} />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* Menu Grid (Placeholder for MenuCards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-[var(--color-text)]/10">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="p-10 lg:p-14 border-r border-b border-[var(--color-text)]/10 group relative flex flex-col overflow-hidden transition-colors duration-500">
              
              {/* Cool Hover Fill Background */}
              <div className="absolute inset-0 bg-[var(--color-mid)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-full aspect-[4/3] bg-[var(--color-text)]/5 mb-8 flex items-center justify-center text-[var(--color-text)]/20 group-hover:bg-[var(--color-bg)]/50 group-hover:text-[var(--color-text)]/40 transition-all duration-500">
                   <Coffee size={48} strokeWidth={1} />
                </div>
                
                <h3 className="font-display text-3xl text-[var(--color-text)] mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">Bali Breeze Coconut Coffee</h3>
                
                <p className="font-ui text-sm text-[var(--color-text)]/50 mb-10 font-light leading-relaxed flex-1 group-hover:translate-x-2 transition-transform duration-500 delay-75">
                  Espresso coffee in coconut milk, frappe, whipped cream & caramel. Our bestseller.
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-[var(--color-text)]/10">
                  <span className="font-mono text-sm text-[var(--color-text)]/80">₹280</span>
                  
                  <Link href="https://wa.me/918169817022?text=Hi!+I'd+like+to+order+Bali+Breeze+Coconut+Coffee+Brew+(₹280)." target="_blank" className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest px-6 py-3 border border-[var(--color-text)]/20 text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all duration-300">
                    Order <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

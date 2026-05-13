'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Utensils, Clock, Heart } from 'lucide-react';

const FOOD_ITEMS = [
  {
    name: "Coco's English Breakfast",
    desc: 'The ultimate morning spread. Eggs, hash browns, beans, toast, and your choice of brew.',
    price: '₹420',
    category: 'Breakfast'
  },
  {
    name: 'Mushroom Sourdough Toast',
    desc: 'Creamy garlic mushrooms on toasted sourdough with a dash of truffle oil.',
    price: '₹340',
    category: 'Toast'
  },
  {
    name: 'Chicken Alfredo Spaghetti',
    desc: 'Classic rich white sauce pasta with grilled chicken and parmesan.',
    price: '₹390',
    category: 'Pasta'
  },
  {
    name: 'Peri Peri Chicken Croissant',
    desc: 'Flaky butter croissant filled with spicy peri peri chicken and fresh greens.',
    price: '₹310',
    category: 'Bakery'
  }
];

export default function AllDayDining() {
  return (
    <section className="py-32 bg-transparent border-t border-[var(--color-text)]/10">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          <div>
            <p className="font-mono text-[var(--color-text)]/40 tracking-[0.2em] uppercase text-xs mb-8">Gourmet Food</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text)] mb-8 tracking-tight">Fuel for the All-Day Dreamer.</h2>
            <p className="font-ui text-base md:text-lg text-[var(--color-text)]/60 leading-relaxed mb-12 font-light max-w-lg">
              Our kitchen never sleeps. From hearty English breakfasts at 10 AM to late-night pasta cravings at 11 PM, we serve artisanal food that pairs perfectly with your favorite brew.
            </p>
            
            <div className="flex flex-col gap-6 mb-12 border-l border-[var(--color-text)]/20 pl-6">
              <div className="flex items-center gap-4">
                <Clock size={16} className="text-[var(--color-text)]/40" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)]/80">Served All Day</span>
              </div>
              <div className="flex items-center gap-4">
                <Heart size={16} className="text-[var(--color-text)]/40" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)]/80">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-4">
                <Utensils size={16} className="text-[var(--color-text)]/40" />
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)]/80">Global Recipes</span>
              </div>
            </div>
            
            <Link href="/menu" className="inline-block border border-[var(--color-text)]/30 text-[var(--color-text)] font-ui font-medium text-xs uppercase tracking-widest px-8 py-4 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all">
              View Food Menu
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-0 border-t border-l border-[var(--color-text)]/10">
            {FOOD_ITEMS.map((item, i) => (
              <div key={item.name} className="p-8 border-b border-r border-[var(--color-text)]/10 hover:bg-[var(--color-mid)] transition-colors group">
                <div className="flex justify-between items-start mb-8">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text)]/40">{item.category}</span>
                  <span className="font-mono text-sm text-[var(--color-text)]/80">{item.price}</span>
                </div>
                <h3 className="font-display text-2xl text-[var(--color-text)] mb-4">{item.name}</h3>
                <p className="font-ui text-sm text-[var(--color-text)]/50 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Strip */}
        <div className="bg-[var(--color-text)] text-[var(--color-bg)] p-12 md:p-16 text-center">
          <h3 className="font-display text-3xl md:text-4xl mb-6 tracking-tight">Hungry? Order to your doorstep.</h3>
          <p className="font-ui text-[var(--color-bg)]/80 mb-10 max-w-xl mx-auto text-sm md:text-base font-light">
            Can't make it to the café? We bring the CocoBroma kitchen to you. Freshly prepared and delivered hot.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="https://www.zomato.com" target="_blank" className="px-8 py-4 bg-transparent border border-[var(--color-bg)]/30 text-[var(--color-bg)] font-ui text-xs uppercase tracking-widest hover:border-[var(--color-bg)] transition-all">
              Order on Zomato
            </a>
            <a href="https://www.swiggy.com" target="_blank" className="px-8 py-4 bg-[var(--color-bg)] text-[var(--color-text)] font-ui text-xs uppercase tracking-widest hover:bg-[var(--color-bg)]/90 transition-all">
              Order on Swiggy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

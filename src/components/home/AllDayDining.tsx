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
    <section className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="reveal">
            <p className="font-mono text-[var(--color-accent)] tracking-[0.2em] uppercase text-sm mb-6">Gourmet Food</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-brand)] mb-8">Fuel for the All-Day Dreamer</h2>
            <p className="font-body text-lg text-[var(--color-text)]/70 leading-relaxed mb-8">
              Our kitchen never sleeps. From hearty English breakfasts at 10 AM to late-night pasta cravings at 11 PM, we serve artisanal food that pairs perfectly with your favorite brew.
            </p>
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Clock size={20} />
                </div>
                <span className="font-ui font-semibold text-sm">Served All Day</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Heart size={20} />
                </div>
                <span className="font-ui font-semibold text-sm">Fresh Ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  <Utensils size={20} />
                </div>
                <span className="font-ui font-semibold text-sm">Global Recipes</span>
              </div>
            </div>
            <Link href="/menu" className="inline-block bg-[var(--color-brand)] text-[var(--color-bg)] font-ui font-bold px-8 py-4 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-brand)] transition-all">
              View Food Menu
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 reveal">
            {FOOD_ITEMS.map((item, i) => (
              <div key={item.name} className="bg-white p-6 rounded-3xl border border-[var(--color-mid)]/5 shadow-sm hover:shadow-md transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-accent)]">{item.category}</span>
                  <span className="font-mono font-bold text-[var(--color-brand)]">{item.price}</span>
                </div>
                <h3 className="font-display text-xl text-[var(--color-brand)] mb-3 group-hover:text-[var(--color-accent)] transition-colors">{item.name}</h3>
                <p className="font-body text-sm text-[var(--color-text)]/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Strip */}
        <div className="bg-[var(--color-brand)] rounded-[40px] p-8 md:p-12 text-center reveal">
          <h3 className="font-display text-2xl md:text-3xl text-[var(--color-bg)] mb-4">Hungry? Order to your doorstep.</h3>
          <p className="font-ui text-[var(--color-bg)]/60 mb-8 max-w-xl mx-auto text-sm md:text-base">
            Can't make it to the café? We bring the CocoBroma kitchen to you. Freshly prepared and delivered hot.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.zomato.com" target="_blank" className="px-8 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-brand)] font-ui font-bold hover:shadow-lg transition-all">
              Order on Zomato
            </a>
            <a href="https://www.swiggy.com" target="_blank" className="px-8 py-3 rounded-full bg-white text-[var(--color-brand)] font-ui font-bold hover:shadow-lg transition-all">
              Order on Swiggy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

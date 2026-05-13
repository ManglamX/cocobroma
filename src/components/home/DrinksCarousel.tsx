'use client';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useRef } from 'react';

const SIGNATURE_DRINKS = [
  {
    name: 'Bali Breeze',
    type: 'Coconut Coffee Brew',
    price: '₹280',
    tags: ['Best Seller', 'Cold'],
    color: '#E8C84A'
  },
  {
    name: 'Seoul Spark',
    type: 'Grape & Tangerine Fizz',
    price: '₹240',
    tags: ['Refreshing', 'Fizzy'],
    color: '#8DAA8F'
  },
  {
    name: 'Melbourne Mont Blanc',
    type: 'Creamy Cold Coffee',
    price: '₹290',
    tags: ['Premium', 'Smooth'],
    color: '#E88C9A'
  },
  {
    name: 'Tokyo Yuzu',
    type: 'Lemon Iced Tea Brew',
    price: '₹220',
    tags: ['Zesty', 'Iced'],
    color: '#C8853A'
  },
  {
    name: 'Hanoi Classic',
    type: 'Vietnamese Cold Brew',
    price: '₹260',
    tags: ['Strong', 'Sweet'],
    color: '#A06B50'
  }
];

export default function DrinksCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      // Get the width of a single card to scroll by that exact amount
      const cardWidth = window.innerWidth >= 768 ? 400 : 300; 
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-32 bg-transparent border-t border-[var(--color-text)]/10 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <p className="font-mono text-[var(--color-text)]/40 tracking-[0.2em] uppercase text-xs mb-6">The Selection</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text)] tracking-tight">Signature Sips.</h2>
          </div>
          <div className="flex gap-4">
            <button onClick={() => scroll('left')} className="p-4 border border-[var(--color-text)]/20 text-[var(--color-text)]/60 hover:border-[var(--color-text)] hover:text-[var(--color-bg)] hover:bg-[var(--color-text)] transition-all">
              <ChevronLeft size={24} strokeWidth={1} />
            </button>
            <button onClick={() => scroll('right')} className="p-4 border border-[var(--color-text)]/20 text-[var(--color-text)]/60 hover:border-[var(--color-text)] hover:text-[var(--color-bg)] hover:bg-[var(--color-text)] transition-all">
              <ChevronRight size={24} strokeWidth={1} />
            </button>
          </div>
        </div>

        {/* Added native smooth scrolling container with hidden scrollbar */}
        <div 
          ref={carouselRef}
          className="flex gap-0 overflow-x-auto snap-x snap-mandatory border-t border-b border-[var(--color-text)]/10 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SIGNATURE_DRINKS.map((drink, i) => (
            <motion.div
              key={drink.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[400px] flex-shrink-0 snap-start"
            >
              <div className="p-10 lg:p-14 border-r border-[var(--color-text)]/10 h-full flex flex-col hover:bg-[var(--color-mid)] transition-colors duration-500 group">
                <div
                  className="w-full aspect-[4/3] mb-12 flex items-center justify-center relative overflow-hidden"
                  style={{ backgroundColor: `${drink.color}10` }}
                >
                  <div className="text-[var(--color-text)]/20 group-hover:text-[var(--color-text)]/40 transition-colors duration-500">
                    <ShoppingCart size={64} strokeWidth={1} />
                  </div>
                  <div className="absolute top-6 left-6 flex gap-3 flex-wrap pr-4">
                    {drink.tags.map(tag => (
                      <span key={tag} className="border border-[var(--color-text)]/20 bg-[var(--color-bg)]/80 backdrop-blur-md px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-text)]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-display text-2xl lg:text-3xl text-[var(--color-text)] tracking-tight">{drink.name}</h3>
                  <span className="font-mono text-sm text-[var(--color-text)]/80 mt-2">{drink.price}</span>
                </div>
                <p className="font-ui text-[var(--color-text)]/50 text-sm mb-12 font-light flex-1">{drink.type}</p>

                <button className="w-full py-4 border border-[var(--color-text)]/20 text-[var(--color-text)] font-ui text-xs uppercase tracking-widest hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all">
                  Order via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

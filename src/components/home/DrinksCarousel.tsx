'use client';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

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
  }
];

export default function DrinksCarousel() {
  const [active, setActive] = useState(0);

  const next = () => setActive((active + 1) % SIGNATURE_DRINKS.length);
  const prev = () => setActive((active - 1 + SIGNATURE_DRINKS.length) % SIGNATURE_DRINKS.length);

  return (
    <section className="py-24 bg-[var(--color-bg)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
          <div>
            <p className="font-mono text-[var(--color-accent)] tracking-[0.2em] uppercase text-sm mb-4">The Selection</p>
            <h2 className="font-display text-4xl md:text-5xl text-[var(--color-brand)]">Signature Sips</h2>
          </div>
          <div className="flex gap-4">
            <button onClick={prev} className="p-3 rounded-full border border-[var(--color-mid)]/20 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all">
              <ChevronLeft size={24} />
            </button>
            <button onClick={next} className="p-3 rounded-full border border-[var(--color-mid)]/20 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="flex gap-8 overflow-visible">
          {SIGNATURE_DRINKS.map((drink, i) => (
            <motion.div 
              key={drink.name}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="min-w-[300px] md:min-w-[380px]"
            >
              <CardContainer containerClassName="w-full h-full py-0" className="w-full h-full">
                <CardBody className="bg-white rounded-[32px] p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-[var(--color-mid)]/5 w-full h-full group">
                  <CardItem translateZ="50"
                    className="w-full aspect-square rounded-2xl mb-8 flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: `${drink.color}15` }}
                  >
                    {/* Image Placeholder */}
                    <div className="text-[var(--color-brand)] opacity-20">
                       <ShoppingCart size={80} strokeWidth={1} />
                    </div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      {drink.tags.map(tag => (
                        <span key={tag} className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider text-[var(--color-brand)] shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardItem>

                  <div className="flex justify-between items-start mb-2">
                    <CardItem translateZ="40" as="h3" className="font-display text-2xl text-[var(--color-brand)]">{drink.name}</CardItem>
                    <CardItem translateZ="60" as="span" className="font-mono text-lg font-bold text-[var(--color-accent)]">{drink.price}</CardItem>
                  </div>
                  <CardItem translateZ="30" as="p" className="font-ui text-[var(--color-text)]/60 text-sm mb-6">{drink.type}</CardItem>
                  
                  <CardItem translateZ="20" className="w-full">
                    <button className="w-full py-4 rounded-2xl bg-[var(--color-brand)] text-[var(--color-bg)] font-ui font-bold hover:bg-[var(--color-accent)] hover:text-[var(--color-brand)] transition-all flex items-center justify-center gap-2">
                      Order via WhatsApp
                    </button>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

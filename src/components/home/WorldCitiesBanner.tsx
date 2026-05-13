'use client';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const WORLD_CITIES = [
  { city: 'Seoul', item: 'Seoul Spark Grape & Tangerine Fizz' },
  { city: 'Tokyo', item: 'Tokyo Yuzu Lemon Iced Tea Brew' },
  { city: 'Melbourne', item: 'Melbourne Mont Blanc Coffee' },
  { city: 'Hanoi', item: 'Vietnamese Cold Coffee' },
  { city: 'Bali', item: 'Bali Breeze Coconut Coffee Brew' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
};

export default function WorldCitiesBanner() {
  return (
    <section className="py-32 bg-transparent text-[var(--color-text)] overflow-hidden border-t border-[var(--color-text)]/10">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-[var(--color-text)]/40 tracking-[0.2em] uppercase text-xs mb-6">Global Inspiration</p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-6 tracking-tight">One café. Every city's favourite brew.</h2>
          <p className="font-ui text-lg mb-20 text-[var(--color-text)]/60 font-light max-w-xl mx-auto">Take a trip around the world without leaving Mumbai.</p>
        </motion.div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-5 gap-0 border-t border-l border-[var(--color-text)]/10"
        >
          {WORLD_CITIES.map((city) => (
            <motion.div variants={itemVariants} key={city.city}>
              <Link href="/menu" className="flex flex-col items-center justify-center p-10 h-full border-r border-b border-[var(--color-text)]/10 group relative overflow-hidden transition-all duration-500 hover:bg-[var(--color-text)]">
                {/* Background overlay that slides up */}
                <div className="absolute inset-0 bg-[var(--color-text)] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
                
                <div className="relative z-10 flex flex-col items-center">
                  <span className="mb-6 group-hover:scale-125 transition-transform duration-500 ease-out text-[var(--color-text)]/40 group-hover:text-[var(--color-bg)] group-hover:-translate-y-2">
                    <MapPin size={32} strokeWidth={1} />
                  </span>
                  <span className="font-display text-2xl tracking-tight mb-4 text-[var(--color-text)] group-hover:text-[var(--color-bg)] transition-colors duration-500">{city.city}</span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text)]/60 group-hover:text-[var(--color-bg)]/80 max-w-[120px] leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 text-center">
                    {city.item}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

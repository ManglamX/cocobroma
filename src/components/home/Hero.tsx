'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-transparent flex items-center overflow-hidden pt-20">
      {/* Ambient background glow behind the cup */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-text)] opacity-[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-screen-2xl mx-auto w-full px-6 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column - Content */}
        <div className="flex flex-col items-start pt-10 lg:pt-0">
          
          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex gap-8 mb-12 font-mono"
          >
            <div>
              <p className="text-2xl font-display text-[var(--color-text)]">3</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-text)]/40 mt-1">Outlets</p>
            </div>
            <div>
              <p className="text-2xl font-display text-[var(--color-text)]">80+</p>
              <p className="text-[10px] uppercase tracking-widest text-[var(--color-text)]/40 mt-1">Menu Items</p>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-6xl md:text-7xl lg:text-[7rem] leading-[1] tracking-tight mb-8 text-[var(--color-text)]"
          >
            Artisanal<br />
            Coffee.
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-ui text-[var(--color-text)]/60 text-base md:text-lg max-w-md font-light leading-relaxed mb-12"
          >
            Bali-inspired specialty brews, global flavors, and all-day dining. 
            Crafted in Mumbai with 100% non-alcoholic precision.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link 
              href="/menu" 
              className="group flex items-center bg-[var(--color-text)] text-[var(--color-bg)] rounded-none hover:bg-[var(--color-text)]/90 transition-all duration-300"
            >
              <span className="font-ui font-medium text-xs uppercase tracking-widest px-8 py-5">
                Explore Menu
              </span>
              <span className="px-5 py-5 border-l border-[var(--color-bg)]/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                <ArrowRight size={18} strokeWidth={1.5} />
              </span>
            </Link>
          </motion.div>

          {/* Socials Row */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-20 flex items-center gap-6"
          >
            <div className="h-px w-12 bg-[var(--color-text)]/20" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text)]/40">Follow Us</span>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[var(--color-text)]/10 flex items-center justify-center font-mono text-xs font-medium text-[var(--color-text)]/60 hover:text-[var(--color-bg)] hover:bg-[var(--color-text)] transition-colors duration-300">
                IG
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[var(--color-text)]/10 flex items-center justify-center font-mono text-xs font-medium text-[var(--color-text)]/60 hover:text-[var(--color-bg)] hover:bg-[var(--color-text)] transition-colors duration-300">
                FB
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-[var(--color-text)]/10 flex items-center justify-center font-mono text-xs font-medium text-[var(--color-text)]/60 hover:text-[var(--color-bg)] hover:bg-[var(--color-text)] transition-colors duration-300">
                X
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Column - Floating Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative w-full aspect-square max-w-2xl mx-auto lg:ml-auto flex items-center justify-center"
        >
          {/* Radial gradient mask to seamlessly blend the black background of the generated image into the theme */}
          <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'radial-gradient(circle, transparent 40%, var(--color-bg) 70%)' }} />
          
          <motion.img 
            src="/images/splashing-cup.png" 
            alt="Splashing Artisanal Coffee"
            animate={{ 
              y: [-15, 15, -15],
              rotate: [-1, 1, -1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 8, 
              ease: "easeInOut" 
            }}
            className="w-[120%] h-[120%] max-w-none object-contain relative z-0 mix-blend-screen"
          />
        </motion.div>

      </div>
    </section>
  );
}

'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import BlurText from '@/components/ui/BlurText';
import MagneticButton from '@/components/ui/MagneticButton';
import AnimatedBackground from '@/components/ui/AnimatedBackground';

const HEADLINE = "Born in Bali. Brewed in Mumbai.";
const TRUST_BADGES = [
  '3 Outlets in Mumbai',
  '10AM–11PM Daily',
  '80+ Menu Items',
  '100% Non-Alcoholic',
  '24hr Cold Brews',
];

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
  const y3 = useTransform(scrollY, [0, 1000], [0, -50]);

  return (
    <section className="relative min-h-screen bg-[var(--color-brand)] overflow-hidden flex flex-col pt-16">
      {/* Animated Canvas Background */}
      <AnimatedBackground />

      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
           style={{ backgroundImage: 'url(/svgs/grain-texture.svg)' }} />

      {/* Main content */}
      <div className="flex-1 max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center pt-12 lg:pt-24 pb-12 gap-12">
        {/* Left — text */}
        <div className="flex-1 z-10">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[var(--color-accent)] text-sm tracking-[0.2em] uppercase mb-6">
            Bali-Inspired · Artisanal Coffee
          </motion.p>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[var(--color-bg)] leading-tight mb-6">
            <BlurText text={HEADLINE} delay={0.4} />
          </h1>

          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="font-ui text-[var(--color-bg)]/70 text-lg mb-8 leading-relaxed">
            Specialty coffee · Global-inspired drinks · All-day food<br className="hidden sm:block"/>
            3 locations · 100% non-alcoholic · Open every day
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="flex flex-wrap gap-4">
            <MagneticButton className="bg-[var(--color-accent)] text-[var(--color-brand)] font-ui font-bold rounded-full hover:shadow-[var(--shadow-amber)] transition-all">
              <Link href="/menu" className="block px-7 py-3.5 w-full h-full">
                Explore the Menu
              </Link>
            </MagneticButton>
            <Link href="/locations"
              className="border border-[var(--color-accent)]/50 text-[var(--color-accent)] font-ui font-semibold px-7 py-3.5 rounded-full hover:border-[var(--color-accent)] transition-all">
              Find Your Outlet
            </Link>
            <a href="https://www.zomato.com" target="_blank" rel="noreferrer"
              className="border border-[var(--color-bg)]/20 text-[var(--color-bg)]/70 font-ui text-sm px-5 py-3.5 rounded-full hover:border-[var(--color-bg)]/50 transition-all flex items-center gap-2">
              🛵 Order Now
            </a>
          </motion.div>
        </div>

        {/* Right — image stack */}
        <div className="flex-1 w-full relative h-[400px] lg:h-[600px] flex items-center justify-center">
          <motion.img 
            style={{ y: y1 }}
            src="/images/hero1.png" 
            alt="Beautiful coffee drinks" 
            className="absolute right-[5%] top-[10%] w-[55%] rounded-2xl object-cover shadow-2xl z-10 border border-[var(--color-bg)]/10"
          />
          <motion.img 
            style={{ y: y2 }}
            src="/images/hero2.png" 
            alt="Cold brew in aesthetic cafe" 
            className="absolute left-[5%] top-[30%] w-[45%] rounded-2xl object-cover shadow-2xl z-20 border border-[var(--color-bg)]/10"
          />
          <motion.img 
            style={{ y: y3 }}
            src="/images/hero3.png" 
            alt="Latte art being poured" 
            className="absolute right-[15%] bottom-[5%] w-[50%] rounded-2xl object-cover shadow-2xl z-30 border border-[var(--color-bg)]/10"
          />
        </div>
      </div>

      {/* Trust strip */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="border-t border-[var(--color-mid)]/30 py-4 mt-auto z-10 relative bg-[var(--color-brand)]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-4 sm:gap-6">
          {TRUST_BADGES.map(badge => (
            <span key={badge} className="font-mono text-xs text-[var(--color-bg)]/50 tracking-wide text-center uppercase">
              {badge}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const scrollProgress = document.getElementById('scroll-progress');
      if (scrollProgress) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        scrollProgress.style.width = scrolled + '%';
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled || !isHome ? 'bg-[var(--color-brand)]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Scroll progress bar */}
      <div id="scroll-progress" />

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-xl text-[var(--color-accent)] font-bold">
          CocoBroma
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-[var(--color-bg)] font-ui text-sm font-medium">
          {['Menu', 'Locations', 'About', 'Offers', 'Gallery'].map(item => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`}
                className="hover:text-[var(--color-accent)] transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/menu"
          className="hidden md:block bg-[var(--color-accent)] text-[var(--color-brand)] font-ui font-bold text-sm px-5 py-2.5 rounded-full hover:-translate-y-0.5 hover:shadow-[var(--shadow-amber)] transition-all">
          Order Now
        </Link>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[var(--color-bg)] text-2xl" onClick={() => setMobileOpen(true)}>
          ☰
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-[var(--color-brand)] z-50 flex flex-col p-8">
            <button onClick={() => setMobileOpen(false)} className="self-end text-[var(--color-bg)] text-2xl mb-8">✕</button>

            {/* Location tabs */}
            <div className="flex gap-3 mb-8">
              {['Borivali', 'Kandivali', 'Andheri'].map(loc => (
                <Link key={loc} href={`/locations/${loc.toLowerCase()}`}
                  className="text-xs font-mono bg-[var(--color-mid)] text-[var(--color-bg)] px-3 py-1.5 rounded-full"
                  onClick={() => setMobileOpen(false)}>
                  {loc}
                </Link>
              ))}
            </div>

            <ul className="flex flex-col gap-6 font-display text-3xl text-[var(--color-bg)]">
              {['Menu', 'Locations', 'About', 'Offers', 'Gallery', 'Contact'].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} onClick={() => setMobileOpen(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Bottom social icons */}
            <div className="mt-auto flex gap-4">
              <a href="https://www.instagram.com/cocobroma" target="_blank" rel="noreferrer"
                className="text-[var(--color-accent)] font-ui text-sm">Instagram @cocobroma</a>
              <a href="https://wa.me/918169817022" target="_blank" rel="noreferrer"
                className="text-[var(--color-accent)] font-ui text-sm">WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

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
      scrolled || !isHome ? 'bg-[var(--color-bg)]/95 backdrop-blur-md shadow-sm border-b border-[var(--color-text)]/10' : 'bg-transparent'
    }`}>
      {/* Scroll progress bar */}
      <div id="scroll-progress" />

      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-xl text-[var(--color-text)] font-bold tracking-tight">
          CocoBroma
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-[var(--color-text)] font-ui text-sm font-medium">
          {['Menu', 'Locations', 'About', 'Offers', 'Gallery'].map(item => (
            <li key={item}>
              <Link href={`/${item.toLowerCase()}`}
                className="hover:text-[var(--color-text)]/50 transition-colors relative group">
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link href="/menu"
          className="hidden md:block border border-[var(--color-text)]/30 text-[var(--color-text)] font-ui font-medium text-xs uppercase tracking-widest px-6 py-2.5 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all">
          Order Now
        </Link>

        {/* Mobile hamburger */}
        <button className="md:hidden text-[var(--color-text)] text-2xl" onClick={() => setMobileOpen(true)}>
          ☰
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 bg-[var(--color-bg)] z-50 flex flex-col p-8">
            <button onClick={() => setMobileOpen(false)} className="self-end text-[var(--color-text)] text-2xl mb-8">✕</button>

            {/* Location tabs */}
            <div className="flex gap-3 mb-8">
              {['Borivali', 'Kandivali', 'Andheri'].map(loc => (
                <Link key={loc} href={`/locations/${loc.toLowerCase()}`}
                  className="text-xs font-mono border border-[var(--color-text)]/20 text-[var(--color-text)] px-4 py-2 uppercase tracking-widest"
                  onClick={() => setMobileOpen(false)}>
                  {loc}
                </Link>
              ))}
            </div>

            <ul className="flex flex-col gap-6 font-display text-3xl text-[var(--color-text)]">
              {['Menu', 'Locations', 'About', 'Offers', 'Gallery', 'Contact'].map(item => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} onClick={() => setMobileOpen(false)}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Bottom social icons */}
            <div className="mt-auto flex flex-col gap-4">
              <a href="https://www.instagram.com/cocobroma" target="_blank" rel="noreferrer"
                className="text-[var(--color-text)]/60 hover:text-[var(--color-text)] font-ui text-sm uppercase tracking-wider">Instagram @cocobroma</a>
              <a href="https://wa.me/918169817022" target="_blank" rel="noreferrer"
                className="text-[var(--color-text)]/60 hover:text-[var(--color-text)] font-ui text-sm uppercase tracking-wider">WhatsApp</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

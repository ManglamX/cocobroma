'use client';
import { Coffee, Laptop, Bike } from 'lucide-react';
import Link from 'next/link';

const OCCASIONS = [
  {
    id: 'work',
    title: 'Focus & Grind',
    desc: 'High-speed Wi-Fi, abundant plug points, and bottomless batch brew. The perfect setup for your deep work sessions.',
    icon: <Laptop size={24} strokeWidth={1} />,
    link: '/locations'
  },
  {
    id: 'meet',
    title: 'Catchups & Dates',
    desc: 'Cozy corners, warm lighting, and sharing plates. Build memories over our signature artisan roasts.',
    icon: <Coffee size={24} strokeWidth={1} />,
    link: '/menu'
  },
  {
    id: 'go',
    title: 'Quick Pitstop',
    desc: 'In a rush? Grab our 24hr cold brews and flaky croissants to-go. Fast, fresh, and uncompromisingly good.',
    icon: <Bike size={24} strokeWidth={1} />,
    link: '/menu'
  }
];

export default function OccasionSelector() {
  return (
    <section className="py-32 bg-transparent border-t border-[var(--color-text)]/10">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[var(--color-text)] tracking-tight max-w-xl">
            More than just coffee.
          </h2>
          <p className="font-ui text-[var(--color-text)]/50 max-w-sm text-sm md:text-base font-light">
            Whether you're closing a deal, opening a book, or just stopping by. Your space awaits.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-[var(--color-text)]/10 border-b">
          {OCCASIONS.map((occ, i) => (
            <div 
              key={occ.id} 
              className={`group flex flex-col p-10 lg:p-14 hover:bg-[var(--color-mid)] transition-colors duration-500 ${
                i !== OCCASIONS.length - 1 ? 'border-b md:border-b-0 md:border-r border-[var(--color-text)]/10' : ''
              }`}
            >
              <div className="mb-12 text-[var(--color-text)]/40 group-hover:text-[var(--color-text)] transition-colors duration-500">
                {occ.icon}
              </div>
              
              <h3 className="font-display text-2xl lg:text-3xl text-[var(--color-text)] mb-4 tracking-tight">{occ.title}</h3>
              <p className="font-ui text-[var(--color-text)]/50 mb-12 flex-1 leading-relaxed font-light text-sm lg:text-base">
                {occ.desc}
              </p>
              
              <Link href={occ.link} className="font-ui text-[var(--color-text)]/80 text-sm uppercase tracking-widest flex items-center gap-4 group-hover:gap-6 transition-all">
                Discover <span className="block w-8 h-[1px] bg-[var(--color-text)]/40 group-hover:bg-[var(--color-text)] group-hover:w-12 transition-all"></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

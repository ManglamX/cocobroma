'use client';
import { Coffee, Laptop, Bike } from 'lucide-react';
import Link from 'next/link';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

const OCCASIONS = [
  {
    id: 'work',
    title: 'Focus & Grind',
    desc: 'High-speed Wi-Fi, abundant plug points, and bottomless batch brew. The perfect setup for your deep work sessions.',
    icon: <Laptop size={32} strokeWidth={1.5} />,
    color: '#8DAA8F', // Sage
    link: '/locations'
  },
  {
    id: 'meet',
    title: 'Catchups & Dates',
    desc: 'Cozy corners, warm lighting, and sharing plates. Build memories over our signature artisan roasts.',
    icon: <Coffee size={32} strokeWidth={1.5} />,
    color: '#E88C9A', // Rose
    link: '/menu'
  },
  {
    id: 'go',
    title: 'Quick Pitstop',
    desc: 'In a rush? Grab our 24hr cold brews and flaky croissants to-go. Fast, fresh, and uncompromisingly good.',
    icon: <Bike size={32} strokeWidth={1.5} />,
    color: '#E8C84A', // Yuzu
    link: '/menu'
  }
];

export default function OccasionSelector() {
  return (
    <section className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <h2 className="font-display text-4xl md:text-5xl text-[var(--color-brand)] mb-4">Your Table Awaits</h2>
          <p className="font-ui text-[var(--color-text)]/70 max-w-2xl mx-auto text-lg">
            Whether you're closing a deal, opening a book, or just stopping by.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 stagger">
          {OCCASIONS.map((occ, i) => (
            <CardContainer key={occ.id} containerClassName="w-full h-full py-0" className="w-full h-full">
              <CardBody className="group card bg-white border border-[var(--color-brand)]/5 p-8 flex flex-col h-full reveal rounded-[20px] w-full hover:shadow-xl transition-shadow duration-300">
                <CardItem translateZ="50" className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
                     style={{ backgroundColor: `${occ.color}15`, color: occ.color }}>
                  {occ.icon}
                </CardItem>
                
                <CardItem translateZ="40" as="h3" className="font-display text-2xl text-[var(--color-brand)] mb-4">{occ.title}</CardItem>
                <CardItem translateZ="30" as="p" className="font-body text-[var(--color-text)]/70 mb-8 flex-1 leading-relaxed">
                  {occ.desc}
                </CardItem>
                
                <CardItem translateZ="20">
                  <Link href={occ.link} className="font-ui font-bold text-[var(--color-accent)] inline-flex items-center gap-2 group-hover:gap-3 transition-all relative z-10">
                    Discover More <span className="text-xl">→</span>
                  </Link>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </section>
  );
}

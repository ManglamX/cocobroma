import Link from 'next/link';
import { MapPin } from 'lucide-react';

const WORLD_CITIES = [
  { city: 'Seoul', item: 'Seoul Spark Grape & Tangerine Fizz' },
  { city: 'Tokyo', item: 'Tokyo Yuzu Lemon Iced Tea Brew' },
  { city: 'Melbourne', item: 'Melbourne Mont Blanc Coffee' },
  { city: 'Hanoi', item: 'Vietnamese Cold Coffee' },
  { city: 'Bali', item: 'Bali Breeze Coconut Coffee Brew' },
];

export default function WorldCitiesBanner() {
  return (
    <section className="py-24 bg-[var(--color-brand)] text-[var(--color-bg)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center reveal">
        <h2 className="font-display text-4xl mb-4 text-[var(--color-accent)]">One café. Every city's favourite brew.</h2>
        <p className="font-ui text-lg mb-16 opacity-80">Take a trip around the world without leaving Mumbai.</p>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 stagger">
          {WORLD_CITIES.map((city) => (
            <Link href="/menu" key={city.city} className="flex flex-col items-center group relative p-4 transition-transform hover:-translate-y-2">
              <span className="mb-4 group-hover:scale-110 transition-transform text-[var(--color-accent)]">
                <MapPin size={40} strokeWidth={1.5} />
              </span>
              <span className="font-ui text-xl font-medium tracking-wide mb-2">{city.city}</span>
              <span className="font-mono text-xs text-[var(--color-accent)] max-w-[120px] leading-tight opacity-0 group-hover:opacity-100 transition-opacity">
                {city.item}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

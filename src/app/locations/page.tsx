import Link from 'next/link';
import { LOCATIONS } from '@/lib/locations';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function LocationsIndexPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-transparent border-t border-[var(--color-text)]/10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-20 border-b border-[var(--color-text)]/10 pb-12">
          <p className="font-mono text-[var(--color-text)]/40 tracking-[0.2em] uppercase text-xs mb-6">Visit Us</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text)] tracking-tight mb-8">Our Locations.</h1>
          <p className="font-ui text-[var(--color-text)]/60 font-light text-lg max-w-xl mx-auto">
            Find your nearest CocoBroma. Three artisanal escapes across Mumbai, serving our signature brews every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-0 border-t border-[var(--color-text)]/10 border-l">
          {Object.values(LOCATIONS).map((loc) => (
            <div key={loc.slug} className="p-10 lg:p-14 border-r border-b border-[var(--color-text)]/10 hover:bg-[var(--color-mid)] transition-colors duration-500 group flex flex-col h-full">
              <h2 className="font-display text-3xl text-[var(--color-text)] mb-8 tracking-tight">{loc.name}</h2>
              
              <div className="space-y-6 mb-12 font-ui text-[var(--color-text)]/60 text-sm font-light flex-grow">
                <p className="flex gap-4">
                  <MapPin className="text-[var(--color-text)]/40 shrink-0" size={18} strokeWidth={1.5} />
                  <span>{loc.address}</span>
                </p>
                <p className="flex items-center gap-4">
                  <Clock className="text-[var(--color-text)]/40 shrink-0" size={18} strokeWidth={1.5} />
                  <span>{loc.hours}</span>
                </p>
                <p className="flex items-center gap-4">
                  <Phone className="text-[var(--color-text)]/40 shrink-0" size={18} strokeWidth={1.5} />
                  <a href={`tel:${loc.phone}`} className="hover:text-[var(--color-text)] transition-colors">{loc.phone}</a>
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <Link href={`/locations/${loc.slug}`} className="w-full py-4 text-center bg-[var(--color-text)] text-[var(--color-bg)] font-ui font-medium text-xs uppercase tracking-widest hover:bg-[var(--color-text)]/90 transition-colors">
                  View Details
                </Link>
                <a href={loc.whatsapp} target="_blank" rel="noreferrer" className="w-full py-4 text-center border border-[var(--color-text)]/20 text-[var(--color-text)] font-ui font-medium text-xs uppercase tracking-widest hover:border-[var(--color-text)] transition-colors flex items-center justify-center gap-3">
                  <MessageCircle size={16} strokeWidth={1.5} /> WhatsApp Us
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';
import { LOCATIONS } from '@/lib/locations';
import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

export default function LocationsIndexPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-[var(--color-brand)] mb-6">Our Locations</h1>
          <p className="font-ui text-[var(--color-text)] opacity-80 text-lg max-w-2xl mx-auto">
            Find your nearest CocoBroma. Three artisanal escapes across Mumbai, serving our signature brews every day.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.values(LOCATIONS).map((loc) => (
            <div key={loc.slug} className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-[var(--shadow-amber)] transition-all border border-[var(--color-mid)]/10 flex flex-col h-full">
              <h2 className="font-display text-3xl text-[var(--color-brand)] mb-6">{loc.name}</h2>
              
              <div className="space-y-4 mb-8 font-ui text-[var(--color-text)] text-sm flex-grow">
                <p className="flex gap-3">
                  <MapPin className="text-[var(--color-accent)] shrink-0" size={20} />
                  <span>{loc.address}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Clock className="text-[var(--color-accent)] shrink-0" size={20} />
                  <span>{loc.hours}</span>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="text-[var(--color-accent)] shrink-0" size={20} />
                  <a href={`tel:${loc.phone}`} className="hover:text-[var(--color-accent)] transition-colors">{loc.phone}</a>
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <Link href={`/locations/${loc.slug}`} className="w-full py-3 text-center rounded-full bg-[var(--color-brand)] text-[var(--color-bg)] font-ui font-bold hover:bg-[var(--color-accent)] hover:text-[var(--color-brand)] transition-colors">
                  View Outlet Details
                </Link>
                <a href={loc.whatsapp} target="_blank" rel="noreferrer" className="w-full py-3 text-center rounded-full border border-[var(--color-mid)]/20 text-[var(--color-brand)] font-ui font-semibold hover:border-[var(--color-accent)] transition-colors flex items-center justify-center gap-2">
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

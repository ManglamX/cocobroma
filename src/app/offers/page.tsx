import Link from 'next/link';
import { Tag, Calendar, ChevronRight } from 'lucide-react';

export default function OffersPage() {
  const offers = [
    {
      id: 1,
      title: 'Monsoon Special: 1+1 on Hot Coffees',
      desc: 'Warm up this monsoon! Buy any hot coffee and get another one absolutely free. Valid on dine-in only.',
      validity: 'Valid till August 31st',
      code: 'MONSOONB2G1'
    },
    {
      id: 2,
      title: 'Free Croissant with Cold Brews',
      desc: 'Order any of our 24-hour signature cold brews between 10 AM and 1 PM and get a freshly baked butter croissant free.',
      validity: 'Valid Monday to Friday',
      code: 'MORNINGBREW'
    },
    {
      id: 3,
      title: 'Student Discount - 15% OFF',
      desc: 'Flash your valid student ID at the counter and enjoy a flat 15% discount on your entire bill.',
      validity: 'Valid Everyday',
      code: 'STUDENT15'
    }
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 bg-transparent border-t border-[var(--color-text)]/10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="text-center mb-20 border-b border-[var(--color-text)]/10 pb-12">
          <p className="font-mono text-[var(--color-text)]/40 tracking-[0.2em] uppercase text-xs mb-6">Specials</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text)] tracking-tight mb-6">Current Offers.</h1>
          <p className="font-ui text-[var(--color-text)]/60 font-light text-lg max-w-2xl mx-auto">
            Exclusive deals and seasonal specials for our CocoBroma family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 border-t border-[var(--color-text)]/10 border-l">
          {offers.map(offer => (
            <div key={offer.id} className="p-10 lg:p-14 border-r border-b border-[var(--color-text)]/10 hover:bg-[var(--color-mid)] transition-colors duration-500 group relative flex flex-col">
              <div className="absolute top-0 right-0 bg-[var(--color-text)] text-[var(--color-bg)] text-[10px] font-medium px-4 py-2 uppercase tracking-widest font-mono z-10">
                Active Offer
              </div>
              <div className="relative z-10 h-full flex flex-col pt-8">
                <h2 className="font-display text-3xl text-[var(--color-text)] mb-6 pr-12 tracking-tight">{offer.title}</h2>
                <p className="font-ui text-[var(--color-text)]/60 mb-12 font-light leading-relaxed flex-1">
                  {offer.desc}
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-auto pt-8 border-t border-[var(--color-text)]/10">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest font-mono text-[var(--color-text)]/40">
                    <Calendar size={16} strokeWidth={1.5} />
                    <span>{offer.validity}</span>
                  </div>
                  <div className="flex items-center gap-3 px-4 py-2 border border-[var(--color-text)]/20">
                    <Tag size={14} className="text-[var(--color-text)]/40" />
                    <span className="font-mono text-xs font-medium text-[var(--color-text)]">{offer.code}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

import Link from 'next/link';
import { Tag, Calendar, ChevronRight } from 'lucide-react';
import { CardContainer, CardBody, CardItem } from '@/components/ui/3d-card';

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
    <main className="min-h-screen pt-24 pb-16 bg-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-[var(--color-brand)] mb-6">Current Offers</h1>
          <p className="font-ui text-[var(--color-text)] opacity-80 text-lg max-w-2xl mx-auto">
            Exclusive deals and seasonal specials for our CocoBroma family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {offers.map(offer => (
            <CardContainer key={offer.id} containerClassName="w-full h-full py-0" className="w-full h-full">
              <CardBody className="bg-white rounded-3xl p-8 border border-[var(--color-mid)]/10 shadow-sm relative group block h-full w-full hover:shadow-xl transition-all duration-300">
                <CardItem translateZ="50" className="absolute top-0 right-0 bg-[var(--color-accent)] text-[var(--color-brand)] text-xs font-bold px-4 py-1 rounded-bl-xl uppercase tracking-wider font-mono z-10">
                  Active Offer
                </CardItem>
                <div className="relative z-10 h-full flex flex-col">
                  <CardItem translateZ="40" as="h2" className="font-display text-2xl text-[var(--color-brand)] mb-3 pr-20">{offer.title}</CardItem>
                  <CardItem translateZ="30" as="p" className="font-body text-[var(--color-text)] opacity-80 mb-6 leading-relaxed flex-1">
                    {offer.desc}
                  </CardItem>
                  
                  <CardItem translateZ="20" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-auto pt-6 border-t border-[var(--color-mid)]/10">
                    <div className="flex items-center gap-2 text-sm font-ui text-[var(--color-brand)]/60">
                      <Calendar size={16} />
                      <span>{offer.validity}</span>
                    </div>
                    <div className="flex items-center gap-2 bg-[var(--color-light)] px-4 py-2 rounded-lg border border-[var(--color-mid)]/20 bg-white">
                      <Tag size={16} className="text-[var(--color-accent)]" />
                      <span className="font-mono text-sm font-bold text-[var(--color-brand)]">{offer.code}</span>
                    </div>
                  </CardItem>
                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>
    </main>
  );
}

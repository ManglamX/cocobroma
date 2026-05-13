'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Coffee, CupSoda, CheckCircle2 } from 'lucide-react';

const BASES = [
  { id: 'espresso', name: 'Double Espresso', price: 160 },
  { id: 'cold-brew', name: '24hr Cold Brew', price: 180 },
  { id: 'matcha', name: 'Japanese Matcha', price: 210 },
];

const MILKS = [
  { id: 'whole', name: 'Full Cream', price: 0 },
  { id: 'oat', name: 'Oat Milk', price: 60 },
  { id: 'coconut', name: 'Coconut Milk', price: 50 },
  { id: 'almond', name: 'Almond Milk', price: 60 },
];

const FLAVOURS = [
  { id: 'none', name: 'No Flavour', price: 0 },
  { id: 'vanilla', name: 'Madagascar Vanilla', price: 30 },
  { id: 'caramel', name: 'Salted Caramel', price: 30 },
  { id: 'hazelnut', name: 'Roasted Hazelnut', price: 30 },
];

export default function BuildYourBrew() {
  const [base, setBase] = useState(BASES[0]);
  const [milk, setMilk] = useState(MILKS[0]);
  const [flavour, setFlavour] = useState(FLAVOURS[0]);

  const total = base.price + milk.price + flavour.price;

  const waMessage = `Hi! I'd like to order a custom brew: ${base.name} with ${milk.name}${flavour.id !== 'none' ? ` and ${flavour.name}` : ''}. Total: ₹${total}`;

  return (
    <section className="py-32 bg-transparent border-t border-[var(--color-text)]/10 text-[var(--color-text)]">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="font-mono text-[var(--color-text)]/40 tracking-[0.2em] uppercase text-xs mb-8">Interactive</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-8 tracking-tight">Build Your Brew.</h2>
            <p className="font-ui text-base md:text-lg text-[var(--color-text)]/60 mb-12 font-light leading-relaxed">
              Design your perfect cup. Choose your base, pick your milk, and add a signature flavour. We'll craft it exactly how you like it.
            </p>

            <div className="space-y-12">
              {/* Step 1: Base */}
              <div>
                <p className="font-mono font-bold text-[10px] uppercase tracking-widest mb-4 text-[var(--color-text)]/60">01. Choose Base</p>
                <div className="flex flex-wrap gap-2">
                  {BASES.map(b => (
                    <button 
                      key={b.id}
                      onClick={() => setBase(b)}
                      className={`px-6 py-3 border font-ui text-xs uppercase tracking-widest transition-all ${
                        base.id === b.id 
                          ? 'bg-[var(--color-text)] border-[var(--color-text)] text-[var(--color-bg)] font-medium' 
                          : 'border-[var(--color-text)]/20 text-[var(--color-text)]/70 hover:border-[var(--color-text)]/50'
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Milk */}
              <div>
                <p className="font-mono font-bold text-[10px] uppercase tracking-widest mb-4 text-[var(--color-text)]/60">02. Pick Your Milk</p>
                <div className="flex flex-wrap gap-2">
                  {MILKS.map(m => (
                    <button 
                      key={m.id}
                      onClick={() => setMilk(m)}
                      className={`px-6 py-3 border font-ui text-xs uppercase tracking-widest transition-all ${
                        milk.id === m.id 
                          ? 'bg-[var(--color-text)] border-[var(--color-text)] text-[var(--color-bg)] font-medium' 
                          : 'border-[var(--color-text)]/20 text-[var(--color-text)]/70 hover:border-[var(--color-text)]/50'
                      }`}
                    >
                      {m.name} <span className="opacity-50">{m.price > 0 && `(+₹${m.price})`}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Flavour */}
              <div>
                <p className="font-mono font-bold text-[10px] uppercase tracking-widest mb-4 text-[var(--color-text)]/60">03. Add Flavour</p>
                <div className="flex flex-wrap gap-2">
                  {FLAVOURS.map(f => (
                    <button 
                      key={f.id}
                      onClick={() => setFlavour(f)}
                      className={`px-6 py-3 border font-ui text-xs uppercase tracking-widest transition-all ${
                        flavour.id === f.id 
                          ? 'bg-[var(--color-text)] border-[var(--color-text)] text-[var(--color-bg)] font-medium' 
                          : 'border-[var(--color-text)]/20 text-[var(--color-text)]/70 hover:border-[var(--color-text)]/50'
                      }`}
                    >
                      {f.name} <span className="opacity-50">{f.price > 0 && `(+₹${f.price})`}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-[var(--color-mid)]/30 border border-[var(--color-text)]/10 p-10 lg:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5 text-[var(--color-text)]">
                <Coffee size={180} strokeWidth={0.5} />
              </div>
              
              <h3 className="font-display text-3xl mb-12 tracking-tight">Your Custom Brew</h3>
              
              <div className="space-y-0 mb-16 border-t border-[var(--color-text)]/10">
                <div className="flex justify-between items-center py-6 border-b border-[var(--color-text)]/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)]/40">Base</span>
                  <span className="font-ui font-medium">{base.name}</span>
                </div>
                <div className="flex justify-between items-center py-6 border-b border-[var(--color-text)]/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)]/40">Milk</span>
                  <span className="font-ui font-medium">{milk.name}</span>
                </div>
                <div className="flex justify-between items-center py-6 border-b border-[var(--color-text)]/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)]/40">Flavour</span>
                  <span className="font-ui font-medium">{flavour.name}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-12">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-text)]/40 mb-2">Estimated Total</p>
                  <p className="font-display text-5xl">₹{total}</p>
                </div>
                <div className="text-right">
                  <p className="font-ui text-xs text-[var(--color-text)]/40 font-light">*Taxes apply</p>
                </div>
              </div>

              <a 
                href={`https://wa.me/918169817022?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                className="w-full py-5 bg-[var(--color-text)] text-[var(--color-bg)] font-ui font-medium text-xs uppercase tracking-widest text-center block hover:bg-[var(--color-text)]/90 transition-all"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

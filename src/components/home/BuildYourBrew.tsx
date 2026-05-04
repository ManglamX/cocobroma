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
    <section className="py-24 bg-[var(--color-brand)] text-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <p className="font-mono text-[var(--color-accent)] tracking-[0.2em] uppercase text-sm mb-6">Interactive</p>
            <h2 className="font-display text-4xl md:text-5xl mb-8">Build Your Brew</h2>
            <p className="font-body text-lg opacity-80 mb-10 leading-relaxed">
              Design your perfect cup. Choose your base, pick your milk, and add a signature flavour. We'll craft it exactly how you like it.
            </p>

            <div className="space-y-8">
              {/* Step 1: Base */}
              <div>
                <p className="font-ui font-bold text-sm uppercase tracking-wider mb-4 text-[var(--color-accent)]">1. Choose Base</p>
                <div className="flex flex-wrap gap-3">
                  {BASES.map(b => (
                    <button 
                      key={b.id}
                      onClick={() => setBase(b)}
                      className={`px-6 py-3 rounded-full border font-ui text-sm transition-all ${
                        base.id === b.id 
                          ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-brand)] font-bold' 
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      {b.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Milk */}
              <div>
                <p className="font-ui font-bold text-sm uppercase tracking-wider mb-4 text-[var(--color-accent)]">2. Pick Your Milk</p>
                <div className="flex flex-wrap gap-3">
                  {MILKS.map(m => (
                    <button 
                      key={m.id}
                      onClick={() => setMilk(m)}
                      className={`px-6 py-3 rounded-full border font-ui text-sm transition-all ${
                        milk.id === m.id 
                          ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-brand)] font-bold' 
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      {m.name} {m.price > 0 && `(+₹${m.price})`}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Flavour */}
              <div>
                <p className="font-ui font-bold text-sm uppercase tracking-wider mb-4 text-[var(--color-accent)]">3. Add Flavour</p>
                <div className="flex flex-wrap gap-3">
                  {FLAVOURS.map(f => (
                    <button 
                      key={f.id}
                      onClick={() => setFlavour(f)}
                      className={`px-6 py-3 rounded-full border font-ui text-sm transition-all ${
                        flavour.id === f.id 
                          ? 'bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-brand)] font-bold' 
                          : 'border-white/20 hover:border-white/40'
                      }`}
                    >
                      {f.name} {f.price > 0 && `(+₹${f.price})`}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[40px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <Coffee size={120} />
              </div>
              
              <h3 className="font-display text-3xl mb-8">Your Custom Brew</h3>
              
              <div className="space-y-4 mb-10">
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="font-ui opacity-60">Base</span>
                  <span className="font-ui font-bold">{base.name}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="font-ui opacity-60">Milk</span>
                  <span className="font-ui font-bold">{milk.name}</span>
                </div>
                <div className="flex justify-between items-center py-4 border-b border-white/10">
                  <span className="font-ui opacity-60">Flavour</span>
                  <span className="font-ui font-bold">{flavour.name}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-10">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-1">Estimated Total</p>
                  <p className="font-display text-5xl text-[var(--color-accent)]">₹{total}</p>
                </div>
                <div className="text-right">
                  <p className="font-ui text-xs opacity-40 italic">*Taxes apply at counter</p>
                </div>
              </div>

              <a 
                href={`https://wa.me/918169817022?text=${encodeURIComponent(waMessage)}`}
                target="_blank"
                className="w-full py-5 rounded-2xl bg-[var(--color-accent)] text-[var(--color-brand)] font-ui font-black text-center block hover:shadow-[var(--shadow-amber)] hover:-translate-y-1 transition-all"
              >
                Order this on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

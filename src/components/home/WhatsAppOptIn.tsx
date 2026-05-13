'use client';
import { useState } from 'react';

export default function WhatsAppOptIn() {
  const [phone, setPhone] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      window.open(`https://wa.me/918169817022?text=Hi!+I'd+like+to+subscribe+to+the+weekly+specials+for+${phone}`, '_blank');
    }
  };

  return (
    <section className="py-32 bg-transparent border-t border-[var(--color-text)]/10">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="border border-[var(--color-text)]/10 p-12 lg:p-20 text-center">
          <p className="font-mono text-[var(--color-text)]/40 tracking-[0.2em] uppercase text-xs mb-6">Stay Connected</p>
          <h2 className="font-display text-4xl lg:text-5xl text-[var(--color-text)] mb-6 tracking-tight">Get weekly specials on WhatsApp.</h2>
          <p className="font-ui text-[var(--color-text)]/60 mb-12 font-light max-w-lg mx-auto">No spam, just great coffee and exclusive offers sent directly to your phone.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto border border-[var(--color-text)]/20 p-1">
            <input 
              type="tel" 
              placeholder="Your Phone Number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="flex-1 bg-transparent px-6 py-4 font-ui text-[var(--color-text)] outline-none placeholder:text-[var(--color-text)]/30 font-light"
            />
            <button type="submit" className="bg-[var(--color-text)] text-[var(--color-bg)] font-ui font-medium text-xs uppercase tracking-widest px-8 py-4 hover:bg-[var(--color-text)]/90 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

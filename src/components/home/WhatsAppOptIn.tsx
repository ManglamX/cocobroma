'use client';
import { useState } from 'react';

export default function WhatsAppOptIn() {
  const [phone, setPhone] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone) {
      // Directs to their WhatsApp with a pre-filled message to subscribe
      window.open(`https://wa.me/918169817022?text=Hi!+I'd+like+to+subscribe+to+the+weekly+specials+for+${phone}`, '_blank');
    }
  };

  return (
    <section className="py-24 bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 rounded-3xl p-10 text-center reveal">
          <h2 className="font-display text-3xl text-[var(--color-brand)] mb-4">Get weekly specials on WhatsApp</h2>
          <p className="font-body text-[var(--color-text)] mb-8">No spam, just great coffee and exclusive offers.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="tel" 
              placeholder="Your Phone Number" 
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="flex-1 bg-white border border-[var(--color-mid)]/20 rounded-full px-6 py-3 font-ui text-[var(--color-brand)] outline-none focus:border-[var(--color-accent)] transition-colors"
            />
            <button type="submit" className="bg-[var(--color-brand)] text-[var(--color-bg)] font-ui font-bold px-8 py-3 rounded-full hover:shadow-lg transition-shadow">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

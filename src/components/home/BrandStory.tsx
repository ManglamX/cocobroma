import Link from 'next/link';

export default function BrandStory() {
  return (
    <section className="py-32 bg-transparent text-[var(--color-text)] border-t border-[var(--color-text)]/10">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <p className="font-mono text-[var(--color-text)]/40 tracking-[0.2em] uppercase text-xs mb-8">Our Story</p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mb-12 tracking-tight">Born in Bali. Brewed in Mumbai.</h2>
        <p className="font-ui text-lg md:text-xl font-light text-[var(--color-text)]/60 leading-relaxed mb-24 max-w-3xl mx-auto">
          We believe great coffee shouldn't need alcohol to taste like a good time. That's why we bring the warmth of Bali and the innovation of global café culture to every cup we brew in Mumbai.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-20 border-t border-l border-[var(--color-text)]/10">
          <div className="p-10 border-r border-b border-[var(--color-text)]/10 hover:bg-[var(--color-mid)] transition-colors duration-500">
            <p className="text-5xl font-display text-[var(--color-text)] mb-4">3</p>
            <p className="font-mono text-xs tracking-widest text-[var(--color-text)]/40 uppercase">Outlets</p>
          </div>
          <div className="p-10 border-r border-b border-[var(--color-text)]/10 hover:bg-[var(--color-mid)] transition-colors duration-500">
            <p className="text-5xl font-display text-[var(--color-text)] mb-4">500+</p>
            <p className="font-mono text-xs tracking-widest text-[var(--color-text)]/40 uppercase">Daily Cups</p>
          </div>
          <div className="p-10 border-r border-b border-[var(--color-text)]/10 hover:bg-[var(--color-mid)] transition-colors duration-500">
            <p className="text-5xl font-display text-[var(--color-text)] mb-4">80+</p>
            <p className="font-mono text-xs tracking-widest text-[var(--color-text)]/40 uppercase">Menu Items</p>
          </div>
          <div className="p-10 border-r border-b border-[var(--color-text)]/10 hover:bg-[var(--color-mid)] transition-colors duration-500">
            <p className="text-5xl font-display text-[var(--color-text)] mb-4">0%</p>
            <p className="font-mono text-xs tracking-widest text-[var(--color-text)]/40 uppercase">Alcohol</p>
          </div>
        </div>

        <Link href="/about" className="inline-block border border-[var(--color-text)]/30 text-[var(--color-text)] font-ui font-medium text-xs uppercase tracking-widest px-8 py-4 hover:bg-[var(--color-text)] hover:text-[var(--color-bg)] transition-all">
          Read Our Full Story
        </Link>
      </div>
    </section>
  );
}

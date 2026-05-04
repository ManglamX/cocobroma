import Link from 'next/link';

export default function BrandStory() {
  return (
    <section className="py-24 bg-[var(--color-brand)] text-[var(--color-bg)]">
      <div className="max-w-5xl mx-auto px-6 text-center reveal">
        <p className="font-mono text-[var(--color-accent)] tracking-[0.2em] uppercase text-sm mb-6">Our Story</p>
        <h2 className="font-display text-4xl md:text-5xl mb-12">Born in Bali. Brewed in Mumbai.</h2>
        <p className="font-body text-lg md:text-xl leading-relaxed mb-16 opacity-90 max-w-3xl mx-auto">
          We believe great coffee shouldn't need alcohol to taste like a good time. That's why we bring the warmth of Bali and the innovation of global café culture to every cup we brew in Mumbai.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 border-t border-[var(--color-mid)]/30 pt-16">
          <div>
            <p className="text-4xl font-display text-[var(--color-accent)] mb-2">3</p>
            <p className="font-mono text-xs tracking-wider opacity-70 uppercase">Outlets</p>
          </div>
          <div>
            <p className="text-4xl font-display text-[var(--color-accent)] mb-2">500+</p>
            <p className="font-mono text-xs tracking-wider opacity-70 uppercase">Daily Cups</p>
          </div>
          <div>
            <p className="text-4xl font-display text-[var(--color-accent)] mb-2">80+</p>
            <p className="font-mono text-xs tracking-wider opacity-70 uppercase">Menu Items</p>
          </div>
          <div>
            <p className="text-4xl font-display text-[var(--color-accent)] mb-2">0%</p>
            <p className="font-mono text-xs tracking-wider opacity-70 uppercase">Alcohol</p>
          </div>
        </div>

        <Link href="/about" className="inline-block border border-[var(--color-accent)] text-[var(--color-accent)] font-ui font-semibold px-8 py-3 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-brand)] transition-all">
          Read Our Full Story
        </Link>
      </div>
    </section>
  );
}

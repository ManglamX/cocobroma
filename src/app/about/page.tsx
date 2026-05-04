export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--color-bg)]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="font-mono text-[var(--color-accent)] tracking-[0.2em] uppercase text-sm mb-6">Our Story</p>
          <h1 className="font-display text-5xl md:text-6xl text-[var(--color-brand)] mb-8">Born in Bali. Brewed in Mumbai.</h1>
        </div>

        <div className="prose prose-lg mx-auto font-body text-[var(--color-text)] leading-relaxed space-y-8">
          <p className="text-xl">
            CocoBroma started with a simple question: <strong>Why should specialty coffee be so serious?</strong>
          </p>
          <p>
            During a trip to Bali, we fell in love with the vibrant, relaxed cafe culture. The coffee was world-class, but the atmosphere was completely unpretentious. People weren't just grabbing a quick caffeine fix; they were lingering, working, laughing, and living.
          </p>
          <p>
            We wanted to bring that exact feeling back to Mumbai.
          </p>
          
          <h2 className="font-display text-3xl text-[var(--color-brand)] mt-12 mb-6">The 100% Non-Alcoholic Cafe</h2>
          <p>
            We noticed something else in Mumbai: it was hard to find a great place to hang out late with friends that didn't revolve around alcohol. 
          </p>
          <p>
            That's why CocoBroma is fiercely 100% non-alcoholic. From our signature 24-hour steeped cold brews to our Japanese Matcha collection and artisan mocktails, we craft drinks that look beautiful, taste incredible, and give you the perfect buzz—purely from caffeine and good vibes.
          </p>

          <h2 className="font-display text-3xl text-[var(--color-brand)] mt-12 mb-6">Global Flavours, Local Heart</h2>
          <p>
            Our menu is a passport. We've taken inspiration from the cafes of Tokyo, the streets of Hanoi, the beaches of Bali, and the laneways of Melbourne. But at our core, we are deeply rooted in Mumbai, operating three vibrant outlets across the city, open from 10 AM to 11 PM every single day.
          </p>
        </div>
      </div>
    </main>
  );
}

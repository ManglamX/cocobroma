import Link from 'next/link';

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--color-bg)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-[var(--color-brand)] mb-6">Gallery</h1>
          <p className="font-ui text-[var(--color-text)] opacity-80 text-lg max-w-2xl mx-auto">
            A glimpse into the CocoBroma experience. Follow us on <a href="https://instagram.com/cocobroma" target="_blank" className="text-[var(--color-accent)] font-semibold hover:underline">@cocobroma</a> for more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
          {/* Placeholder Gallery Grid */}
          <div className="col-span-2 row-span-2 bg-[var(--color-mid)]/10 rounded-3xl relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-mid)]">Gallery Image 1</div>
          </div>
          <div className="bg-[var(--color-mid)]/10 rounded-3xl relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-mid)]">Gallery Image 2</div>
          </div>
          <div className="bg-[var(--color-mid)]/10 rounded-3xl relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-mid)]">Gallery Image 3</div>
          </div>
          <div className="bg-[var(--color-mid)]/10 rounded-3xl relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-mid)]">Gallery Image 4</div>
          </div>
          <div className="bg-[var(--color-mid)]/10 rounded-3xl relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-mid)]">Gallery Image 5</div>
          </div>
          <div className="col-span-2 bg-[var(--color-mid)]/10 rounded-3xl relative overflow-hidden group">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-mid)]">Gallery Image 6</div>
          </div>
        </div>
      </div>
    </main>
  );
}

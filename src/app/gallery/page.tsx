import Link from 'next/link';

export default function GalleryPage() {
  return (
    <main className="min-h-screen pt-32 pb-24 bg-transparent border-t border-[var(--color-text)]/10">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="text-center mb-20 border-b border-[var(--color-text)]/10 pb-12">
          <p className="font-mono text-[var(--color-text)]/40 tracking-[0.2em] uppercase text-xs mb-6">Moments</p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--color-text)] tracking-tight mb-8">Gallery.</h1>
          <p className="font-ui text-[var(--color-text)]/60 font-light text-lg max-w-xl mx-auto">
            A glimpse into the CocoBroma experience. Follow us on <a href="https://instagram.com/cocobroma" target="_blank" className="text-[var(--color-text)] font-medium hover:underline border-b border-[var(--color-text)]/30 pb-0.5">@cocobroma</a> for more.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border-t border-l border-[var(--color-text)]/10 auto-rows-[300px]">
          {/* Placeholder Gallery Grid */}
          <div className="col-span-2 row-span-2 border-r border-b border-[var(--color-text)]/10 relative overflow-hidden group hover:bg-[var(--color-mid)] transition-colors duration-500">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-text)]/30 font-light tracking-widest uppercase text-sm">Gallery Image 1</div>
          </div>
          <div className="border-r border-b border-[var(--color-text)]/10 relative overflow-hidden group hover:bg-[var(--color-mid)] transition-colors duration-500">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-text)]/30 font-light tracking-widest uppercase text-xs">Gallery Image 2</div>
          </div>
          <div className="border-r border-b border-[var(--color-text)]/10 relative overflow-hidden group hover:bg-[var(--color-mid)] transition-colors duration-500">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-text)]/30 font-light tracking-widest uppercase text-xs">Gallery Image 3</div>
          </div>
          <div className="border-r border-b border-[var(--color-text)]/10 relative overflow-hidden group hover:bg-[var(--color-mid)] transition-colors duration-500">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-text)]/30 font-light tracking-widest uppercase text-xs">Gallery Image 4</div>
          </div>
          <div className="border-r border-b border-[var(--color-text)]/10 relative overflow-hidden group hover:bg-[var(--color-mid)] transition-colors duration-500">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-text)]/30 font-light tracking-widest uppercase text-xs">Gallery Image 5</div>
          </div>
          <div className="col-span-2 border-r border-b border-[var(--color-text)]/10 relative overflow-hidden group hover:bg-[var(--color-mid)] transition-colors duration-500">
             <div className="absolute inset-0 flex items-center justify-center font-ui text-[var(--color-text)]/30 font-light tracking-widest uppercase text-sm">Gallery Image 6</div>
          </div>
        </div>
      </div>
    </main>
  );
}

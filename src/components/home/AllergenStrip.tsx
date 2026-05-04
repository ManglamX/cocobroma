import { AlertTriangle } from 'lucide-react';

export default function AllergenStrip() {
  return (
    <div className="bg-[var(--color-yuzu)] py-4 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
        {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i} className="flex items-center gap-4 text-[var(--color-brand)] font-mono text-xs font-bold uppercase tracking-widest">
            <AlertTriangle size={14} />
            <span>Nut-Free Options Available</span>
            <span>·</span>
            <span>Sugar-Free Variations</span>
            <span>·</span>
            <span>Ask for Vegan Milk</span>
            <span>·</span>
            <span>Inform Staff of Allergies</span>
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

import { LOCATIONS } from '@/lib/locations';
import { notFound } from 'next/navigation';
import { MapPin, Phone, Clock, MessageCircle, Navigation, ExternalLink } from 'lucide-react';

export function generateStaticParams() {
  return Object.keys(LOCATIONS).map((slug) => ({
    slug: slug,
  }));
}

export default function LocationSinglePage({ params }: { params: { slug: string } }) {
  const location = LOCATIONS[params.slug as keyof typeof LOCATIONS];
  
  if (!location) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Details */}
          <div>
            <h1 className="font-display text-5xl md:text-6xl text-[var(--color-brand)] mb-8">CocoBroma {location.name}</h1>
            
            <div className="space-y-6 mb-10 font-ui text-[var(--color-text)] text-lg">
              <p className="flex gap-4 items-start">
                <MapPin className="text-[var(--color-accent)] shrink-0 mt-1" size={24} />
                <span>{location.address}</span>
              </p>
              <p className="flex gap-4 items-center">
                <Clock className="text-[var(--color-accent)] shrink-0" size={24} />
                <span>{location.hours}</span>
              </p>
              <p className="flex gap-4 items-center">
                <Phone className="text-[var(--color-accent)] shrink-0" size={24} />
                <a href={`tel:${location.phone}`} className="hover:text-[var(--color-accent)] transition-colors">+91 {location.phone}</a>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href={location.whatsapp} target="_blank" rel="noreferrer" className="flex-1 py-4 px-6 rounded-full bg-[var(--color-accent)] text-[var(--color-brand)] font-ui font-bold hover:shadow-[var(--shadow-amber)] hover:-translate-y-1 transition-all flex justify-center items-center gap-2">
                <MessageCircle size={20} /> Reserve Table
              </a>
              {location.zomatoUrl && (
                <a href={location.zomatoUrl} target="_blank" rel="noreferrer" className="flex-1 py-4 px-6 rounded-full bg-white border border-[var(--color-mid)]/20 text-[var(--color-brand)] font-ui font-semibold hover:border-[var(--color-accent)] transition-all flex justify-center items-center gap-2">
                  <ExternalLink size={18} /> Order Zomato
                </a>
              )}
            </div>
            
            {location.landmarks.length > 0 && (
              <div>
                <h3 className="font-display text-2xl text-[var(--color-brand)] mb-4">Nearby Landmarks</h3>
                <ul className="list-disc list-inside space-y-2 text-[var(--color-text)]/80 font-ui">
                  {location.landmarks.map((lm, i) => <li key={i}>{lm}</li>)}
                </ul>
              </div>
            )}
          </div>

          {/* Map Embed */}
          <div className="h-[400px] md:h-[600px] w-full bg-white rounded-3xl overflow-hidden shadow-sm border border-[var(--color-mid)]/10 relative">
            {location.mapEmbedUrl ? (
              <iframe 
                src={location.mapEmbedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-90"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-light)]">
                <p className="font-ui text-[var(--color-mid)]">Map not available yet</p>
              </div>
            )}
            
            {location.mapsLink && (
              <a href={location.mapsLink} target="_blank" rel="noreferrer" className="absolute bottom-6 right-6 bg-[var(--color-brand)] text-[var(--color-bg)] py-3 px-6 rounded-full font-ui text-sm font-semibold hover:bg-[var(--color-accent)] hover:text-[var(--color-brand)] transition-colors shadow-lg flex items-center gap-2">
                <Navigation size={16} /> Get Directions
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

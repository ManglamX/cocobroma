import Link from 'next/link';

const NAV_LINKS = ['Menu', 'Locations', 'About', 'Offers', 'Gallery', 'Contact'];
const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Accessibility', href: '/accessibility-statement' },
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Refund Policy', href: '/refund-policy' },
];
// ⚠ Confirm correct handles for Facebook, YouTube, TikTok with owner before publishing
const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/cocobroma' },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand)] text-[var(--color-bg)]/80 font-body">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <p className="font-display text-2xl text-[var(--color-accent)] mb-3">CocoBroma Coffee</p>
          <p className="text-sm leading-relaxed">
            Bali-inspired artisanal café.<br />
            3 locations across Mumbai.<br />
            Open 10AM–11PM, every day.
          </p>
          <p className="mt-4 text-sm">
            <a href="tel:8169817022" className="hover:text-[var(--color-accent)]">+91 81698 17022</a><br />
            <a href="mailto:care@cocobroma.com" className="hover:text-[var(--color-accent)]">care@cocobroma.com</a>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-ui font-semibold text-[var(--color-accent)] mb-4 text-sm uppercase tracking-wider">Explore</p>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map(l => (
              <li key={l}><Link href={`/${l.toLowerCase()}`} className="hover:text-[var(--color-accent)] transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <p className="font-ui font-semibold text-[var(--color-accent)] mb-4 text-sm uppercase tracking-wider">Our Outlets</p>
          <ul className="space-y-2 text-sm">
            {['Borivali West', 'Kandivali', 'Andheri West'].map(loc => (
              <li key={loc}>
                <Link href={`/locations/${loc.split(' ')[0].toLowerCase()}`} className="hover:text-[var(--color-accent)] transition-colors">
                  {loc}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Legal */}
        <div>
          <p className="font-ui font-semibold text-[var(--color-accent)] mb-4 text-sm uppercase tracking-wider">Follow Us</p>
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              className="block text-sm hover:text-[var(--color-accent)] mb-2">{s.label}</a>
          ))}
          <a href="https://wa.me/918169817022" className="block text-sm hover:text-[var(--color-accent)] mt-2">WhatsApp</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-mid)]/30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-bg)]/50">
          <p>© {new Date().getFullYear()} CocoBroma Coffee. All rights reserved.</p>
          <ul className="flex flex-wrap gap-4">
            {LEGAL_LINKS.map(l => (
              <li key={l.label}><Link href={l.href} className="hover:text-[var(--color-accent)]">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

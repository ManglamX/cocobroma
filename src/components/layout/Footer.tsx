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
    <footer className="bg-[var(--color-bg)] text-[var(--color-text)] font-body border-t border-[var(--color-text)]/10">
      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <p className="font-display text-3xl text-[var(--color-text)] mb-6 tracking-tight">CocoBroma</p>
          <p className="text-sm leading-relaxed text-[var(--color-text)]/60 font-light">
            Bali-inspired artisanal café.<br />
            3 locations across Mumbai.<br />
            Open 10AM–11PM, every day.
          </p>
          <p className="mt-8 text-sm font-mono tracking-wide text-[var(--color-text)]/80">
            <a href="tel:8169817022" className="hover:text-[var(--color-text)] transition-colors">+91 81698 17022</a><br />
            <a href="mailto:care@cocobroma.com" className="hover:text-[var(--color-text)] transition-colors">care@cocobroma.com</a>
          </p>
        </div>

        {/* Navigation */}
        <div>
          <p className="font-mono text-[var(--color-text)]/40 mb-6 text-xs uppercase tracking-widest">Explore</p>
          <ul className="space-y-3 text-sm">
            {NAV_LINKS.map(l => (
              <li key={l}><Link href={`/${l.toLowerCase()}`} className="text-[var(--color-text)]/80 hover:text-[var(--color-text)] transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <p className="font-mono text-[var(--color-text)]/40 mb-6 text-xs uppercase tracking-widest">Our Outlets</p>
          <ul className="space-y-3 text-sm">
            {['Borivali West', 'Kandivali', 'Andheri West'].map(loc => (
              <li key={loc}>
                <Link href={`/locations/${loc.split(' ')[0].toLowerCase()}`} className="text-[var(--color-text)]/80 hover:text-[var(--color-text)] transition-colors">
                  {loc}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social + Legal */}
        <div>
          <p className="font-mono text-[var(--color-text)]/40 mb-6 text-xs uppercase tracking-widest">Connect</p>
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
              className="block text-sm text-[var(--color-text)]/80 hover:text-[var(--color-text)] mb-3 transition-colors">{s.label}</a>
          ))}
          <a href="https://wa.me/918169817022" className="block text-sm text-[var(--color-text)]/80 hover:text-[var(--color-text)] mt-3 transition-colors">WhatsApp</a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-text)]/10 px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-xs text-[var(--color-text)]/40 font-ui font-light">
          <p>© {new Date().getFullYear()} CocoBroma Coffee. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {LEGAL_LINKS.map(l => (
              <li key={l.label}><Link href={l.href} className="hover:text-[var(--color-text)] transition-colors">{l.label}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default function AccessibilityStatementPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--color-bg)]">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--color-brand)] mb-8">Accessibility Statement</h1>
        
        <div className="prose prose-lg font-body text-[var(--color-text)] space-y-6">
          <p>
            CocoBroma is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility standards.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">Conformance Status</h2>
          <p>
            The Web Content Accessibility Guidelines (WCAG) defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA. 
            CocoBroma strives to be partially conformant with WCAG 2.1 level AA.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of CocoBroma. Please let us know if you encounter accessibility barriers on CocoBroma:
          </p>
          <ul className="list-disc pl-5">
            <li>Phone: +91 81698 17022</li>
            <li>E-mail: <a href="mailto:hello@cocobroma.com" className="text-[var(--color-accent)] hover:underline">hello@cocobroma.com</a></li>
          </ul>
          <p>We try to respond to feedback within 2 business days.</p>
        </div>
      </div>
    </main>
  );
}

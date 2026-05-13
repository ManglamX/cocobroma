export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-transparent">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--color-brand)] mb-8">Terms and Conditions</h1>
        
        <div className="prose prose-lg font-body text-[var(--color-text)] space-y-6">
          <p>Last updated: May 2026</p>
          
          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">1. Acceptance of Terms</h2>
          <p>
            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">2. Products and Services</h2>
          <p>
            We reserve the right to modify or discontinue any product or service without notice at any time. We shall not be liable to you or to any third-party for any modification, price change, suspension or discontinuance of the Service.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">3. Accuracy of Information</h2>
          <p>
            We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">4. Contact Information</h2>
          <p>
            Questions about the Terms of Service should be sent to us at <a href="mailto:hello@cocobroma.com" className="text-[var(--color-accent)] hover:underline">hello@cocobroma.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}

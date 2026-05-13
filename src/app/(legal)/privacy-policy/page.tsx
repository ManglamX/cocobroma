export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-transparent">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--color-brand)] mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg font-body text-[var(--color-text)] space-y-6">
          <p>Last updated: May 2026</p>
          
          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">1. Introduction</h2>
          <p>
            Welcome to CocoBroma. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">2. The Data We Collect About You</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-5">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
          </ul>

          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">3. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-5">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>

          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">4. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at: <a href="mailto:hello@cocobroma.com" className="text-[var(--color-accent)] hover:underline">hello@cocobroma.com</a>.
          </p>
        </div>
      </div>
    </main>
  );
}

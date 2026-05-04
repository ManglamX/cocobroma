import { MapPin, Phone, Mail, Camera, Globe } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--color-bg)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-[var(--color-brand)] mb-6">Contact Us</h1>
          <p className="font-ui text-[var(--color-text)] opacity-80 text-lg max-w-2xl mx-auto">
            We'd love to hear from you. Reach out for reservations, catering inquiries, or just to say hi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-[var(--color-mid)]/10">
            <h2 className="font-display text-3xl text-[var(--color-brand)] mb-6">Send a Message</h2>
            <form className="space-y-6 font-ui">
              <div>
                <label className="block text-sm font-semibold text-[var(--color-brand)] mb-2">Name</label>
                <input type="text" className="w-full border border-[var(--color-mid)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-brand)] mb-2">Email</label>
                <input type="email" className="w-full border border-[var(--color-mid)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--color-brand)] mb-2">Message</label>
                <textarea rows={5} className="w-full border border-[var(--color-mid)]/20 rounded-xl px-4 py-3 focus:outline-none focus:border-[var(--color-accent)] transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-[var(--color-brand)] text-[var(--color-bg)] font-bold py-4 rounded-xl hover:bg-[var(--color-accent)] hover:text-[var(--color-brand)] transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-[var(--color-brand)] text-[var(--color-bg)] rounded-3xl p-8">
              <h2 className="font-display text-3xl mb-8 text-[var(--color-accent)]">Get in Touch</h2>
              
              <div className="space-y-6 font-ui">
                <div className="flex gap-4">
                  <Phone className="text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">General Enquiries</p>
                    <a href="tel:+918169817022" className="hover:text-[var(--color-accent)] transition-colors">+91 81698 17022</a>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Mail className="text-[var(--color-accent)] shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Email Us</p>
                    <a href="mailto:hello@cocobroma.com" className="hover:text-[var(--color-accent)] transition-colors">hello@cocobroma.com</a>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="font-ui font-semibold mb-4">Follow our Journey</p>
                <div className="flex gap-4">
                  <a href="https://instagram.com/cocobroma" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-brand)] transition-colors">
                    <Camera size={24} />
                  </a>
                  <a href="https://facebook.com/cocobroma" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-full hover:bg-[var(--color-accent)] hover:text-[var(--color-brand)] transition-colors">
                    <Globe size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

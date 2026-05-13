export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen pt-24 pb-16 bg-transparent">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-display text-4xl md:text-5xl text-[var(--color-brand)] mb-8">Refund Policy</h1>
        
        <div className="prose prose-lg font-body text-[var(--color-text)] space-y-6">
          <p>Last updated: May 2026</p>
          
          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">1. Dine-In Orders</h2>
          <p>
            If you are not satisfied with your food or beverage during your dine-in experience, please inform our staff immediately. We will gladly replace the item or remove it from your bill if it does not meet our quality standards.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">2. Takeaway and Delivery</h2>
          <p>
            For delivery orders placed through our partners (Zomato/Swiggy), please raise any issues directly through their respective apps for refunds regarding spillage or incorrect items.
          </p>
          <p>
            For direct takeaway orders, if an item is missing or incorrect, please contact the specific outlet within 2 hours of pick-up. We will provide a replacement or process a refund to the original payment method.
          </p>

          <h2 className="font-display text-2xl text-[var(--color-brand)] mt-8">3. Merchandise</h2>
          <p>
            Merchandise (such as mugs, beans, or apparel) can be returned within 7 days of purchase, provided the item is unused, in its original packaging, and accompanied by the receipt.
          </p>
        </div>
      </div>
    </main>
  );
}

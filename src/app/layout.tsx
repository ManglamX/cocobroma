import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import FloatingBeans from "@/components/layout/FloatingBeans";

export const metadata: Metadata = {
  title: {
    template: "%s | CocoBroma Coffee",
    default: "CocoBroma Coffee — Artisanal Café Mumbai",
  },
  description: "Bali-inspired artisanal coffee, specialty brews & gourmet food. 3 locations in Mumbai — Borivali, Kandivali, Andheri. Open 10AM–11PM daily.",
  openGraph: {
    siteName: 'CocoBroma Coffee',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.cocobroma.com',
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-body bg-transparent text-[var(--color-text)]">
        <FloatingBeans />
        <Navbar />
        {children}
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  );
}

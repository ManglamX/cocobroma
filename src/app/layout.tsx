import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppFAB from "@/components/layout/WhatsAppFAB";
import SplashCursor from "@/components/layout/SplashCursor";

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
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@400;500;600&family=Lato:wght@300;400;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-body bg-[var(--color-bg)] text-[var(--color-text)]">
        <SplashCursor 
          RAINBOW_MODE={false}
          COLOR="#C8853A"
          BACK_COLOR={{ r: 0.137, g: 0.121, b: 0.125 }}
          SPLAT_RADIUS={0.08}
          SPLAT_FORCE={4000}
        />
        <Navbar />
        {children}
        <WhatsAppFAB />
        <Footer />
      </body>
    </html>
  );
}

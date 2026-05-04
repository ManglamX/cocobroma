'use client';
import Hero from '@/components/home/Hero';
import OccasionSelector from '@/components/home/OccasionSelector';
import WorldCitiesBanner from '@/components/home/WorldCitiesBanner';
import BrandStory from '@/components/home/BrandStory';
import WhatsAppOptIn from '@/components/home/WhatsAppOptIn';
import DrinksCarousel from '@/components/home/DrinksCarousel';
import BuildYourBrew from '@/components/home/BuildYourBrew';
import AllDayDining from '@/components/home/AllDayDining';
import AllergenStrip from '@/components/home/AllergenStrip';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Home() {
  useScrollReveal();

  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <OccasionSelector />
      <DrinksCarousel />
      <AllergenStrip />
      <BuildYourBrew />
      <WorldCitiesBanner />
      <AllDayDining />
      <BrandStory />
      <WhatsAppOptIn />
      {/* Additional sections would be imported and rendered here per the build plan */}
    </main>
  );
}

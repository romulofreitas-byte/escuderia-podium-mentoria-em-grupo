import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhyItWorksSection } from '@/components/sections/WhyItWorksSection';
import { WhoIsItForSection } from '@/components/sections/WhoIsItForSection';
import { ProgramStructureSection } from '@/components/sections/ProgramStructureSection';
import { MethodSection } from '@/components/sections/MethodSection';
import { ComparisonSection } from '@/components/sections/ComparisonSection';
import { BonusesSection } from '@/components/sections/BonusesSection';
import { AboutMentorSection } from '@/components/sections/AboutMentorSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { FinalCTASection } from '@/components/sections/FinalCTASection';
import { Footer } from '@/components/sections/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <HeroSection />
      <WhyItWorksSection />
      <WhoIsItForSection />
      <ProgramStructureSection />
      <MethodSection />
      <ComparisonSection />
      <BonusesSection />
      <AboutMentorSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}

import React from 'react'
import { HeroSection } from "../components/HeroSection";
import FeaturesSection  from "../components/FeaturesSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { StatsSection } from "../components/StatsSection";
import { BenefitsSection } from "../components/BenefitsSection";
import { CTASection } from "../components/CTASection";
import Discover  from "../components/Discover";
import { FAQSection } from "../components/FAQSection";

export default function Index() {
  return (
    <div className="min-h-screen  text-white font-manrope overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
      <Discover />
      <TestimonialsSection />
      <StatsSection />
      <BenefitsSection />
      <FAQSection />

    </div>
  );
}

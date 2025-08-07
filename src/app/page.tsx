import { HeroSection } from '@/components/sections/hero'
import { ProblemSolutionSection } from '@/components/sections/problem-solution'
import { HowItWorksSection } from '@/components/sections/how-it-works'
import { FeaturesSection } from '@/components/sections/features'
import { CompanySection } from '@/components/sections/company'
import { ContactCTASection } from '@/components/sections/contact-cta'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <CompanySection />
      <ContactCTASection />
    </>
  );
}

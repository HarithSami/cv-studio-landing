import dynamic from 'next/dynamic'

const Header = dynamic(() => import('@/components/header').then(mod => ({ default: mod.Header })))
const AnimatedGradientBackground = dynamic(
  () => import('@/components/animated-gradient-background').then(mod => ({ default: mod.AnimatedGradientBackground }))
)
const HeroSection = dynamic(() => import('@/components/hero-section').then(mod => ({ default: mod.HeroSection })))
const FeaturesSection = dynamic(() => import('@/components/features-section').then(mod => ({ default: mod.FeaturesSection })))
const HowItWorksSection = dynamic(() => import('@/components/how-it-works-section').then(mod => ({ default: mod.HowItWorksSection })))
const TestimonialsSection = dynamic(() => import('@/components/testimonials-section').then(mod => ({ default: mod.TestimonialsSection })))
const CompanyLogosSection = dynamic(() => import('@/components/company-logos-section').then(mod => ({ default: mod.CompanyLogosSection })))
const FaqSection = dynamic(() => import('@/components/faq-section').then(mod => ({ default: mod.FaqSection })))
const CtaSection = dynamic(() => import('@/components/cta-section').then(mod => ({ default: mod.CtaSection })))

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedGradientBackground />
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CompanyLogosSection />
      <FaqSection />
      <CtaSection />
    </main>
  )
}
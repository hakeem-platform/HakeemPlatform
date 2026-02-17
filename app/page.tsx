import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { TrustSection } from '@/components/home/trust-section'
import { FeaturedWorksSection } from '@/components/home/featured-works-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <FeaturedWorksSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

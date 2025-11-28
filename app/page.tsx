import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"
import { Navbar1 } from "@/components/ui/navbar-1"

export default function Home() {
  return (
    <main>
      <Navbar1 />
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <PricingSection />
      <Footer />
    </main>
  )
}

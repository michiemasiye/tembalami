import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutPreview } from "@/components/sections/about-preview"
import { MusicPreview } from "@/components/sections/music-preview"
import { InspiredWorshipPreview } from "@/components/sections/inspired-worship-preview"
import { PartnershipsPreview } from "@/components/sections/partnerships-preview"
import { ContactPreview } from "@/components/sections/contact-preview"

export default function HomePage() {
  return (
    <main>
      <Header variant="dark" />
      <HeroSection />
      <AboutPreview />
      <MusicPreview />
      <InspiredWorshipPreview />
      <PartnershipsPreview />
      <ContactPreview />
      <Footer />
    </main>
  )
}

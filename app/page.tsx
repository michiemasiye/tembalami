import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutPreview } from "@/components/sections/about-preview"
import { MusicPreview } from "@/components/sections/music-preview"
import { InspiredWorshipPreview } from "@/components/sections/inspired-worship-preview"
import { PartnershipsPreview } from "@/components/sections/partnerships-preview"
import { ContactPreview } from "@/components/sections/contact-preview"

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tembalami",
    url: "https://tembalami.com",
    image: "https://tembalami.com/images/about-portrait.jpg",
    sameAs: [
      "https://facebook.com/tembalami",
      "https://instagram.com/tembalami",
      "https://twitter.com/tembalami",
      "https://youtube.com/tembalami",
    ],
    jobTitle: ["Singer", "Songwriter", "Music Producer", "Gospel Minister"],
    worksFor: {
      "@type": "Organization",
      name: "Tembalami Ministry",
    },
    description: "Zimbabwean Gospel Music Minister, Recording Artiste, Singer/Songwriter, and Music Producer.",
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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

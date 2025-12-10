import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Music, Mic, Users, Video, Lightbulb, Volume2 } from "lucide-react"

const masterclasses = [
  {
    icon: Music,
    title: "Songwriting",
    description: "Learn to craft worship songs that carry the presence of God and connect with the congregation.",
  },
  {
    icon: Mic,
    title: "Worship Leading",
    description: "Master the art of leading worship with sensitivity to the Spirit and the congregation.",
  },
  {
    icon: Users,
    title: "Band & Choir Dynamics",
    description: "Build cohesive teams that flow together in unity and excellence.",
  },
  {
    icon: Volume2,
    title: "Sound Production",
    description: "Learn professional sound engineering for church services and events.",
  },
  {
    icon: Lightbulb,
    title: "Lighting Design",
    description: "Create atmosphere through effective lighting that enhances worship.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Professional videography and multimedia for ministry documentation.",
  },
]

const galleryImages = [
  "/inspired-worship/class-1.jpg",
  "/inspired-worship/class-2.jpg",
  "/inspired-worship/class-3.jpg",
  "/inspired-worship/class-4.jpg",
  "/inspired-worship/class-5.jpg",
  // Marked picture
  "/images/img-20251201-wa0022.jpg",
]

export default function InspiredWorshipPage() {
  return (
    <main>
      <Header variant="dark" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-secondary text-white min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/img-20251201-wa0022.jpg"
            alt="Inspired Worship conference crowd"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-secondary/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Training & Equipping</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Inspired Worship</h2>
            <p className="text-xl text-white/80 font-mono mb-8">
              A worship and training experience designed to uplift the standard of worship ministry in Zimbabwe and
              beyond.
            </p>
            <div className="inline-block bg-primary/20 border border-primary px-6 py-3">
              <span className="font-bold text-white">Launched June 2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">The Vision</h3>
              <h4 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Restoring Excellence to Worship</h4>
              <p className="text-muted-foreground font-mono leading-relaxed mb-6">
                At its core, Inspired Worship is more than just an annual gathering — it's a movement to restore
                excellence, purpose, and depth to the ministry of worship.
              </p>
              <p className="text-muted-foreground font-mono leading-relaxed mb-8">
                It offers an opportunity for churches and individuals alike to rethink how they approach worship, to be
                inspired by those who have gone ahead, and to build capacity for future generations of worshipers.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-secondary">
                "Worship takes up half of the church service. We can't afford not to invest in it. Equipping worship
                teams has been on my heart for years."
                <cite className="block mt-2 font-mono text-sm not-italic text-primary">— Tembalami</cite>
              </blockquote>
            </div>
            <div className="relative aspect-square bg-muted overflow-hidden">
              <Image
                src="/images/img-20251201-wa0020.jpg"
                alt="Tembalami teaching at Inspired Worship"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Masterclasses Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">What You'll Learn</h3>
            <h4 className="text-3xl md:text-4xl font-bold text-secondary">Masterclasses</h4>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {masterclasses.map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 border border-border hover:border-primary transition-colors"
              >
                <item.icon className="h-10 w-10 text-primary mb-4" />
                <h5 className="text-xl font-bold text-secondary mb-3">{item.title}</h5>
                <p className="text-muted-foreground font-mono text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Moments</h3>
            <h4 className="text-3xl md:text-4xl font-bold text-secondary">Pictures from Classes</h4>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative aspect-[3/2] bg-muted overflow-hidden group">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Inspired Worship gallery ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Worship Ministry?</h3>
          <p className="text-white/80 font-mono max-w-2xl mx-auto mb-8">
            Join us at the next Inspired Worship conference and be equipped to lead worship with excellence and
            anointing.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-mono uppercase tracking-wider"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

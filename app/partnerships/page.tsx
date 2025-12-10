import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Music, Users, Heart } from "lucide-react"

const partnershipTypes = [
  {
    icon: Calendar,
    title: "Event Bookings",
    description: "Invite Tembalami to minister at your church services, conferences, crusades, and special events.",
  },
  {
    icon: Music,
    title: "Music Collaborations",
    description: "Partner on music projects, album features, and collaborative worship recordings.",
  },
  {
    icon: Users,
    title: "Workshop Hosting",
    description: "Bring Inspired Worship training to your church or organization.",
  },
  {
    icon: Heart,
    title: "Ministry Support",
    description: "Support the ongoing work of spreading the Gospel through worship ministry.",
  },
]

export default function PartnershipsPage() {
  return (
    <main>
      <Header variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-sm font-mono uppercase tracking-wider text-white/90 mb-4">Partner With Us</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Partnerships</h2>
            <p className="text-xl text-white/90 font-mono">
              Join us in spreading the Gospel through worship. Explore ways to partner with Tembalami's ministry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Our Partners</h3>
            <h4 className="text-3xl md:text-4xl font-bold text-secondary">Strategic Partners</h4>
          </div>

          <div className="max-w-5xl mx-auto">
            <Image
              src="/images/image.png"
              alt="Strategic Partners including Inspired, Higherlife Foundation, Celebration Churches International, Heech, Epic Sets, ZiFM, Get Set Skill, Compulink, 263 Chat, Eternity Productions, Rapid Tickets, Vaya Technologies, Petals, Champions Insurance Company, and Cook More"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Ways to Partner</h3>
            <h4 className="text-3xl md:text-4xl font-bold text-secondary">Partnership Opportunities</h4>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {partnershipTypes.map((type) => (
              <div
                key={type.title}
                className="bg-white p-8 border border-border hover:border-primary transition-colors"
              >
                <type.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-2xl font-bold text-secondary mb-4">{type.title}</h3>
                <p className="text-muted-foreground font-mono leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Work */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Track Record</h3>
            <h4 className="text-3xl md:text-4xl font-bold">Previous & Ongoing Work</h4>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-lg mb-1">6 Studio Albums Released</h5>
                  <p className="text-white/70 font-mono text-sm">
                    From Brighter Day (2011) to Church on the Street (2024)
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-lg mb-1">Inspired Worship Conference</h5>
                  <p className="text-white/70 font-mono text-sm">Annual worship training event since 2022</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-lg mb-1">Church & Conference Ministry</h5>
                  <p className="text-white/70 font-mono text-sm">Regular ministry across Zimbabwe and beyond</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Interested in Booking Tembalami?</h3>
          <p className="font-mono max-w-2xl mx-auto mb-8 text-white/90">
            To inquire about booking Tembalami for your events, conferences, or worship gatherings, click the link
            below.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-mono uppercase tracking-wider"
          >
            <Link href="/contact">Contact for Booking</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

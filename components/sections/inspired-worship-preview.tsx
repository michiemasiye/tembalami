import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Music, Mic, Users, Video } from "lucide-react"

const features = [
  { icon: Music, title: "Songwriting", description: "Learn to write worship songs that touch hearts" },
  { icon: Mic, title: "Worship Leading", description: "Master the art of leading congregational worship" },
  { icon: Users, title: "Band Dynamics", description: "Build cohesive worship teams and choirs" },
  { icon: Video, title: "Production", description: "Sound, lighting, and video production training" },
]

export function InspiredWorshipPreview() {
  return (
    <section className="py-20 bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Training & Equipping</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Inspired Worship Conference</h3>
            <p className="text-white/80 font-mono leading-relaxed mb-6">
              First launched in 2022, Inspired Worship is a worship and training experience. The aim is to uplift the
              standard of worship ministry in Zimbabwe and beyond.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 mb-8 italic text-white/90">
              "Worship takes up half of the church service. We can't afford not to invest in it. Equipping worship teams
              has been on my heart for years."
              <cite className="block mt-2 font-mono text-sm not-italic text-primary">— Tembalami</cite>
            </blockquote>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-mono uppercase tracking-wider"
            >
              <Link href="/inspired-worship">Learn More</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white/5 p-6 backdrop-blur-sm border border-white/10">
                <feature.icon className="h-8 w-8 text-primary mb-4" />
                <h4 className="font-bold mb-2">{feature.title}</h4>
                <p className="text-white/60 font-mono text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

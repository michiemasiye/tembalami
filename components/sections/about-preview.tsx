import Link from "next/link"
import { Button } from "@/components/ui/button"

export function AboutPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Scripture Quote */}
          <div className="bg-primary p-8 md:p-12 text-white">
            <blockquote className="text-xl md:text-2xl italic mb-6 leading-relaxed">
              "Let everything that has breath praise the LORD. Praise the LORD!"
            </blockquote>
            <cite className="font-mono text-sm uppercase tracking-wider not-italic">— Psalm 150:6</cite>
          </div>

          {/* About Content */}
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">About the Minister</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Worshipping Jesus</h3>
            <p className="text-muted-foreground font-mono leading-relaxed mb-6">
              Tembalami is a Zimbabwean Gospel Music Minister. He is a Recording Artiste, singer/songwriter and music
              producer. His debut album, Brighter Day, was recorded in 2011. Since then, he has released multiple albums
              including First Aid Kit, Ministry of Works, The Fight, and more.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-white font-mono uppercase tracking-wider bg-transparent"
            >
              <Link href="/about">More About Tembalami</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

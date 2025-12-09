import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main>
      <Header variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-sm font-mono uppercase tracking-wider text-white/90 mb-4">About</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Tembalami</h2>
            <p className="text-xl text-white/90 font-mono">
              Zimbabwean Gospel Music Minister, Recording Artiste, Singer/Songwriter, and Music Producer
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image */}
            <div className="relative aspect-[4/5] bg-muted">
              <Image src="/images/about-portrait.jpg" alt="Tembalami" fill className="object-cover" />
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">The Journey</h3>
                <p className="text-muted-foreground font-mono leading-relaxed mb-4">
                  Tembalami is a Zimbabwean Gospel Music Minister. He is a Recording Artiste, singer/songwriter and a
                  music producer. His debut album, Brighter Day, was recorded in 2011.
                </p>
                <p className="text-muted-foreground font-mono leading-relaxed">
                  He has gone ahead to release other albums since then; First Aid Kit (2013), Ministry of Works (2016),
                  The Fight (2018), Not Going Back (2022), and Church on the Street (2024).
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Popular Songs</h3>
                <ul className="space-y-2 text-muted-foreground font-mono">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Trading My Sorrows
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Mbiri
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Mirira
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Gore Rino
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-secondary mb-4">Inspired Worship</h3>
                <p className="text-muted-foreground font-mono leading-relaxed">
                  In June 2022, he kicked off Inspired Worship conference, a platform to equip the praise and worship
                  and technical team to minister to the congregants. The conference covers topics such as songwriting,
                  leading worship, multimedia, band dynamics, and videography.
                </p>
              </div>

              {/* Scripture */}
              <div className="bg-primary p-8 text-white">
                <blockquote className="text-lg italic mb-4 leading-relaxed">
                  "Sing to the Lord a new song; sing to the Lord, all the earth. Sing to the Lord, praise his name;
                  proclaim his salvation day after day."
                </blockquote>
                <cite className="font-mono text-sm uppercase tracking-wider not-italic">— Psalm 96:1-2</cite>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

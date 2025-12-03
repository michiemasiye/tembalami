import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const featuredAlbums = [
  {
    title: "Church on the Street",
    year: "2024",
    image: "/images/albums/church-on-the-street.jpg",
  },
  {
    title: "Not Going Back",
    year: "2022",
    image: "/images/albums/not-going-back.jpg",
  },
  {
    title: "The Fight",
    year: "2018",
    image: "/images/albums/the-fight.jpg",
  },
]

export function MusicPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Ministry & Music</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Latest Albums</h3>
          <p className="text-muted-foreground font-mono max-w-2xl mx-auto">
            Experience worship through anointed music that draws hearts closer to God.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredAlbums.map((album) => (
            <div key={album.title} className="group">
              <div className="relative aspect-square mb-4 overflow-hidden bg-muted rounded-lg">
                <Image
                  src={album.image || "/placeholder.svg"}
                  alt={album.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h4 className="text-xl font-bold text-secondary">{album.title}</h4>
              <p className="text-muted-foreground font-mono text-sm">{album.year}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white font-mono uppercase tracking-wider"
          >
            <Link href="/music">View All Music</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

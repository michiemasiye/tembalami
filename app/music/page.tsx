import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { Play } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Music",
  description: "Listen to Tembalami's latest albums and singles. Experience gospel worship music.",
}

const albums = [
  {
    title: "Christmas Kuvanhu",
    year: "2025",
    image: "/images/albums/christmas-kuvanhu.jpg",
    description: "Festive Christmas album bringing joy and worship to the season",
    link: "https://open.spotify.com/artist/4xKkR6aTDm0Qc9m9iXjMoZ",
  },
  {
    title: "Church on the Street",
    year: "2024",
    image: "/images/albums/church-on-the-street.jpg",
    description: "Latest album bringing worship to the streets",
    link: "https://youtu.be/MDlaULkWWBo?si=wXHHb3oiHoGGFWup",
  },
  {
    title: "Not Going Back",
    year: "2022",
    image: "/images/albums/not-going-back.jpg",
    description: "A declaration of unwavering faith",
    link: "https://www.youtube.com/watch?v=j4da7B5xvYk&list=OLAK5uy_kry6n40uQGy9AR6MRcuytURyrH48sCcrE",
  },
  {
    title: "The Fight",
    year: "2018",
    image: "/images/albums/the-fight.jpg",
    description: "Songs of spiritual victory and breakthrough",
    link: "https://www.youtube.com/watch?v=uY-gJQwUjzA&list=OLAK5uy_msVEmxQhbTxkYyxGXuBbMFtQZ_nbUG4Nk",
  },
  {
    title: "Ministry of Works",
    year: "2016",
    image: "/images/albums/ministry-of-works.jpg",
    description: "Music born from ministry and service",
    link: "https://www.youtube.com/watch?v=Nddu0zD_9-s&list=OLAK5uy_m0pTzhJoAXuAmRn_hIk22IxruxeQ8mxY8",
  },
  {
    title: "Faith Aid Kit",
    year: "2013",
    image: "/images/albums/faith-aid-kit.jpg",
    description: "Healing songs for the soul",
    link: "https://www.youtube.com/watch?v=4gAMKce_r5Q&list=OLAK5uy_nt6Gt0OVCWcbxrkaCwdIhlcWZhy6Vqg6c&pp=0gcJCbAEOCosWNin",
  },
  {
    title: "Brighter Day",
    year: "2011",
    image: "/images/albums/brighter-day.jpg",
    description: "Debut album - songs of hope and promise",
    link: "https://www.youtube.com/watch?v=MHDRXwUHZkY&list=OLAK5uy_lkalBPVP3_yng4CSc29L6tpMx2OLslpBM",
  },
  {
    title: "Singles, Remixes & Acoustic Sessions",
    year: "Various",
    image: "/images/albums/singles-remixes.jpg",
    description: "Collection of singles and special recordings",
    link: "https://www.youtube.com/watch?v=6WykHctwVYc&list=OLAK5uy_nBVnlLSMkw4Gj2FSpHiope20UHdsrKEW8",
  },
]

const singles = [
  { title: "Mirira", link: "https://youtu.be/jLC7iZChb50" },
  { title: "Imba Ino", link: "https://youtu.be/oegJrK4gCA0?si=pwPKMn6i1UmMZ5GV" },
  { title: "Mbiri", link: "https://youtu.be/F_mNEPPEcwQ?si=2EOngBUzR6gGLNY-" },
  { title: "Gore Rino", link: "https://youtu.be/BoSP-dAxbME?si=Cf5ZpS4lHUU6sinY" },
  { title: "Come and See (Remix)", link: "https://youtu.be/rqRz09RwnSA?si=TShIliTj_8ItaabR" },
]

export default function MusicPage() {
  return (
    <main>
      <Header variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-sm font-mono uppercase tracking-wider text-white/90 mb-4">Ministry & Music</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Discography</h2>
            <p className="text-xl text-white/90 font-mono">
              Explore the full collection of worship albums and singles from Tembalami's music ministry.
            </p>
          </div>
        </div>
      </section>

      {/* Albums Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-2">Full Albums</h3>
          <h4 className="text-3xl font-bold text-secondary mb-12">Albums</h4>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album) => (
              <a
                key={album.title}
                href={album.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-square mb-4 overflow-hidden bg-muted rounded-lg">
                  <Image
                    src={album.image || "/placeholder.svg"}
                    alt={album.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-primary p-4 rounded-full">
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </div>
                    </div>
                  </div>
                </div>
                <h5 className="text-xl font-bold text-secondary mb-1">{album.title}</h5>
                <p className="text-primary font-mono text-sm mb-2">{album.year}</p>
                <p className="text-muted-foreground font-mono text-sm">{album.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Singles Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-sm font-mono uppercase tracking-wider text-primary mb-2">Popular Tracks</h3>
          <h4 className="text-3xl font-bold mb-12">Singles</h4>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {singles.map((single) => (
              <a
                key={single.title}
                href={single.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="relative aspect-square mb-3 overflow-hidden bg-white/10 rounded-lg flex items-center justify-center">
                  <div className="text-center p-4">
                    <div className="bg-primary/20 p-4 rounded-full mb-3 inline-block group-hover:bg-primary/40 transition-colors">
                      <Play className="h-8 w-8 text-white" fill="white" />
                    </div>
                    <p className="font-bold text-lg">{single.title}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Streaming Links */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-secondary mb-8">Stream on Your Favorite Platform</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="https://open.spotify.com/artist/4xKkR6aTDm0Qc9m9iXjMoZ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary font-mono text-lg transition-colors"
            >
              Spotify
            </a>
            <a
              href="https://music.apple.com/zw/artist/tembalami/468105160"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary font-mono text-lg transition-colors"
            >
              Apple Music
            </a>
            <a
              href="https://www.youtube.com/@tembalamimusic"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary font-mono text-lg transition-colors"
            >
              YouTube Music
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

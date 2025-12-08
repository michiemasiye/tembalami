import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube, Twitter, Music } from "lucide-react"

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/music", label: "Music" },
  { href: "/inspired-worship", label: "Inspired Worship" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" },
]

const socialLinks = [
  { href: "https://www.facebook.com/TEMBALAMI-49994092749/timeline", icon: Facebook, label: "Facebook" },
  { href: "https://www.instagram.com/tembalami", icon: Instagram, label: "Instagram" },
  { href: "https://www.youtube.com/@tembalamimusic", icon: Youtube, label: "YouTube" },
  { href: "https://www.twitter.com/TembalamiP", icon: Twitter, label: "Twitter" },
  { href: "https://open.spotify.com/artist/4xKkR6aTDm0Qc9m9iXjMoZ", icon: Music, label: "Spotify" },
  { href: "https://music.apple.com/zw/artist/tembalami/468105160", icon: Music, label: "Apple Music" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Logo & Tagline */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/tembalami-logo.jpg"
                alt="Tembalami"
                width={150}
                height={45}
                className="h-12 w-auto object-contain invert"
              />
            </Link>
            <p className="text-white/70 font-mono text-sm">Spreading the Gospel through worship and music ministry.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono uppercase tracking-wider text-sm mb-4 text-primary">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/70 hover:text-white font-mono text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="font-mono uppercase tracking-wider text-sm mb-4 text-primary">Connect</h4>
            <div className="flex gap-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-white/70 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-white/70 font-mono text-sm">bookings@tembalami.com</p>
            <p className="text-white/70 font-mono text-sm mt-1">Harare, Zimbabwe</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white/50 font-mono text-xs">
            © {new Date().getFullYear()} Tembalami. All rights reserved.
          </p>
          <p className="text-white/40 font-mono text-xs mt-2">Built by Michelle Masiyemvura</p>
        </div>
      </div>
    </footer>
  )
}

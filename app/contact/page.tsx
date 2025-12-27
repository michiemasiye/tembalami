

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description: "Book Tembalami for your next event or get in touch regarding his ministry.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header variant="light" />

      {/* Main Content Area */}
      <section className="flex-1 flex flex-col justify-center items-center py-32 bg-white text-center px-4">
        <div className="max-w-2xl mx-auto space-y-8 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-secondary">
            Bookings
          </h1>

          <div className="w-24 h-1 bg-primary mx-auto" />

          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed">
            Interested in having Minister Tembalami minister at your next event?
            We would love to partner with you.
          </p>

          <div className="pt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-mono uppercase tracking-widest text-lg px-12 py-8 rounded-none transition-all hover:scale-105 shadow-xl"
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf8dru7hkQsUgMGqv0Wma0GX7F6PhGFUDerA0a3X1pkj9ibwg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                Book Minister Tembalami
                <ExternalLink className="h-5 w-5" />
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground font-mono pt-12">
            For general inquiries, email us at <a href="mailto:admin@tembalami.com" className="text-primary hover:underline">admin@tembalami.com</a>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

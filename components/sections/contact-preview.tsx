import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactPreview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Get In Touch</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Contact Us</h3>
            <p className="text-muted-foreground font-mono leading-relaxed mb-8">
              For bookings, inquiries, and partnership opportunities, reach out to us through any of the channels below.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-mono uppercase tracking-wider"
            >
              <Link href="/contact">Contact Page</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-1">Email</h4>
                <p className="text-muted-foreground font-mono text-sm">bookings@tembalami.com</p>
                <p className="text-muted-foreground font-mono text-sm">admin@tembalami.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-1">Phone</h4>
                <p className="text-muted-foreground font-mono text-sm">+263 774 058 799</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-secondary mb-1">Location</h4>
                <p className="text-muted-foreground font-mono text-sm">Zimbabwe</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function PartnershipsPreview() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Partnerships</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-secondary mb-6">Partner With Us</h3>
          <p className="text-muted-foreground font-mono leading-relaxed mb-8">
            Join us in spreading the Gospel through worship and music ministry. Whether you're looking to book Tembalami
            for events, collaborate on projects, or support the ministry, we'd love to connect with you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-mono uppercase tracking-wider"
          >
            <Link href="/partnerships">Explore Partnerships</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Loader2, CheckCircle } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        // Open email client with pre-filled data
        const mailtoLink = `mailto:${data.mailto.to}?subject=${encodeURIComponent(data.mailto.subject)}&body=${encodeURIComponent(data.mailto.body)}`
        window.open(mailtoLink, "_blank")

        setIsSuccess(true)
        setFormData({ name: "", email: "", subject: "", message: "" })

        // Reset success message after 5 seconds
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("There was an error sending your message. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main>
      <Header variant="light" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-sm font-mono uppercase tracking-wider text-primary mb-4">Get In Touch</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary mb-6">Contact Us</h2>
            <p className="text-xl text-muted-foreground font-mono">
              For bookings, inquiries, partnerships, and any other questions, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-8">Contact Information</h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-primary p-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Email</h4>
                    <p className="text-muted-foreground font-mono">
                      <a href="mailto:bookings@tembalami.com" className="hover:text-primary transition-colors">
                        bookings@tembalami.com
                      </a>
                    </p>
                    <p className="text-muted-foreground font-mono">
                      <a href="mailto:admin@tembalami.com" className="hover:text-primary transition-colors">
                        admin@tembalami.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary p-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Phone</h4>
                    <p className="text-muted-foreground font-mono">
                      <a href="tel:+263774058799" className="hover:text-primary transition-colors">
                        +263 774 058 799
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary p-4">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary mb-2">Location</h4>
                    <p className="text-muted-foreground font-mono">Harare, Zimbabwe</p>
                  </div>
                </div>
              </div>

              {/* Scripture */}
              <div className="bg-secondary p-8 text-white mt-12">
                <blockquote className="text-lg italic mb-4 leading-relaxed">
                  "How beautiful on the mountains are the feet of those who bring good news, who proclaim peace, who
                  bring good tidings, who proclaim salvation."
                </blockquote>
                <cite className="font-mono text-sm uppercase tracking-wider not-italic text-primary">
                  — Isaiah 52:7
                </cite>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-8">Send a Message</h3>

              {isSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-800 p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <p className="font-mono text-sm">
                    Your email client has been opened with your message. Please send the email to complete your inquiry.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-mono text-sm">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-mono text-sm">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-mono text-sm">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    required
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-mono text-sm">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-mono uppercase tracking-wider"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

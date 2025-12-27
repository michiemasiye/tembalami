import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  metadataBase: new URL("https://tembalami.com"),
  title: {
    default: "Tembalami | Gospel Music Minister",
    template: "%s | Tembalami",
  },
  description:
    "Tembalami is a Zimbabwean Gospel Music Minister, Recording Artiste, Singer/Songwriter and Music Producer. Experience worship through his music ministry.",
  keywords: ["Tembalami", "Gospel Music", "Zimbabwean Gospel", "Worship", "African Gospel", "Christian Music"],
  authors: [{ name: "Tembalami" }],
  creator: "Tembalami",
  publisher: "Tembalami",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tembalami.com",
    title: "Tembalami | Gospel Music Minister",
    description: "Tembalami is a Zimbabwean Gospel Music Minister, Recording Artiste, Singer/Songwriter and Music Producer.",
    siteName: "Tembalami",
    images: [
      {
        url: "/images/og-image.jpg", // We need to make sure this image exists or use a default one
        width: 1200,
        height: 630,
        alt: "Tembalami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tembalami | Gospel Music Minister",
    description: "Tembalami is a Zimbabwean Gospel Music Minister, Recording Artiste, Singer/Songwriter and Music Producer.",
    images: ["/images/og-image.jpg"],
    creator: "@tembalami", // Assuming this handle, can be updated
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.className} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

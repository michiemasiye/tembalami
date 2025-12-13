"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    href: "/music",
    label: "Music",
    dropdown: [
      { href: "/music#albums", label: "Albums" },
      { href: "/music#singles", label: "Singles" },
    ],
  },
  { href: "/inspired-worship", label: "Inspired Worship" },
  { href: "/merchandise", label: "Merchandise" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/contact", label: "Contact" },
]

export function Header({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  const textColor = variant === "dark" ? "text-white" : "text-primary"
  const bgColor = variant === "dark" ? "bg-secondary/95" : "bg-white/95"
  const dropdownBg = variant === "dark" ? "bg-secondary border-white/20" : "bg-white border-secondary/20"
  const headerBg = variant === "light" ? "bg-white shadow-md" : ""

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const logoSrc = pathname === "/" ? "/images/tembalami-white-logo.png" : "/images/tembalami-logo-final.png"

  return (
    <header className={`absolute top-0 left-0 right-0 z-50 ${textColor} ${headerBg}`}>
      <div className="container mx-auto px-4 py-2">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logoSrc}
              alt="Tembalami"
              width={200}
              height={60}
              className="h-16 md:h-24 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div key={link.href} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className="text-sm font-mono uppercase tracking-wider hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${activeDropdown === link.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {activeDropdown === link.label && (
                      <div
                        className={`absolute top-full left-0 mt-2 py-2 min-w-[150px] border ${dropdownBg} shadow-lg`}
                      >
                        <Link
                          href={link.href}
                          className="block px-4 py-2 text-sm font-mono uppercase tracking-wider hover:text-primary hover:bg-primary/10 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          All Music
                        </Link>
                        {link.dropdown.map((subLink) => (
                          <Link
                            key={subLink.href}
                            href={subLink.href}
                            className="block px-4 py-2 text-sm font-mono uppercase tracking-wider hover:text-primary hover:bg-primary/10 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {subLink.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm font-mono uppercase tracking-wider hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className={`lg:hidden absolute top-full left-0 right-0 ${bgColor} backdrop-blur-sm`}>
            <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-mono uppercase tracking-wider hover:text-primary transition-colors py-2 block"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {link.dropdown.map((subLink) => (
                        <Link
                          key={subLink.href}
                          href={subLink.href}
                          className="text-xs font-mono uppercase tracking-wider text-white/70 hover:text-primary transition-colors py-1"
                          onClick={() => setIsOpen(false)}
                        >
                          {subLink.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

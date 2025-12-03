import Link from "next/link"

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <svg viewBox="0 0 280 80" className="h-12 md:h-16 w-auto" fill="currentColor">
        {/* Signature-style "Tembalami" text */}
        <path
          d="M15 55 Q20 15, 45 20 Q50 20, 50 25 L48 30 Q45 28, 40 28 L35 55"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
        <text
          x="55"
          y="50"
          fontFamily="'Brush Script MT', cursive"
          fontSize="42"
          fontStyle="italic"
          fill="currentColor"
        >
          embalami
        </text>
        {/* Decorative flourish */}
        <path
          d="M230 35 Q250 30, 260 40 Q265 50, 255 55"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </Link>
  )
}

export function LogoText({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-block ${className}`}>
      <div className="flex flex-col items-center">
        <span className="text-3xl md:text-4xl tracking-wide" style={{ fontFamily: "'Brush Script MT', cursive" }}>
          Tembalami
        </span>
      </div>
    </Link>
  )
}

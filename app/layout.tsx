import type React from "react"
import type { Metadata } from "next"
import { Manrope, Space_Mono, Instrument_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../styles/globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-cal-sans",
  display: "swap",
})

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Elijah Alonzo",
  description: "Showcasing creative work and technical expertise through beautiful digital experiences.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${manrope.variable} ${spaceMono.variable} ${instrumentSans.variable} font-sans antialiased min-h-screen bg-background`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

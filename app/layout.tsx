import type React from "react"
import type { Metadata } from "next"
import { Manrope, Space_Mono, Instrument_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
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
  title: "Portfolio | Developer",
  description: "Showcasing creative work and technical expertise through beautiful digital experiences.",
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${spaceMono.variable} ${instrumentSans.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="noise-overlay" aria-hidden="true" />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}

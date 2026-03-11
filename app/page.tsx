import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { BentoGrid } from "@/components/bento-grid"
import { Experience } from "@/components/experience"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background dark:bg-zinc-950">
        <Navbar />
        <Hero />
        <BentoGrid />
        <Experience />
        <FinalCTA />
        <Footer />
      </main>
    </SmoothScroll>
  )
}

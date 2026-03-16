"use client"

import { SmoothScroll } from "@/components/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import HomePage from "@/app/home/page"
import TechnicalPage from "@/app/technical/page"
import ExperiencePage from "@/app/experience/page"
import ProjectsPage from "@/app/projects/page"
import ContactPage from "@/app/contact/page"

export default function Page() {
  return (
    <SmoothScroll>
      <main className="min-h-screen bg-background dark:bg-zinc-950">
        <Navbar />
        <HomePage />
        <TechnicalPage />
        <ExperiencePage />
        <ProjectsPage />
        <ContactPage />
        <Footer />
      </main>
    </SmoothScroll>
  )
}

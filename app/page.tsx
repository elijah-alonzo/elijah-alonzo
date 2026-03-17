"use client"

import { SmoothScroll } from "@/lib/smooth-scroll"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import HomePage from "@/components/section/home/page"
import TechnicalPage from "@/components/section/technical/page"
import ExperiencePage from "@/components/section/experience/page"
import ProjectsPage from "@/components/section/projects/page"
import ContactPage from "@/components/section/contact/page"

export default function Page() {
  return (
    <SmoothScroll>
      <main>
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

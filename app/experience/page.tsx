"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import { CONTAINER_VARIANTS, ITEM_VARIANTS_X } from "@/lib/animations"
import { IN_VIEW, SPACING } from "@/lib/config"
import { SectionHeader } from "@/components/section-header"

interface ExperienceData {
  id: number
  company: string
  role: string
  period: string
  location: string
  description: string
  skills: string[]
  link: string
}

export default function ExperiencePage() {
  const ref = useRef<HTMLElement | null>(null)
  const isInView = useInView(ref, { once: IN_VIEW.ONCE, margin: IN_VIEW.MARGIN })
  const [experiences, setExperiences] = useState<ExperienceData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        setError(null)
        const response = await fetch("/experiences.json")

        if (!response.ok) {
          throw new Error(`Failed to load experiences: ${response.statusText}`)
        }

        const data = await response.json()

        if (!Array.isArray(data)) {
          throw new Error("Invalid experiences data format")
        }

        setExperiences(data)
      } catch (err) {
        const message = err instanceof Error ? err.message : "Failed to load experiences"
        setError(message)
        console.error("Experiences loading error:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchExperiences()
  }, [])

  return (
    <section ref={ref} id="experience" className={`${SPACING.PADDING_SECTION} ${SPACING.PADDING_X} bg-background dark:bg-zinc-950`}>
      <div className={`${SPACING.MAX_WIDTH} mx-auto`}>
        <SectionHeader
          title="Professional Experience"
          description="A journey through roles that have shaped my expertise in design, development, and digital innovation."
          isInView={isInView}
        />

        {error && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30 mb-6">
            <p className="text-sm font-medium text-red-600 dark:text-red-400">
              ✕ {error}
            </p>
          </div>
        )}

        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <p className="text-muted-foreground dark:text-zinc-400">Loading experiences...</p>
            </div>
          </div>
        )}

        {!loading && experiences.length === 0 && !error && (
          <div className="p-8 rounded-lg bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 text-center">
            <p className="text-muted-foreground dark:text-zinc-400">No experiences available yet.</p>
          </div>
        )}

        {!loading && experiences.length > 0 && (
          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-4"
          >
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={ITEM_VARIANTS_X}
                className="group relative p-6 rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:border-emerald-500/30 dark:hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
              >
                {/* Green accent element on hover */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-emerald-500 group-hover:h-full transition-all duration-300 rounded-l-2xl" />
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-card dark:bg-zinc-800 group-hover:bg-emerald-600/20">
                        <Briefcase className="w-4 h-4 text-muted-foreground dark:text-zinc-400 group-hover:text-emerald-500 transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground dark:text-white">{exp.role}</h3>
                        <p className="text-sm text-muted-foreground dark:text-zinc-400 font-medium">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground dark:text-zinc-400 mb-4 text-sm leading-relaxed">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 text-xs rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-400 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 pt-4 border-t border-border dark:border-zinc-800 text-xs text-muted-foreground dark:text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="hidden sm:block text-border dark:text-zinc-700">•</span>
                  <div className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  )
}

"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react"

const experiences = [
  {
    company: "Design Studio",
    role: "Lead Product Designer",
    period: "2023 - Present",
    location: "Remote",
    description: "Leading design systems and creating exceptional user experiences for enterprise clients. Mentoring junior designers and establishing design best practices.",
    skills: ["Figma", "User Research", "Design Systems", "Prototyping"],
    link: "#"
  },
  {
    company: "Tech Startup",
    role: "Full Stack Developer",
    period: "2021 - 2023",
    location: "New York, NY",
    description: "Developed and shipped multiple product features. Built scalable backend systems and created responsive frontend applications using modern tech stacks.",
    skills: ["React", "Node.js", "PostgreSQL", "TypeScript"],
    link: "#"
  },
  {
    company: "Creative Agency",
    role: "Frontend Developer",
    period: "2020 - 2021",
    location: "San Francisco, CA",
    description: "Created interactive web experiences and animations. Collaborated with designers to bring creative visions to life with high-performance code.",
    skills: ["React", "Animation", "CSS", "JavaScript"],
    link: "#"
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-24 px-4 bg-background dark:bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-foreground dark:text-white mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            Professional Experience
          </h2>
          <p className="text-muted-foreground dark:text-zinc-400 max-w-2xl">
            A journey through roles that have shaped my expertise in design, development, and digital innovation.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-muted dark:bg-zinc-900/50 border border-border dark:border-zinc-800 hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300"
            >
              {/* Left accent line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 to-transparent rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-card dark:bg-zinc-800">
                      <Briefcase className="w-4 h-4 text-foreground dark:text-emerald-500" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground dark:text-white">{exp.role}</h3>
                      <p className="text-sm text-foreground dark:text-emerald-500 font-medium">{exp.company}</p>
                    </div>
                  </div>
                </div>
                <a
                  href={exp.link}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-400 hover:text-foreground dark:hover:text-white transition-colors text-sm"
                >
                  Learn more
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <p className="text-muted-foreground dark:text-zinc-400 mb-4 text-sm md:text-base leading-relaxed">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-full bg-card dark:bg-zinc-800 text-muted-foreground dark:text-zinc-300 font-medium"
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
      </div>
    </section>
  )
}

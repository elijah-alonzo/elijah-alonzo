"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Linkedin, Github, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "elijahalonzo.me@gmail.com",
    href: "mailto:elijahalonzo.me@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/elijah-alonzo",
    href: "https://linkedin.com/in/elijah-alonzo",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/elijah-alonzo",
    href: "https://github.com/elijah-alonzo",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "Elijah Alonzo",
    href: "https://facebook.com/elijah.alonzo",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@elijhalnz",
    href: "https://instagram.com/elijhalnz",
  },
]

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add form submission logic here
  }

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="contact" className="py-24 px-4 bg-background dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Info */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-4 tracking-tight"
              style={{ fontFamily: "var(--font-instrument-sans)" }}
            >
              Let's Connect
            </h2>
            <p className="text-muted-foreground dark:text-zinc-400 mb-8 leading-relaxed">
              Whether you're looking for a web developer, graphics designer, or creative collaborator, feel free to reach out!
            </p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {contactLinks.map((link) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={itemVariants}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800 hover:border-border dark:hover:border-zinc-700 transition-all duration-300"
                  >
                    <div className="p-2.5 rounded-lg bg-card dark:bg-zinc-800 mt-0.5">
                      <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground dark:text-white">{link.label}</h3>
                      <p className="text-sm text-muted-foreground dark:text-zinc-400 truncate">{link.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl bg-muted dark:bg-zinc-900 border border-border dark:border-zinc-800"
          >
            <h3
              className="text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-6"
              style={{ fontFamily: "var(--font-instrument-sans)" }}
            >
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-muted-foreground dark:text-zinc-400 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-background dark:bg-zinc-950 border border-border dark:border-zinc-800 text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-zinc-600 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-muted-foreground dark:text-zinc-400 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-lg bg-background dark:bg-zinc-950 border border-border dark:border-zinc-800 text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-zinc-600 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground dark:text-zinc-400 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg bg-background dark:bg-zinc-950 border border-border dark:border-zinc-800 text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-zinc-600 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-muted-foreground dark:text-zinc-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2.5 rounded-lg bg-background dark:bg-zinc-950 border border-border dark:border-zinc-800 text-foreground dark:text-white placeholder-muted-foreground dark:placeholder-zinc-600 focus:outline-none focus:border-emerald-500 dark:focus:border-emerald-500 transition-colors resize-none"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full shimmer-btn bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg h-12 font-medium transition-colors"
              >
                <Mail className="mr-2 w-4 h-4" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

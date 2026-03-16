"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { sectionCardBaseClass } from "@/styles/card-styles"
import { primaryShimmerButtonClass } from "@/styles/button-styles"
import { contactTextareaClass, getContactFieldClass } from "@/styles/form-styles"
import { CONTACT_VARIANTS, fadeUpInViewProps } from "@/lib/animations"
import { ICON_MAP } from "@/lib/utils"
import { contactFormSchema, type ContactFormInput } from "@/lib/schemas"
import socialLinksData from "@/app/contact/data.json"
import { ZodError } from "zod"

interface ContactLink {
  icon: string
  label: string
  value: string
  href: string
}

function normalizeContactLinks(data: unknown): ContactLink[] {
  if (!Array.isArray(data)) {
    return []
  }

  return data
    .map((item) => {
      const link = (item ?? {}) as Partial<ContactLink>
      return {
        icon: typeof link.icon === "string" ? link.icon : "Mail",
        label: typeof link.label === "string" ? link.label : "Contact",
        value: typeof link.value === "string" ? link.value : "",
        href: typeof link.href === "string" ? link.href : "#",
      }
    })
    .filter((link) => link.value.length > 0)
}

export default function ContactPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const contactLinks = normalizeContactLinks(socialLinksData)
  const [formData, setFormData] = useState<ContactFormInput>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
    if (submitError) {
      setSubmitError("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrors({})
    setSubmitError("")
    setIsSubmitting(true)

    try {
      const validatedData = contactFormSchema.parse(formData)

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || "Failed to send message")
      }

      setSubmitted(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      if (error instanceof ZodError) {
        const fieldErrors: Record<string, string> = {}
        error.errors.forEach((err) => {
          const path = err.path[0] as string
          fieldErrors[path] = err.message
        })
        setErrors(fieldErrors)
      } else if (error instanceof Error) {
        setSubmitError(error.message)
      } else {
        setSubmitError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 bg-background dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div ref={ref} {...fadeUpInViewProps(isInView)}>
            <h2 className="display-font text-4xl sm:text-5xl font-bold text-foreground dark:text-white mb-4 tracking-tight">
              Let's Connect
            </h2>
            <p className="text-muted-foreground dark:text-zinc-400 mb-8 leading-relaxed">
              Whether you're looking for a web developer, graphics designer, or creative collaborator, feel free to reach out!
            </p>

            <motion.div
              variants={CONTACT_VARIANTS.container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-4"
            >
              {contactLinks.map((link) => {
                const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP] ?? ICON_MAP.Mail
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={CONTACT_VARIANTS.item}
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

          <motion.div
            {...fadeUpInViewProps(isInView, 0.1)}
            className="group"
          >
            <Card className={sectionCardBaseClass}>
              <CardContent className="p-8">
                <h3 className="display-font text-2xl sm:text-3xl font-bold text-foreground dark:text-white mb-6">
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
                    disabled={isSubmitting}
                    className={getContactFieldClass(Boolean(errors.name))}
                    required
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
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
                    disabled={isSubmitting}
                    className={getContactFieldClass(Boolean(errors.email))}
                    required
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
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
                  disabled={isSubmitting}
                  className={getContactFieldClass(Boolean(errors.subject))}
                  required
                />
                {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
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
                  disabled={isSubmitting}
                  rows={6}
                  className={`${getContactFieldClass(Boolean(errors.message))} ${contactTextareaClass}`}
                  required
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
              </div>

              {submitError && (
                <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">
                    ✕ {submitError}
                  </p>
                </div>
              )}

              {submitted && (
                <div className="p-4 rounded-lg bg-emerald-500/10 border border-emerald-500/30">
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || submitted}
                    className={primaryShimmerButtonClass}
                  >
                    <Mail className="mr-2 w-4 h-4" />
                    {isSubmitting ? "Sending..." : submitted ? "Message Sent!" : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

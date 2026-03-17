"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail } from "lucide-react"
import {
  sectionCardBaseClass,
  primaryShimmerButtonClass,
  contactTextareaClass,
  getContactFieldClass,
  contactStyles,
} from "@/styles/system"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { CONTACT_VARIANTS, fadeUpInViewProps } from "@/lib/animations"
import { ICON_MAP } from "@/lib/utils"
import { contactFormSchema, type ContactFormInput } from "@/lib/schemas"
import socialLinksData from "@/components/section/contact/data.json"
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
    <section id="contact" className={contactStyles.section}>
      <div className={contactStyles.container}>
        <div className={contactStyles.grid}>
          <motion.div ref={ref} {...fadeUpInViewProps(isInView)}>
            <SectionHeader
              title="Let's Connect"
              description="Whether you're looking for a web developer, graphics designer, or creative collaborator, feel free to reach out!"
              isInView={isInView}
              align="left"
            />

            <motion.div
              variants={CONTACT_VARIANTS.container}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className={contactStyles.linkList}
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
                    className={contactStyles.linkItem}
                  >
                    <div className={contactStyles.linkIconWrap}>
                      <Icon className={contactStyles.linkIcon} />
                    </div>
                    <div className={contactStyles.linkContent}>
                      <h3 className={contactStyles.linkLabel}>{link.label}</h3>
                      <p className={contactStyles.linkValue}>{link.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </motion.div>
          </motion.div>

          <motion.div
            {...fadeUpInViewProps(isInView, 0.1)}
            className={contactStyles.formWrap}
          >
            <Card className={sectionCardBaseClass}>
              <CardContent className={contactStyles.formCardContent}>
                <h3 className={contactStyles.formTitle}>
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className={contactStyles.form}>
              <div className={contactStyles.nameEmailGrid}>
                <div>
                  <label htmlFor="name" className={contactStyles.fieldLabel}>
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
                  {errors.name && <p className={contactStyles.fieldError}>{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={contactStyles.fieldLabel}>
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
                  {errors.email && <p className={contactStyles.fieldError}>{errors.email}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className={contactStyles.fieldLabel}>
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
                {errors.subject && <p className={contactStyles.fieldError}>{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="message" className={contactStyles.fieldLabel}>
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
                {errors.message && <p className={contactStyles.fieldError}>{errors.message}</p>}
              </div>

              {submitError && (
                <div className={contactStyles.submitErrorWrap}>
                  <p className={contactStyles.submitErrorText}>
                    ✕ {submitError}
                  </p>
                </div>
              )}

              {submitted && (
                <div className={contactStyles.submitSuccessWrap}>
                  <p className={contactStyles.submitSuccessText}>
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || submitted}
                    className={primaryShimmerButtonClass}
                  >
                    <Mail className={contactStyles.submitIcon} />
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

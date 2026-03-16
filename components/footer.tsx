"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ICON_MAP } from "@/lib/utils"
import { fadeInInViewProps, fadeUpInViewProps } from "@/lib/animations"
import footerData from "@/components/footer/data.json"
import socialLinksData from "@/app/contact/data.json"

interface FooterLinkGroup {
  title: string
  links: string[]
}

interface FooterSocialLink {
  icon: string
  href: string
  title: string
}

interface FooterData {
  brandName: string
  brandInitial: string
  description: string
  badge: string
  copyrightName: string
  sections: FooterLinkGroup[]
}

function normalizeFooterSocialLinks(data: unknown): FooterSocialLink[] {
  if (!Array.isArray(data)) {
    return []
  }

  return data
    .map((social) => {
      const item = (social ?? {}) as Partial<FooterSocialLink>
      return {
        icon: typeof item.icon === "string" ? item.icon : "Mail",
        href: typeof item.href === "string" ? item.href : "#",
        title: typeof item.title === "string" ? item.title : "Social",
      }
    })
    .filter((social) => social.href.length > 0)
}

function normalizeFooterData(data: unknown): FooterData {
  const raw = (data ?? {}) as Partial<FooterData>

  const sections = Array.isArray(raw.sections)
    ? raw.sections
        .map((section) => {
          const item = (section ?? {}) as Partial<FooterLinkGroup>
          return {
            title: typeof item.title === "string" ? item.title : "Section",
            links: Array.isArray(item.links) ? item.links.filter((link): link is string => typeof link === "string") : [],
          }
        })
        .filter((section) => section.links.length > 0)
    : []

  return {
    brandName: typeof raw.brandName === "string" ? raw.brandName : "Portfolio",
    brandInitial: typeof raw.brandInitial === "string" ? raw.brandInitial : "P",
    description: typeof raw.description === "string" ? raw.description : "",
    badge: typeof raw.badge === "string" ? raw.badge : "Available for Projects",
    copyrightName: typeof raw.copyrightName === "string" ? raw.copyrightName : "Your Name",
    sections,
  }
}

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const data = normalizeFooterData(footerData)
  const socialLinks = normalizeFooterSocialLinks(socialLinksData)

  return (
    <footer ref={ref} className="border-t border-border dark:border-zinc-800 bg-background dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div {...fadeUpInViewProps(isInView)} className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-foreground dark:bg-white flex items-center justify-center">
                <span className="text-background dark:text-zinc-950 font-bold text-sm">{data.brandInitial}</span>
              </div>
              <span className="font-semibold text-foreground dark:text-white">{data.brandName}</span>
            </a>
            <p className="text-sm text-muted-foreground dark:text-zinc-500 mb-4">{data.description}</p>
            {/* Availability Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card dark:bg-zinc-900 border border-border dark:border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-glow" />
              <span className="text-xs text-muted-foreground dark:text-zinc-400">{data.badge}</span>
            </div>
          </div>

          {/* Links */}
          {data.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-sm font-semibold text-foreground dark:text-white mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-muted-foreground dark:text-zinc-500 hover:text-foreground dark:hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Bottom */}
        <motion.div
          {...fadeInInViewProps(isInView, 0.3)}
          className="mt-16 pt-8 border-t border-border dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground dark:text-zinc-500">&copy; {new Date().getFullYear()} {data.copyrightName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => {
              const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP] ?? ICON_MAP.Mail
              return (
                <a
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground dark:text-zinc-500 hover:text-foreground dark:hover:text-white transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

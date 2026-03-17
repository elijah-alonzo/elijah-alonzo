"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ICON_MAP } from "@/lib/utils"
import { fadeInInViewProps, fadeUpInViewProps } from "@/lib/animations"
import { footerStyles } from "@/styles/system"
import footerData from "@/components/footer/data.json"
import socialLinksData from "./section/contact/data.json"

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
    <footer ref={ref} className={footerStyles.root}>
      <div className={footerStyles.container}>
        <motion.div {...fadeUpInViewProps(isInView)} className={footerStyles.topGrid}>
          {/* Brand */}
          <div className={footerStyles.brandCol}>
            <a href="#" className={footerStyles.brandLink}>
              <div className={footerStyles.brandBadge}>
                <span className={footerStyles.brandBadgeText}>{data.brandInitial}</span>
              </div>
              <span className={footerStyles.brandName}>{data.brandName}</span>
            </a>
            <p className={footerStyles.brandDescription}>{data.description}</p>
            {/* Availability Status */}
            <div className={footerStyles.availabilityWrap}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-glow" />
              <span className={footerStyles.availabilityText}>{data.badge}</span>
            </div>
          </div>

          {/* Links */}
          {data.sections.map((section) => (
            <div key={section.title}>
              <h4 className={footerStyles.sectionTitle}>{section.title}</h4>
              <ul className={footerStyles.sectionList}>
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className={footerStyles.sectionLink}>
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
          className={footerStyles.bottomRow}
        >
          <p className={footerStyles.copyright}>&copy; {new Date().getFullYear()} {data.copyrightName}. All rights reserved.</p>
          <div className={footerStyles.socialRow}>
            {socialLinks.map((link) => {
              const Icon = ICON_MAP[link.icon as keyof typeof ICON_MAP] ?? ICON_MAP.Mail
              return (
                <a
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={footerStyles.socialLink}
                >
                  <Icon className={footerStyles.socialIcon} />
                </a>
              )
            })}
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

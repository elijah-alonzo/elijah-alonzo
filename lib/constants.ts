

// Avatar images
export const AVATARS = [
  "/professional-headshot-1.png",
  "/professional-headshot-2.png",
  "/professional-headshot-3.png",
  "/professional-headshot-4.png",
  "/professional-headshot-5.png",
]

// Icon type: strictly typed
export type IconName = "Mail" | "Linkedin" | "Github" | "Facebook" | "Instagram"

// Single source of truth for all contact/social information
interface ContactInfo {
  icon: IconName
  href: string
  title: string
  label: string
  displayValue: string
}

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "Mail",
    href: "mailto:elijahalonzo.me@gmail.com",
    title: "Email",
    label: "Email",
    displayValue: "elijahalonzo.me@gmail.com",
  },
  {
    icon: "Linkedin",
    href: "https://linkedin.com/in/elijah-alonzo",
    title: "LinkedIn",
    label: "LinkedIn",
    displayValue: "linkedin.com/in/elijah-alonzo",
  },
  {
    icon: "Github",
    href: "https://github.com/elijah-alonzo",
    title: "GitHub",
    label: "GitHub",
    displayValue: "github.com/elijah-alonzo",
  },
  {
    icon: "Facebook",
    href: "https://facebook.com/elijah.alonzo",
    title: "Facebook",
    label: "Facebook",
    displayValue: "Elijah Alonzo",
  },
  {
    icon: "Instagram",
    href: "https://instagram.com/elijhalnz",
    title: "Instagram",
    label: "Instagram",
    displayValue: "@elijhalnz",
  },
]

// Export simplified view for hero/navbar
export const SOCIAL_LINKS = CONTACT_INFO.map((info) => ({
  icon: info.icon,
  href: info.href,
  title: info.title,
}))

// Export full view for contact section
export const CONTACT_LINKS = CONTACT_INFO.map((info) => ({
  icon: info.icon,
  label: info.label,
  value: info.displayValue,
  href: info.href,
}))

// Footer social links (derived from same source)
export const FOOTER_SOCIAL_LINKS = SOCIAL_LINKS



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
}

const CONTACT_INFO: ContactInfo[] = [
  {
    icon: "Mail",
    href: "mailto:elijahalonzo.me@gmail.com",
    title: "Email",
  },
  {
    icon: "Linkedin",
    href: "https://linkedin.com/in/elijah-alonzo",
    title: "LinkedIn",
  },
  {
    icon: "Github",
    href: "https://github.com/elijah-alonzo",
    title: "GitHub",
  },
  {
    icon: "Facebook",
    href: "https://facebook.com/elijah.alonzo",
    title: "Facebook",
  },
  {
    icon: "Instagram",
    href: "https://instagram.com/elijhalnz",
    title: "Instagram",
  },
]

// Export simplified view for hero/navbar
export const SOCIAL_LINKS = CONTACT_INFO.map((info) => ({
  icon: info.icon,
  href: info.href,
  title: info.title,
}))

// Footer social links (derived from same source)
export const FOOTER_SOCIAL_LINKS = SOCIAL_LINKS

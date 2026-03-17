"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { navbarStyles } from "@/styles/system"
import { NAV_ITEMS } from "@/lib/navigation"
import { NAVBAR_HEADER_ANIMATION, NAVBAR_HOVER_TRANSITION, NAVBAR_MOBILE_MENU_ANIMATION } from "@/lib/animations"

export function Navbar() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)

  return (
    <motion.header
      {...NAVBAR_HEADER_ANIMATION}
      className={navbarStyles.header}
    >
      <nav
        ref={navRef}
        className={navbarStyles.nav}
      >
        {/* Logo */}
        <a href="#" className={navbarStyles.logoLink}>
          <div className={navbarStyles.logoBadge}>
            <span className={navbarStyles.logoBadgeText}>P</span>
          </div>
          <span className={navbarStyles.logoText}>Elijah Alonzo</span>
        </a>

        {/* Desktop Nav Items */}
        <div className={navbarStyles.desktopNavWrap}>
          {NAV_ITEMS.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              className={navbarStyles.desktopNavLink}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {hoveredIndex === index && (
                <motion.div
                  layoutId="navbar-hover"
                  className={navbarStyles.desktopHoverPill}
                  initial={false}
                  transition={NAVBAR_HOVER_TRANSITION}
                />
              )}
              <span className={navbarStyles.desktopNavLinkText}>{item.label}</span>
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className={navbarStyles.desktopActions}>
          <Button
            variant="ghost"
            size="sm"
            className={navbarStyles.ghostButton}
            asChild
          >
            <a href="#" download>Resume</a>
          </Button>
          <Button
            size="sm"
            className={navbarStyles.ctaButton}
            asChild
          >
            <a href="#contact">Let&apos;s Talk</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={navbarStyles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          {...NAVBAR_MOBILE_MENU_ANIMATION}
          className={navbarStyles.mobileMenu}
        >
          <div className={navbarStyles.mobileMenuList}>
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={navbarStyles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <hr className={navbarStyles.mobileDivider} />
            <Button
              variant="ghost"
              className={navbarStyles.mobileGhostButton}
              asChild
            >
              <a href="#" download>Resume</a>
            </Button>
            <Button
              className={navbarStyles.mobileCtaButton}
              asChild
            >
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Let&apos;s Talk</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}

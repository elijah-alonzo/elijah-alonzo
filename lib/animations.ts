// Shared animation variants across components

export const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export const ITEM_VARIANTS_X = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
}

export const HEADER_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

// Variants for form/contact sections (CTA components)
export const CONTACT_VARIANTS = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    },
  },
}

// Generic motion helpers
export const FADE_UP_INITIAL = { opacity: 0, y: 20 } as const
export const FADE_UP_ANIMATE = { opacity: 1, y: 0 } as const
export const FADE_IN_INITIAL = { opacity: 0 } as const
export const FADE_IN_ANIMATE = { opacity: 1 } as const
export const HIDDEN_ANIMATE = {} as const

export const fadeUpTransition = (delay = 0, duration = 0.6) => ({
  duration,
  delay,
})

export const fadeInTransition = (delay = 0, duration = 0.6) => ({
  duration,
  delay,
})

export const fadeUpInViewProps = (isInView: boolean, delay = 0, duration = 0.6) => ({
  initial: FADE_UP_INITIAL,
  animate: isInView ? FADE_UP_ANIMATE : HIDDEN_ANIMATE,
  transition: fadeUpTransition(delay, duration),
})

export const fadeInInViewProps = (isInView: boolean, delay = 0, duration = 0.6) => ({
  initial: FADE_IN_INITIAL,
  animate: isInView ? FADE_IN_ANIMATE : HIDDEN_ANIMATE,
  transition: fadeInTransition(delay, duration),
})

// Home page presets
export const HOME_ANIMATION = {
  heading: {
    initial: FADE_UP_INITIAL,
    animate: FADE_UP_ANIMATE,
    transition: fadeUpTransition(0, 0.6),
  },
  description: {
    initial: FADE_UP_INITIAL,
    animate: FADE_UP_ANIMATE,
    transition: fadeUpTransition(0.1, 0.6),
  },
  socials: {
    initial: FADE_UP_INITIAL,
    animate: FADE_UP_ANIMATE,
    transition: fadeUpTransition(0.2, 0.6),
  },
  image: {
    initial: FADE_UP_INITIAL,
    animate: FADE_UP_ANIMATE,
    transition: fadeUpTransition(0.2, 0.6),
  },
  badge: {
    initial: FADE_UP_INITIAL,
    animate: FADE_UP_ANIMATE,
    transition: fadeUpTransition(0.3, 0.6),
  },
} as const

// Navigation presets
export const NAVBAR_HEADER_ANIMATION = {
  initial: { y: -100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
} as const

export const NAVBAR_MOBILE_MENU_ANIMATION = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
} as const

export const NAVBAR_HOVER_TRANSITION = { type: "spring", stiffness: 500, damping: 30 } as const

// Technical page dynamic presets
export const SYSTEM_STATUS_ACTIVE_ANIMATE = { scale: [1, 1.2, 1] }
export const systemStatusTransition = (delay: number) => ({
  duration: 1,
  repeat: Number.POSITIVE_INFINITY,
  delay,
})

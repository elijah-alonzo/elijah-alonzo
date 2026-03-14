// Configuration and magic numbers

// Animation timing (in milliseconds)
export const ANIMATION = {
  DURATION_SHORT: 300,
  DURATION_MEDIUM: 600,
  DURATION_LONG: 800,
  DURATION_SCROLL: 1500,
  DELAY_INTERVAL: 4000, // 4 seconds
  STAGGER_DELAY: 0.1,
} as const

// Carousel configuration
export const CAROUSEL = {
  ITEM_WIDTH: 440, // approximate width with gap
  SCROLL_DURATION: 1500, // smooth scroll animation duration
  AUTO_SCROLL_INTERVAL: 4000, // scroll every 4 seconds
} as const

// InView configurations
export const IN_VIEW = {
  ONCE: true,
  AMOUNT: 0.3,
  MARGIN: "-100px",
} as const

// Responsive dimensions
export const DIMENSIONS = {
  CAROUSEL_SM: "w-[280px]",
  CAROUSEL_MD: "w-[340px]",
  CAROUSEL_LG: "w-[380px]",
} as const

// Project image dimensions
export const IMAGE_DIMENSIONS = {
  HEIGHT: "h-40",
} as const

// Border and spacing
export const SPACING = {
  PADDING_SECTION: "py-24",
  PADDING_X: "px-4",
  GAP: "gap-6",
  MAX_WIDTH: "max-w-6xl",
} as const

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium ease-out feel
    },
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const scaleHover = {
  scale: 1.02,
  transition: {
    duration: 0.3,
    ease: "easeOut",
  },
};

export const linkHover = {
  scale: 1.05,
  transition: {
    duration: 0.2,
    ease: "easeOut",
  },
};

export const buttonTap = {
  scale: 0.96,
  transition: {
    duration: 0.1,
    ease: "easeIn",
  },
};

export const fadeOnScroll = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const slideInFromRight = {
  hidden: { opacity: 0, x: 20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

export const slideInFromLeft = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

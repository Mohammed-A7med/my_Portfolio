export const fadeInVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export const mobileListVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const mobileItemVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
};

import { Variants } from "framer-motion";

export const variants: Variants = {
  out: { opacity: 0, y: 50 },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      type: "linear",
      duration: 0.5,
      delay: 0.5,
    },
  },
};

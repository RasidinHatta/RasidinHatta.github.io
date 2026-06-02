"use client";

import { motion } from "motion/react";

export default function ContentFade({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0, 0, 1] }}
      transition={{
        duration: 3.5,
        times: [0, 0.2, 0.8, 1],
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

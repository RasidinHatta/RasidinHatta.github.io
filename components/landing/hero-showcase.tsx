"use client";

import { memo } from "react";
import IntroText from "./intro-text";
import { motion } from "motion/react";
import BusinessCard from "./business-card";

const MemoizedIntroText = memo(IntroText);

export function HeroShowcase() {
  return (
    <motion.section
      className="relative overflow-hidden bg-transparent transition-colors duration-300 md:pl-[60px]"
      initial={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ type: "spring", bounce: 0.32, duration: 0.9 }}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <MemoizedIntroText />
        <div className="w-full max-w-md mx-auto lg:max-w-none">
          <BusinessCard />
        </div>
      </div>
    </motion.section>
  );
}

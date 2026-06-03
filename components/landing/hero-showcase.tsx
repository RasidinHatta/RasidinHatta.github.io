"use client";

import { memo, useEffect, useRef } from "react";
import IntroText from "./intro-text";
import { motion } from "motion/react";
import BusinessCard from "./business-card";
import { createTimeline, stagger } from "animejs";

const MemoizedIntroText = memo(IntroText);

export function HeroShowcase() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!root || reduceMotion) return;

    const card = root.querySelector(".anime-hero__card");
    if (!card) return;

    const timeline = createTimeline({
      defaults: { ease: "out(3)" },
    });

    timeline
      .add(root.querySelectorAll(".anime-hero__mark"), {
        opacity: [0, 1],
        scale: [0.2, 1],
        rotate: [-20, 0],
        duration: 720,
        delay: stagger(65, { from: "center" }),
      })
      .add(card, {
        opacity: [0, 1],
        translateX: [42, 0],
        rotate: [5, 0],
        duration: 860,
      }, 220);

    return () => {
      timeline.revert();
    };
  }, []);

  return (
    <motion.section
      ref={rootRef}
      className="relative overflow-hidden bg-transparent transition-colors duration-300 md:pl-[60px]"
      initial={{ opacity: 0, scale: 1.04, filter: "blur(12px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ type: "spring", bounce: 0.32, duration: 0.9 }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        {["top-[18%] left-[7%]", "top-[28%] right-[11%]", "bottom-[18%] left-[18%]", "bottom-[24%] right-[28%]"].map((position) => (
          <span
            key={position}
            className={`anime-hero__mark absolute h-3 w-3 rounded-full border border-primary/40 bg-primary/20 opacity-0 ${position}`}
          />
        ))}
      </div>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
        <MemoizedIntroText />
        <div className="anime-hero__card mx-auto w-full max-w-md opacity-0 lg:max-w-none">
          <BusinessCard />
        </div>
      </div>
    </motion.section>
  );
}

"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");

    if (hasVisited) {
      queueMicrotask(() => setShouldShow(false));
      return;
    }

    localStorage.setItem("hasVisitedBefore", "true");

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const nextProgress = prev + Math.random() * 30;
        return nextProgress > 100 ? 100 : nextProgress;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, []);

  if (!shouldShow || !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1.8 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex w-full flex-col items-center justify-center gap-7 px-8">
        <motion.div className="flex justify-center rounded-lg border border-primary/25 bg-card/90 p-3 shadow-sm">
          <Image
            src="/rainbow-cat.gif"
            alt="Loading"
            width={128}
            height={128}
            priority
            unoptimized
            loading="eager"
          />
        </motion.div>

        <div className="flex w-full max-w-xs flex-col items-center gap-3">
          <motion.p
            className="text-sm font-semibold uppercase tracking-wide text-muted-foreground"
            animate={{ opacity: [0.7, 1] }}
            transition={{ duration: 0.5 }}
          >
            Loading {Math.round(progress)}%
          </motion.p>
          <div className="h-1 w-full overflow-hidden rounded-full bg-muted">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

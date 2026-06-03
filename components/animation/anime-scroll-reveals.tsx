"use client";

import { animate, stagger } from "animejs";
import { useEffect } from "react";

export function AnimeScrollReveals() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(document.querySelectorAll<HTMLElement>(".anime-reveal"));

    if (reduceMotion || targets.length === 0) {
      targets.forEach((target) => {
        target.style.opacity = "1";
        target.style.transform = "none";
      });
      return;
    }

    targets.forEach((target) => {
      target.style.opacity = "0";
      target.style.transform = "translateY(28px) scale(.985)";
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const target = entry.target as HTMLElement;
          const children = target.querySelectorAll(".anime-reveal__item");

          animate(target, {
            opacity: [0, 1],
            translateY: [28, 0],
            scale: [0.985, 1],
            duration: 720,
            ease: "out(3)",
          });

          if (children.length) {
            animate(children, {
              opacity: [0, 1],
              translateY: [18, 0],
              rotate: [-1.5, 0],
              duration: 560,
              delay: stagger(58),
              ease: "out(3)",
            });
          }

          observer.unobserve(target);
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.2 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return null;
}

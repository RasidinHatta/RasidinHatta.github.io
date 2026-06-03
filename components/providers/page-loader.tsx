"use client";

import { createTimeline, stagger } from "animejs";
import { useEffect, useRef, useState } from "react";

const loaderLetters = "RASIDIN".split("");
const loaderTiles = Array.from({ length: 24 });

export default function PageLoader() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);
  const [shouldShow, setShouldShow] = useState(true);

  useEffect(() => {
    const hasVisited = localStorage.getItem("hasVisitedBefore");

    if (hasVisited) {
      queueMicrotask(() => setShouldShow(false));
      return;
    }

    localStorage.setItem("hasVisitedBefore", "true");
  }, []);

  useEffect(() => {
    const root = rootRef.current;

    if (!root || !shouldShow) return;

    const bar = root.querySelector(".anime-loader__bar");
    if (!bar) return;

    const timeline = createTimeline({
      defaults: { ease: "out(3)" },
      onComplete: () => setIsVisible(false),
    });

    timeline
      .add(root.querySelectorAll(".anime-loader__tile"), {
        opacity: [0, 1],
        scale: [0.28, 1],
        rotate: [-24, 0],
        duration: 760,
        delay: stagger(24, { grid: [8, 3], from: "center" }),
      })
      .add(root.querySelectorAll(".anime-loader__letter"), {
        opacity: [0, 1],
        translateY: ["120%", "0%"],
        rotate: [16, 0],
        duration: 720,
        delay: stagger(52, { from: "center" }),
      }, 180)
      .add(bar, {
        scaleX: [0, 1],
        duration: 980,
        ease: "inOut(3)",
      }, 300)
      .add(root.querySelectorAll(".anime-loader__spark"), {
        opacity: [0, 1, 0],
        scale: [0.3, 1.4],
        translateY: [16, -24],
        duration: 920,
        delay: stagger(80, { from: "center" }),
      }, 560)
      .add(root, {
        opacity: [1, 0],
        scale: [1, 1.03],
        duration: 520,
        ease: "in(3)",
      }, 1700);

    return () => {
      timeline.revert();
    };
  }, [shouldShow]);

  if (!shouldShow || !isVisible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-background"
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-80">
        <div className="grid h-full grid-cols-8 grid-rows-3">
          {loaderTiles.map((_, index) => (
            <span
              key={index}
              className="anime-loader__tile border border-primary/10 bg-card/65 opacity-0"
            />
          ))}
        </div>
      </div>

      <div className="relative flex flex-col items-center gap-6 px-6">
        <div className="flex overflow-hidden text-[clamp(2.9rem,11vw,8rem)] font-black leading-none tracking-normal text-foreground">
          {loaderLetters.map((letter, index) => (
            <span key={`${letter}-${index}`} className="block overflow-hidden">
              <span className="anime-loader__letter block opacity-0">
                {letter}
              </span>
            </span>
          ))}
        </div>

        <div className="h-1 w-[min(72vw,520px)] origin-left overflow-hidden rounded-full bg-muted">
          <div className="anime-loader__bar h-full origin-left scale-x-0 bg-primary" />
        </div>

        <div className="flex gap-3">
          {["React", "SQL", "Motion", "Automation"].map((item) => (
            <span
              key={item}
              className="anime-loader__spark rounded-md border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground opacity-0"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

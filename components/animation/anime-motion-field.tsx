"use client";

import { animate, createDrawable, createTimeline, stagger } from "animejs";
import { createDraggable } from "animejs/draggable";
import { useEffect, useRef } from "react";

const motionChips = ["flow", "pulse", "draw", "hover", "loop"];

export function AnimeMotionField() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!root || reduceMotion) return;

    const drawables = createDrawable(root.querySelectorAll(".anime-field__path"), 0, 0);
    const pathAnimation = animate(drawables, {
      draw: "0 1",
      duration: 1800,
      ease: "inOut(3)",
      loop: true,
      alternate: true,
    });

    const loop = createTimeline({
      defaults: { ease: "inOut(2)" },
      loop: true,
      alternate: true,
    });

    loop
      .add(root.querySelectorAll(".anime-field__node"), {
        translateY: [-9, 9],
        translateX: stagger([-4, 4], { from: "center" }),
        rotate: stagger([-8, 8]),
        duration: 1200,
        delay: stagger(90),
      })
      .add(root.querySelectorAll(".anime-field__chip"), {
        translateY: [-4, 4],
        scale: [0.96, 1.04],
        duration: 1000,
        delay: stagger(80, { from: "center" }),
      }, 0);

    const chips = Array.from(root.querySelectorAll<HTMLElement>(".anime-field__chip"));
    const nodes = Array.from(root.querySelectorAll<HTMLElement>(".anime-field__node"));
    const hoverAnimations = new Map<HTMLElement, ReturnType<typeof animate>>();
    const draggables = nodes.map((node) =>
      createDraggable(node, {
        container: root,
        cursor: true,
        releaseEase: "out(3)",
        releaseContainerFriction: 0.55,
      }),
    );

    const enter = (event: Event) => {
      const chip = event.currentTarget as HTMLElement;
      hoverAnimations.get(chip)?.revert();
      hoverAnimations.set(
        chip,
        animate(chip, {
          scale: [1, 1.12, 1.04],
          rotate: [-2, 2, 0],
          backgroundColor: "rgba(16, 185, 129, .18)",
          duration: 480,
          ease: "out(4)",
        }),
      );
    };

    chips.forEach((chip) => chip.addEventListener("mouseenter", enter));

    return () => {
      pathAnimation.revert();
      loop.revert();
      draggables.forEach((draggable) => draggable.revert());
      hoverAnimations.forEach((animation) => animation.revert());
      chips.forEach((chip) => chip.removeEventListener("mouseenter", enter));
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative min-h-[360px] overflow-hidden rounded-lg border border-border/70 bg-background/80 p-5 shadow-sm"
    >
      <div className="absolute inset-0 opacity-80">
        <svg className="h-full w-full" viewBox="0 0 520 360" fill="none" aria-hidden="true">
          <path
            className="anime-field__path"
            d="M58 250 C130 102 206 316 274 160 S416 78 470 220"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="anime-field__path text-primary"
            d="M74 128 C144 208 188 84 260 136 S364 288 456 118"
            stroke="currentColor"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      <div className="relative flex h-full min-h-[320px] flex-col justify-between">
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
          {motionChips.map((chip) => (
            <button
              key={chip}
              type="button"
              className="anime-field__chip cursor-target rounded-md border border-border bg-card/90 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-foreground shadow-sm transition-colors hover:border-primary/60"
            >
              {chip}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 self-end">
          {["01", "02", "03", "04", "05", "06"].map((item) => (
            <span
              key={item}
              className="anime-field__node cursor-grab touch-none select-none grid h-16 w-16 place-items-center rounded-lg border border-primary/30 bg-card/85 text-sm font-bold text-primary shadow-sm active:cursor-grabbing"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="max-w-sm">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Motion Lab
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-foreground">
            Motion that feels coded, playful, and deliberate.
          </h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Responsive details, shifting paths, and gentle hover reactions give
            the page a more expressive feel without making it noisy.
          </p>
        </div>
      </div>
    </div>
  );
}

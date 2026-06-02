"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  Variants,
  MotionProps,
  UseInViewOptions,
} from "motion/react";
import { cn } from "@/lib/utils";

type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TypingTextProps extends Omit<MotionProps, "children"> {
  text?: string;
  texts?: string[];
  speed?: number;
  deleteSpeed?: number;
  delay?: number;
  showCursor?: boolean;
  cursor?:
    | string
    | React.ReactNode
    | ((isDeleting: boolean) => React.ReactNode);
  cursorClassName?: string;
  blinkingCursor?: boolean;
  loop?: boolean;
  pauseDuration?: number;
  className?: string;
  onComplete?: () => void;
  startOnView?: boolean;
  once?: boolean;
  inViewMargin?: UseInViewOptions["margin"];
}

const cursorVariants: Variants = {
  blinking: {
    opacity: [0, 0, 1, 1],
    transition: {
      duration: 1,
      repeat: Infinity,
      ease: "linear",
      times: [0, 0.5, 0.5, 1],
    },
  },
  default: {
    opacity: 1, // Ensure it's visible when not blinking
  },
};

export function TypingText({
  text,
  texts,
  speed = 100,
  deleteSpeed = 50,
  delay = 0,
  showCursor = true,
  cursorClassName = "",
  cursor = "|",
  blinkingCursor = true,
  loop = false,
  pauseDuration = 2000,
  className,
  onComplete,
  startOnView = true,
  once = false,
  inViewMargin,
  ...props
}: TypingTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, {
    once,
    margin: inViewMargin as UseInViewOptions["margin"],
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const shouldStart = !startOnView || (isInView && (!once || !hasAnimated));
  const textArray = texts && texts.length > 0 ? texts : [text ?? ""];
  const currentText = textArray[currentTextIndex] ?? "";

  useEffect(() => {
    if (!shouldStart) return;

    let timeout: NodeJS.Timeout;
    let typingTimeout: NodeJS.Timeout;

    const type = () => {
      if (!isDeleting && displayText.length < currentText.length) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, speed);
      } else if (!isDeleting && displayText.length === currentText.length) {
        // Pause before deleting
        timeout = setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && displayText.length > 0) {
        typingTimeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length - 1));
        }, deleteSpeed);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
        if (!loop && currentTextIndex === textArray.length - 1) {
          onComplete?.();
        }
      }
    };

    const startDelay = setTimeout(() => {
      type();
      setHasAnimated(true);
    }, delay);

    return () => {
      clearTimeout(startDelay);
      clearTimeout(timeout);
      clearTimeout(typingTimeout);
    };
  }, [
    displayText,
    isDeleting,
    currentText,
    currentTextIndex,
    loop,
    speed,
    deleteSpeed,
    pauseDuration,
    delay,
    onComplete,
    shouldStart,
  ]);

  const MotionComponent = motion.span;
  const cursorNode = typeof cursor === "function" ? cursor(isDeleting) : cursor;

  return (
    <MotionComponent
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={cn("inline-flex items-baseline whitespace-nowrap", className)}
      {...props}
    >
      <span>{displayText}</span>
      {showCursor && (
        <motion.span
          variants={cursorVariants}
          animate={blinkingCursor ? "blinking" : "default"}
          className={cn("ms-1 select-none", cursorClassName)}
        >
          {cursorNode}
        </motion.span>
      )}
    </MotionComponent>
  );
}

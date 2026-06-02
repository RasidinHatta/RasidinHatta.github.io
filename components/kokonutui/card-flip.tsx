"use client";

/**
 * @author: @dorianbaffier
 * @description: Card Flip
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { ArrowRight, Repeat2 } from "lucide-react";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

export interface CardFlipProps {
  front?: ReactNode;
  back?: ReactNode;
  title?: string;
  subtitle?: string;
  description?: string;
  features?: string[];
  className?: string;
  innerClassName?: string;
  frontClassName?: string;
  backClassName?: string;
  trigger?: "hover" | "click";
  size?: "portrait" | "business";
  actionLabel?: string;
  actionHref?: string;
}

export default function CardFlip({
  front,
  back,
  title = "Design Systems",
  subtitle = "Explore the fundamentals",
  description = "Dive deep into the world of modern UI/UX design.",
  features = ["UI/UX", "Modern Design", "Tailwind CSS", "Kokonut UI"],
  className,
  innerClassName,
  frontClassName,
  backClassName,
  trigger = "hover",
  size = "portrait",
  actionLabel = "Start today",
  actionHref,
}: CardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const isCustom = Boolean(front || back);
  const isBusiness = size === "business";

  return (
    <div
      className={cn(
        "group relative w-full [perspective:2000px]",
        isBusiness
          ? "aspect-[1.586/1] max-w-none"
          : "h-[320px] max-w-[280px]",
        trigger === "click" && "cursor-pointer",
        className
      )}
      onClick={() => trigger === "click" && setIsFlipped((prev) => !prev)}
      onMouseEnter={() => trigger === "hover" && setIsFlipped(true)}
      onMouseLeave={() => trigger === "hover" && setIsFlipped(false)}
    >
      <div
        className={cn(
          "relative h-full w-full",
          "[transform-style:preserve-3d]",
          "transition-all duration-700",
          "motion-reduce:transition-none",
          isFlipped
            ? "[transform:rotateY(180deg)]"
            : "[transform:rotateY(0deg)]",
          innerClassName
        )}
      >
        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(0deg)]",
            "overflow-hidden rounded-2xl",
            "bg-zinc-50 dark:bg-zinc-900",
            "border border-zinc-200 dark:border-zinc-800/50",
            "shadow-xs dark:shadow-lg",
            "transition-all duration-700",
            "group-hover:shadow-lg dark:group-hover:shadow-xl",
            isFlipped && !isCustom ? "opacity-0" : "opacity-100",
            frontClassName
          )}
        >
          {front ?? (
            <>
              <div className="relative h-full overflow-hidden bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black">
                <div
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-0 flex justify-center",
                    isBusiness ? "items-center pb-8" : "items-start pt-24"
                  )}
                >
                  <div
                    className={cn(
                      "relative flex items-center justify-center",
                      isBusiness ? "h-[88px] w-[190px]" : "h-[100px] w-[200px]"
                    )}
                  >
                    {[...Array(10)].map((_, i) => (
                      <div
                        className={cn(
                          "absolute",
                          isBusiness ? "h-[42px] w-[42px]" : "h-[50px] w-[50px]",
                          "rounded-[140px]",
                          "animate-[scale_3s_linear_infinite]",
                          "motion-reduce:animate-none",
                          "opacity-0",
                          "shadow-[0_0_50px_rgba(255,165,0,0.5)]",
                          "group-hover:animate-[scale_2s_linear_infinite]"
                        )}
                        key={i}
                        style={{
                          animationDelay: `${i * 0.3}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className={cn("absolute right-0 bottom-0 left-0", isBusiness ? "p-6" : "p-5")}>
                <div className="flex items-center justify-between gap-3">
                  <div className="space-y-1.5">
                    <h3
                      className={cn(
                        "font-semibold text-zinc-900 leading-snug tracking-tighter transition-all duration-500 ease-out-expo group-hover:translate-y-[-4px] dark:text-white",
                        isBusiness ? "text-2xl" : "text-lg"
                      )}
                    >
                      {title}
                    </h3>
                    <p
                      className={cn(
                        "line-clamp-2 text-zinc-600 tracking-tight transition-all delay-[50ms] duration-500 ease-out-expo group-hover:translate-y-[-4px] dark:text-zinc-200",
                        isBusiness ? "max-w-sm text-base" : "text-sm"
                      )}
                    >
                      {subtitle}
                    </p>
                  </div>
                  <div className="group/icon relative">
                    <div
                      className={cn(
                        "absolute inset-[-8px] rounded-lg transition-opacity duration-300",
                        "bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent"
                      )}
                    />
                    <Repeat2 className="relative z-10 h-4 w-4 text-orange-500 transition-transform duration-300 group-hover/icon:-rotate-12 group-hover/icon:scale-110" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        <div
          className={cn(
            "absolute inset-0 h-full w-full",
            "[backface-visibility:hidden] [transform:rotateY(180deg)]",
            "overflow-hidden rounded-2xl",
            isCustom
              ? "transition-all duration-700"
              : "rounded-2xl p-6 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-900 dark:to-black border border-zinc-200 dark:border-zinc-800 shadow-xs dark:shadow-lg flex flex-col transition-all duration-700 group-hover:shadow-lg dark:group-hover:shadow-xl",
            !isCustom && (isFlipped ? "opacity-100" : "opacity-0"),
            backClassName
          )}
        >
          {back ?? (
            <div
              className={cn(
                "flex h-full",
                isBusiness ? "flex-row gap-6" : "flex-col"
              )}
            >
              <div
                className={cn(
                  "flex-1",
                  isBusiness ? "space-y-4" : "space-y-6"
                )}
              >
                <div className="space-y-2">
                  <h3
                    className={cn(
                      "font-semibold text-zinc-900 leading-snug tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] dark:text-white",
                      isBusiness ? "text-2xl" : "text-lg"
                    )}
                  >
                    {title}
                  </h3>
                  <p
                    className={cn(
                      "line-clamp-2 text-zinc-600 tracking-tight transition-all duration-500 ease-out-expo group-hover:translate-y-[-2px] dark:text-zinc-400",
                      isBusiness ? "max-w-sm text-base" : "text-sm"
                    )}
                  >
                    {description}
                  </p>
                </div>

                <div className={cn(isBusiness ? "grid grid-cols-2 gap-2" : "space-y-2")}>
                  {features.map((feature, index) => (
                    <div
                      className="flex items-center gap-2 text-sm text-zinc-700 transition-all duration-500 dark:text-zinc-300"
                      key={feature}
                      style={{
                        transform: isFlipped
                          ? "translateX(0)"
                          : "translateX(-10px)",
                        opacity: isFlipped ? 1 : 0,
                        transitionDelay: `${index * 100 + 200}ms`,
                      }}
                    >
                      <ArrowRight className="h-3 w-3 text-orange-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className={cn(
                  "border-zinc-200 dark:border-zinc-800",
                  isBusiness
                    ? "flex w-44 items-end border-l pl-5"
                    : "mt-6 border-t pt-6"
                )}
              >
                {actionHref ? (
                  <Link
                    href={actionHref}
                    className={cn(
                      "group/start relative",
                      "flex items-center justify-between",
                      "-m-3 rounded-xl p-3",
                      "transition-all duration-300",
                      "bg-gradient-to-r from-zinc-100 via-zinc-100 to-zinc-100",
                      "dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800",
                      "hover:from-0% hover:from-orange-500/10 hover:via-100% hover:via-orange-500/5 hover:to-100% hover:to-transparent",
                      "dark:hover:from-0% dark:hover:from-orange-500/20 dark:hover:via-100% dark:hover:via-orange-500/10 dark:hover:to-100% dark:hover:to-transparent",
                      "hover:scale-[1.02] hover:cursor-pointer",
                      isBusiness && "w-full"
                    )}
                    onClick={(event) => event.stopPropagation()}
                  >
                    <span className="font-medium text-sm text-zinc-900 transition-colors duration-300 group-hover/start:text-orange-600 dark:text-white dark:group-hover/start:text-orange-400">
                      {actionLabel}
                    </span>
                    <div className="group/icon relative">
                      <div
                        className={cn(
                          "absolute inset-[-6px] rounded-lg transition-all duration-300",
                          "bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent",
                          "scale-90 opacity-0 group-hover/start:scale-100 group-hover/start:opacity-100"
                        )}
                      />
                      <ArrowRight className="relative z-10 h-4 w-4 text-orange-500 transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110" />
                    </div>
                  </Link>
                ) : (
                  <div
                  className={cn(
                    "group/start relative",
                    "flex items-center justify-between",
                    "-m-3 rounded-xl p-3",
                    isBusiness && "w-full",
                    "transition-all duration-300",
                    "bg-gradient-to-r from-zinc-100 via-zinc-100 to-zinc-100",
                    "dark:from-zinc-800 dark:via-zinc-800 dark:to-zinc-800",
                    "hover:from-0% hover:from-orange-500/10 hover:via-100% hover:via-orange-500/5 hover:to-100% hover:to-transparent",
                    "dark:hover:from-0% dark:hover:from-orange-500/20 dark:hover:via-100% dark:hover:via-orange-500/10 dark:hover:to-100% dark:hover:to-transparent",
                    "hover:scale-[1.02] hover:cursor-pointer"
                  )}
                >
                  <span className="font-medium text-sm text-zinc-900 transition-colors duration-300 group-hover/start:text-orange-600 dark:text-white dark:group-hover/start:text-orange-400">
                    {actionLabel}
                  </span>
                  <div className="group/icon relative">
                    <div
                      className={cn(
                        "absolute inset-[-6px] rounded-lg transition-all duration-300",
                        "bg-gradient-to-br from-orange-500/20 via-orange-500/10 to-transparent",
                        "scale-90 opacity-0 group-hover/start:scale-100 group-hover/start:opacity-100"
                      )}
                    />
                    <ArrowRight className="relative z-10 h-4 w-4 text-orange-500 transition-all duration-300 group-hover/start:translate-x-0.5 group-hover/start:scale-110" />
                  </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
                @keyframes scale {
                    0% {
                        transform: scale(2);
                        opacity: 0;
                        box-shadow: 0px 0px 50px rgba(255, 165, 0, 0.5);
                    }
                    50% {
                        transform: translate(0px, -5px) scale(1);
                        opacity: 1;
                        box-shadow: 0px 8px 20px rgba(255, 165, 0, 0.5);
                    }
                    100% {
                        transform: translate(0px, 5px) scale(0.1);
                        opacity: 0;
                        box-shadow: 0px 10px 20px rgba(255, 165, 0, 0);
                    }
                }
            `}</style>
    </div>
  );
}

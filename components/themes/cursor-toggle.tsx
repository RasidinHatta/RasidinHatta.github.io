"use client";

import { MousePointer2 } from "lucide-react";
import { useEffects } from "@/components/providers/effects-provider";

export function CursorToggle() {
  const { isCursorEnabled, toggleCursor } = useEffects();

  return (
    <button
      onClick={toggleCursor}
      className="cursor-target relative rounded-full p-2 bg-transparent transition-colors hover:bg-white/10 dark:hover:bg-white/5"
      aria-label="Toggle cursor"
    >
      <MousePointer2
        className={`h-5 w-5 transition-all ${
          isCursorEnabled
            ? "text-blue-500 fill-blue-500"
            : "text-muted-foreground opacity-50"
        }`}
      />
    </button>
  );
}

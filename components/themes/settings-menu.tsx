"use client";

import * as React from "react";
import {
  Moon,
  Sun,
  Settings,
  MousePointer2,
  Check,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useEffects } from "@/components/providers/effects-provider";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SettingsMenu() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const {
    isCursorEnabled,
    toggleCursor,
  } = useEffects();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="group cursor-target rounded-full bg-transparent hover:bg-white/10 dark:hover:bg-white/5"
        >
          <Settings className="h-5 w-5 transition-transform duration-300 group-hover:rotate-180" />
          <span className="sr-only">Open settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-target"
          onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        >
          <div className="flex items-center w-full justify-between">
            <span className="flex items-center gap-2">
              {resolvedTheme === "dark" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
              Theme
            </span>
            <span className="text-xs text-muted-foreground capitalize">
              {theme}
            </span>
          </div>
        </DropdownMenuItem>

        <DropdownMenuSeparator />
        <DropdownMenuLabel>Effects</DropdownMenuLabel>

        <DropdownMenuItem className="cursor-target" onClick={toggleCursor}>
          <div className="flex items-center w-full justify-between gap-4">
            <span className="flex items-center gap-2">
              <MousePointer2
                className={`h-4 w-4 ${
                  isCursorEnabled
                    ? "text-blue-500 fill-blue-500"
                    : "text-muted-foreground"
                }`}
              />
              Cursor
            </span>
            {isCursorEnabled && <Check className="h-4 w-4" />}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

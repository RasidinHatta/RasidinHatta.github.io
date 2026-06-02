"use client";

import React, { createContext, useContext, useState } from "react";
import TargetCursor from "../react-bits/TargetCursor";

interface EffectsContextType {
  isCursorEnabled: boolean;
  toggleCursor: () => void;
}

const EffectsContext = createContext<EffectsContextType | undefined>(undefined);

export function EffectsProvider({ children }: { children: React.ReactNode }) {
  const [isCursorEnabled, setIsCursorEnabled] = useState(false);

  const toggleCursor = () => setIsCursorEnabled((prev) => !prev);

  return (
    <EffectsContext.Provider
      value={{
        isCursorEnabled,
        toggleCursor,
      }}
    >
      {isCursorEnabled && <TargetCursor />}
      {children}
    </EffectsContext.Provider>
  );
}

export const useEffects = () => {
  const context = useContext(EffectsContext);
  if (context === undefined) {
    throw new Error("useEffects must be used within an EffectsProvider");
  }
  return context;
};

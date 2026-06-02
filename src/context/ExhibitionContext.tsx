"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ExhibitionContextType {
  isQuizPassed: boolean;
  setQuizPassed: (passed: boolean) => void;
}

const ExhibitionContext = createContext<ExhibitionContextType | undefined>(undefined);

export function ExhibitionProvider({ children }: { children: ReactNode }) {
  const [isQuizPassed, setIsQuizPassed] = useState<boolean>(false);

  return (
    <ExhibitionContext.Provider value={{ isQuizPassed, setQuizPassed: setIsQuizPassed }}>
      {children}
    </ExhibitionContext.Provider>
  );
};

export const useExhibition = () => {
  const context = useContext(ExhibitionContext);
  if (context === undefined) {
    throw new Error("useExhibition must be used within an ExhibitionProvider");
  }
  return context;
};

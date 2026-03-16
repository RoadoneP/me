"use client";

import { throttle } from "lodash";
import { useEffect, useRef, useState } from "react";

export const useLayoutScroll = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const sectionIdx = sectionRef.current.findIndex(ref => {
        if (!ref) return false;
        const rect = ref.getBoundingClientRect();
        return (rect.top + rect.bottom) / 2 > 56;
      });
      if (sectionIdx !== -1) {
        setCurrentSection(sectionIdx);
      }
    }, 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionHandler = (idx: number) => {
    const target = sectionRef.current[idx];

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return {
    sectionRef,
    currentSection,
    sectionHandler,
  };
};

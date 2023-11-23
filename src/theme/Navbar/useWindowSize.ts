import { useState, useEffect } from "react";

const DesktopThresholdWidth = 1364;

const windowSizes = {
  desktop: "desktop",
  mobile: "mobile",
  pad: "pad",
  ssr: "ssr",
} as const;

function getWindowSize() {
  if (typeof window === "undefined") {
    return windowSizes.ssr;
  }

  return window.innerWidth > DesktopThresholdWidth
    ? windowSizes.desktop
    : windowSizes.pad;
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  useEffect(() => {
    setWindowSize(getWindowSize());
    window.addEventListener("resize", () => {
      setWindowSize(getWindowSize());
    });
  }, []);

  return [windowSize, setWindowSize];
}

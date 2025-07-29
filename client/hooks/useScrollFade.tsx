import { useState, useEffect } from "react";

export const useScrollFade = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll position
  // Starts fading at 50px, fully black by 200px
  const getBackgroundOpacity = () => {
    if (scrollY <= 50) return 0.8;
    if (scrollY >= 200) return 1;
    return 0.8 + ((scrollY - 50) / 150) * 0.2;
  };

  // Get background style based on scroll position
  const getNavStyle = () => {
    const opacity = getBackgroundOpacity();

    if (scrollY <= 50) {
      // Initial state - semi-transparent background with blur
      return {
        backgroundColor: `hsl(var(--background) / 0.8)`,
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid hsl(var(--border) / 0.5)",
      };
    } else {
      // Scrolled state - fade to black
      return {
        backgroundColor: `rgba(0, 0, 0, ${opacity})`,
        backdropFilter: scrollY > 100 ? "blur(12px)" : "blur(8px)",
        borderBottom: `1px solid rgba(255, 255, 255, ${Math.min(opacity * 0.2, 0.2)})`,
      };
    }
  };

  // Get text color styles based on scroll position
  const getTextColor = () => {
    if (scrollY <= 50) {
      // Initial state - default colors
      return "text-foreground/80 hover:text-foreground";
    } else {
      // Scrolled state - white text
      return "text-white/80 hover:text-white";
    }
  };

  return {
    scrollY,
    isScrolled,
    navStyle: getNavStyle(),
    textColor: getTextColor(),
  };
};

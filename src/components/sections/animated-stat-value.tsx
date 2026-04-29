"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedStatValueProps = {
  mode?: "down" | "up";
  prefix?: string;
  suffix?: string;
  target: number;
};

export function AnimatedStatValue({
  mode = "up",
  prefix = "",
  suffix = "",
  target,
}: AnimatedStatValueProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [displayValue, setDisplayValue] = useState(mode === "down" ? new Date().getFullYear() : 0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const startValue = mode === "down" ? new Date().getFullYear() : 0;
    let hasAnimated = false;
    let frameId = 0;

    const animateValue = () => {
      const startedAt = performance.now();
      const duration = 1400;

      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / duration, 1);
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const nextValue =
          mode === "down"
            ? Math.round(startValue - (startValue - target) * easedProgress)
            : Math.round(target * easedProgress);

        setDisplayValue(nextValue);

        if (progress < 1) {
          frameId = window.requestAnimationFrame(tick);
        }
      };

      frameId = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated) return;

        hasAnimated = true;
        animateValue();
        observer.unobserve(element);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frameId) {
        window.cancelAnimationFrame(frameId);
      }
    };
  }, [mode, target]);

  return (
    <p
      ref={ref}
      className="[font-family:var(--font-heading)] text-4xl font-semibold tracking-tight text-[color:var(--color-primary)]"
    >
      {prefix}
      {displayValue}
      {suffix}
    </p>
  );
}

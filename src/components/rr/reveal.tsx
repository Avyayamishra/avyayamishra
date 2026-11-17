"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EASE: [number, number, number, number] = [0.19, 1, 0.22, 1];

/* Fade-and-rise reveal for editorial blocks */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 36,
  duration = 1.1,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: reduce ? 0.2 : duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/* Cinematic clip-path image reveal — the curtain lifts, the frame settles */
export function ImageReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={cn("relative overflow-hidden", className)}
      initial={{
        clipPath: reduce ? "inset(0% 0% 0% 0%)" : "inset(12% 9% 12% 9%)",
        opacity: 0.4,
      }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      transition={{ duration: reduce ? 0.2 : 1.5, delay, ease: EASE }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ scale: reduce ? 1 : 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
        transition={{ duration: reduce ? 0.2 : 2, delay, ease: EASE }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

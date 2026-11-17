"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./reveal";
import { ArrowRight } from "lucide-react";

function HeroLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden pb-[0.09em] -mb-[0.09em]">
      <motion.span
        className="block will-change-transform"
        initial={{ y: reduce ? 0 : "112%" }}
        animate={{ y: 0 }}
        transition={{ duration: reduce ? 0.3 : 1.4, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex h-svh min-h-[640px] flex-col overflow-hidden"
      aria-label="Rolls-Royce — Inspiration is the beginning"
    >
      {/* Cinematic photography — slow settle from above */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: reduce ? 1 : 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: reduce ? 0.3 : 3, ease: EASE }}
      >
        <Image
          src="/images/hero-ghost-blackbadge.jpg"
          alt="Rolls-Royce Black Badge emerging from darkness, headlamps glowing in a dark industrial hall"
          fill
          priority
          sizes="100vw"
          className="img-tone object-cover object-center"
        />
      </motion.div>

      {/* Atmospheric grading */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/25 to-obsidian/45"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-obsidian/80 via-obsidian/20 to-transparent"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col justify-end px-6 pb-32 lg:px-12 lg:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: EASE }}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-champagne/80" aria-hidden="true" />
          <span className="text-[10px] font-light uppercase tracking-[0.5em] text-ivory/70">
            Rolls-Royce Motor Cars
          </span>
        </motion.div>

        <h1 className="max-w-5xl font-display text-[15vw] font-light leading-[0.98] text-ivory sm:text-7xl lg:text-8xl xl:text-[7.75rem]">
          <HeroLine delay={0.45}>Inspiration is</HeroLine>
          <HeroLine delay={0.62}>
            the <em className="font-light italic text-champagne">beginning.</em>
          </HeroLine>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.35, ease: EASE }}
          className="mt-8 max-w-md text-sm font-light leading-[1.9] tracking-wide text-ivory/65 lg:text-base"
        >
          A world where extraordinary becomes reality.
        </motion.p>

        <motion.a
          href="#collection"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 1.6, ease: EASE }}
          className="group mt-12 inline-flex w-fit items-center gap-5 text-[11px] font-light uppercase tracking-[0.4em] text-ivory"
        >
          <span className="relative pb-2">
            <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-champagne transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-x-100" />
            Discover the Collection
          </span>
          <ArrowRight
            className="h-4 w-4 text-champagne transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2"
            strokeWidth={1}
            aria-hidden="true"
          />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-4 sm:flex"
        aria-hidden="true"
      >
        <span className="text-[9px] font-light uppercase tracking-[0.45em] text-ivory/45">
          Scroll
        </span>
        <span className="relative h-14 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute left-0 top-0 h-5 w-px bg-champagne"
            animate={{ y: [-20, 60] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeIn",
              repeatDelay: 0.4,
            }}
          />
        </span>
      </motion.div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { CtaButton } from "./cta";

export function Finale() {
  return (
    <section
      className="relative flex h-[88vh] min-h-[560px] items-center justify-center overflow-hidden"
      aria-label="The world awaits"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/finale-waterfront.jpg"
          alt=""
          fill
          sizes="100vw"
          className="img-tone object-cover object-center"
        />
        <div className="absolute inset-0 bg-obsidian/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian" />
      </div>

      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-champagne/70" aria-hidden="true" />
            <span className="text-[10px] font-light uppercase tracking-[0.5em] text-ivory/70">
              Rolls-Royce Motor Cars
            </span>
            <span className="h-px w-10 bg-champagne/70" aria-hidden="true" />
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <h2 className="mt-10 font-display text-6xl font-light leading-[1.02] text-ivory sm:text-7xl lg:text-8xl">
            The world{" "}
            <em className="font-light italic text-champagne">awaits.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.24}>
          <p className="mt-8 max-w-md text-sm font-light leading-[1.9] text-ivory/60">
            Begin a conversation with our team, and take the first step
            towards a motor car that exists only for you.
          </p>
        </Reveal>
        <Reveal delay={0.36}>
          <div className="mt-12">
            <CtaButton href="#enquire">
              Enter the World of Rolls-Royce
            </CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { Reveal } from "./reveal";
import { SectionLabel, CtaButton } from "./cta";

export function BlackBadge() {
  return (
    <section
      id="black-badge"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
      aria-label="Black Badge — the bold side of luxury"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/blackbadge-night.jpg"
          alt=""
          fill
          sizes="100vw"
          className="img-tone object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-obsidian/60 to-obsidian/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-obsidian/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 py-28 lg:px-12 lg:py-36">
        <div className="max-w-xl">
          <Reveal>
            <SectionLabel>Black Badge</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-5xl font-light leading-[1.03] text-ivory sm:text-6xl lg:text-7xl">
              The <em className="font-light italic text-champagne">bold</em>{" "}
              side of luxury.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-9 text-sm font-light leading-[2] text-ivory/65 lg:text-[15px]">
              For those who find darkness more honest than light. Black Badge
              is Rolls-Royce, rearranged — darker in spirit, bolder in stance,
              engineered for those who write their own rules and keep them.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-10 flex items-center gap-4 text-[10px] font-light uppercase tracking-[0.35em] text-ivory/50">
              <span
                className="font-display text-lg italic leading-none text-champagne"
                aria-hidden="true"
              >
                ∞
              </span>
              Phantom · Ghost · Cullinan · Spectre
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-12">
              <CtaButton href="#enquire" model="Black Badge">
                Discover Black Badge
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

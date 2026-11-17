"use client";

import Image from "next/image";
import { ImageReveal, Reveal } from "./reveal";
import { SectionLabel, CtaButton } from "./cta";

const CAPABILITIES = [
  {
    index: "01",
    title: "Exterior Finish",
    text: "Over 44,000 hues — or one that exists nowhere else, drawn from a memory, a place, a favourite evening light.",
  },
  {
    index: "02",
    title: "Interior Materials",
    text: "Rare veneers, hides and metals, selected and matched for a single motor car alone.",
  },
  {
    index: "03",
    title: "Embroidery & Detail",
    text: "Needle-painted scenes, monograms and motifs — stitched into leather by the hands of artisans.",
  },
  {
    index: "04",
    title: "Starlight Headliner",
    text: "A personal constellation, hand-woven into the roof above you, constellation by constellation.",
  },
];

export function Bespoke() {
  return (
    <section
      id="bespoke"
      className="relative border-y border-white/[0.06] bg-coal py-24 lg:py-36"
      aria-label="Bespoke — your vision, our craft"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <Reveal>
              <SectionLabel>Bespoke</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-5xl font-light leading-[1.02] text-ivory sm:text-6xl lg:text-7xl">
                Your vision,{" "}
                <em className="font-light italic text-champagne">
                  our craft.
                </em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4">
            <p className="text-sm font-light leading-[2] text-ivory/55">
              Every Rolls-Royce that leaves Goodwood is already rare. Through
              Bespoke, it can become singular — a motor car composed entirely
              around one imagination. Yours.
            </p>
          </Reveal>
        </div>

        {/* Atelier composition */}
        <div className="mt-16 grid gap-6 lg:mt-24 lg:grid-cols-12">
          <ImageReveal className="aspect-[16/10] border border-white/[0.08] lg:col-span-8">
            <Image
              src="/images/bespoke-doors.jpg"
              alt="Rolls-Royce Black Badge Ghost with coach doors open, revealing a bespoke interior"
              fill
              sizes="(min-width: 1024px) 66vw, 100vw"
              className="object-cover object-center brightness-[1.06] contrast-[1.05]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-obsidian/45 via-transparent to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="h-px w-6 bg-champagne/70" aria-hidden="true" />
              <span className="text-[9px] font-light uppercase tracking-[0.32em] text-ivory/70">
                Coach Doors — A Bespoke Interior
              </span>
            </div>
          </ImageReveal>

          <div className="flex flex-col justify-between gap-6 lg:col-span-4">
            <ImageReveal delay={0.15} className="aspect-[4/3]">
              <Image
                src="/images/bespoke-embroidery.jpg"
                alt="Hand-embroidered pomegranate artwork on dark leather, created by Rolls-Royce artisans"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="img-tone object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-obsidian/25 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-5 left-5 flex items-center gap-3">
                <span className="h-px w-6 bg-champagne/70" aria-hidden="true" />
                <span className="text-[9px] font-light uppercase tracking-[0.32em] text-ivory">
                  Needle-Painting — By Hand
                </span>
              </div>
            </ImageReveal>
            <Reveal delay={0.25} className="border-l border-champagne/40 pl-6">
              <p className="font-display text-2xl font-light italic leading-snug text-ivory/85">
                “Nothing is impossible.”
              </p>
              <p className="mt-4 text-[9px] font-light uppercase tracking-[0.35em] text-ivory/45">
                The Bespoke Collective — Goodwood
              </p>
            </Reveal>
          </div>
        </div>

        {/* Capabilities */}
        <div
          id="bespoke-capabilities"
          className="mt-20 grid gap-12 lg:mt-28 lg:grid-cols-12"
        >
          <div className="lg:col-span-4">
            <ImageReveal className="aspect-[3/4] max-w-[400px]">
              <Image
                src="/images/bespoke-leather.jpg"
                alt="Quilted leather with tan stitching and polished chrome, close detail"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="img-tone object-cover object-center"
              />
            </ImageReveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-[400px] text-[9px] font-light uppercase leading-relaxed tracking-[0.3em] text-ivory/40">
                Hand-stitched hide — one of some two hundred individual pieces
                in a single interior
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <ol>
                {CAPABILITIES.map((cap) => (
                  <li
                    key={cap.index}
                    className="group grid grid-cols-[3.5rem_1fr] gap-4 border-b border-white/[0.08] py-7 transition-[padding] duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] first:border-t hover:pl-4 sm:grid-cols-[4.5rem_1fr]"
                  >
                    <span className="font-display text-lg font-light italic text-champagne/80 transition-colors duration-500">
                      {cap.index}
                    </span>
                    <div>
                      <h3 className="text-[12px] font-normal uppercase tracking-[0.32em] text-ivory">
                        {cap.title}
                      </h3>
                      <p className="mt-3 max-w-xl text-sm font-light leading-[1.95] text-ivory/55">
                        {cap.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-14">
                <CtaButton href="#enquire" model="Bespoke Commission">
                  Explore Bespoke
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

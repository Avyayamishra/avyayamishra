"use client";

import Image from "next/image";
import { ImageReveal, Reveal } from "./reveal";
import { SectionLabel } from "./cta";

const TIMELINE = [
  { year: "1904", label: "The first Rolls-Royce — the 10 hp" },
  { year: "1907", label: "Silver Ghost — the best car in the world" },
  { year: "1911", label: "The Spirit of Ecstasy takes flight" },
  { year: "2003", label: "The Home of Rolls-Royce opens at Goodwood" },
  { year: "2018", label: "Cullinan — luxury without limits" },
  { year: "2023", label: "Spectre — the all-electric era begins" },
];

export function Heritage() {
  return (
    <section
      id="heritage"
      className="relative py-24 lg:py-36"
      aria-label="Our story — crafted beyond compare"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Our Story</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
                Crafted{" "}
                <em className="font-light italic text-champagne">
                  beyond compare.
                </em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm font-light leading-[2] text-ivory/55">
              An uncompromising engineer. A pioneering motorist. A standard
              set in 1904 that has never once been lowered.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-12">
          {/* Editorial text */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal>
              <p className="text-sm font-light leading-[2] text-ivory/60 lg:text-[15px]">
                In 1904, Henry Royce — a perfectionist to his core — met
                Charles Rolls, a dealer with a taste for the future. Royce's
                instruction to his engineers became the marque's creed: take
                the best that exists, and make it better. When it does not
                exist, design it.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 text-sm font-light leading-[2] text-ivory/60 lg:text-[15px]">
                Every Rolls-Royce is still built by hand at Goodwood, West
                Sussex. Veneers are matched like fingerprints. Leather is
                read by eye and hand. Each coachline is drawn in one
                unbroken stroke — three hours, no second attempt.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-10 border-l border-champagne/40 pl-6 font-display text-2xl font-light italic leading-snug text-ivory/85">
                “Strive for perfection in everything you do.”
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="mt-4 pl-6 text-[9px] font-light uppercase tracking-[0.35em] text-ivory/45">
                Sir Henry Royce — Co-founder
              </p>
            </Reveal>
          </div>

          {/* Photography composition */}
          <div className="relative pb-12 lg:col-span-6 lg:col-start-7 lg:pb-0">
            <ImageReveal className="ml-auto aspect-[4/3] w-full lg:w-[92%]">
              <Image
                src="/images/heritage-spirit.jpg"
                alt="The Spirit of Ecstasy hood ornament, sharp against a soft horizon"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="img-tone object-cover object-center"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </ImageReveal>
            <div className="absolute -bottom-0 left-0 w-[52%] border-[10px] border-obsidian lg:-bottom-12 lg:w-[46%]">
              <ImageReveal delay={0.2} className="aspect-[4/3]">
                <Image
                  src="/images/heritage-veneer.jpg"
                  alt="An artisan assembling hand-crafted wood veneer panels"
                  fill
                  sizes="(min-width: 1024px) 30vw, 60vw"
                  className="img-tone object-cover object-center"
                />
              </ImageReveal>
            </div>
            <Reveal
              delay={0.3}
              className="absolute -bottom-14 right-0 hidden lg:block"
            >
              <p className="text-[9px] font-light uppercase tracking-[0.3em] text-ivory/40">
                Veneer, matched by hand — Goodwood
              </p>
            </Reveal>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-20 lg:mt-40">
          <Reveal>
            <div className="grid grid-cols-2 gap-x-6 gap-y-12 border-t border-white/10 pt-10 md:grid-cols-3 lg:grid-cols-6">
              {TIMELINE.map((item, i) => (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div className="relative">
                    <span
                      className="absolute -left-1 -top-[45px] h-[7px] w-[7px] rounded-full bg-champagne"
                      aria-hidden="true"
                    />
                    <p className="font-display text-3xl font-light text-ivory">
                      {item.year}
                    </p>
                    <p className="mt-3 max-w-[180px] text-[10px] font-light uppercase leading-[1.8] tracking-[0.22em] text-ivory/45">
                      {item.label}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

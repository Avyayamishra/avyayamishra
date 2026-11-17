"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "./reveal";
import { SectionLabel } from "./cta";

const FACTS = [
  { value: "1904", label: "The Marque is Founded" },
  { value: "Goodwood", label: "Home of Rolls-Royce" },
  { value: "By Hand", label: "Every Motor Car, Crafted" },
];

export function BrandIntro() {
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);

  return (
    <section
      id="philosophy"
      className="relative py-24 lg:py-40"
      aria-label="An expression of the extraordinary"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 px-6 lg:grid-cols-12 lg:gap-10 lg:px-12">
        {/* Editorial column */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <Reveal>
            <SectionLabel>The Marque</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-4xl font-light leading-[1.08] text-ivory sm:text-5xl lg:text-[3.6rem]">
              An expression of the{" "}
              <em className="font-light italic text-champagne">
                extraordinary.
              </em>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 text-sm font-light leading-[2] text-ivory/60 lg:text-[15px]">
              Since 1904, Rolls-Royce has existed for one purpose — to create
              motor cars without equal. Each is composed, not manufactured:
              shaped by engineers, designers and artisans at the Home of
              Rolls-Royce in Goodwood, West Sussex, where perfection is not an
              ideal but a daily standard.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-6 text-sm font-light leading-[2] text-ivory/60 lg:text-[15px]">
              Craftsmanship, individuality and restless engineering meet in
              every line, stitch and silence — so that no two motor cars, and
              no two owners, are ever alike.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <dl className="mt-14 grid grid-cols-3 divide-x divide-white/[0.08] border-y border-white/[0.08]">
              {FACTS.map((fact) => (
                <div key={fact.value} className="flex flex-col gap-2 px-4 py-6 first:pl-0">
                  <dt className="font-display text-xl font-light text-ivory lg:text-2xl">
                    {fact.value}
                  </dt>
                  <dd className="text-[9px] font-light uppercase leading-relaxed tracking-[0.28em] text-ivory/45">
                    {fact.label}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Portrait photography with parallax */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15} className="h-full">
            <div
              ref={imageRef}
              className="group relative aspect-[3/4] overflow-hidden lg:h-full lg:min-h-[640px]"
            >
              <motion.div style={{ y }} className="absolute -inset-y-10 inset-x-0">
                <Image
                  src="/images/intro-phantom-night.jpg"
                  alt="Rolls-Royce Phantom gliding through the city at night"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="img-tone object-cover object-center"
                />
              </motion.div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-obsidian/50 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <span className="font-display text-sm italic text-champagne/90">
                  01
                </span>
                <span className="text-[9px] font-light uppercase tracking-[0.35em] text-ivory/60">
                  Phantom — After Dark
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { ImageReveal, Reveal } from "./reveal";
import { SectionLabel, DiscoverLink } from "./cta";
import { cn } from "@/lib/utils";

const CARS = [
  {
    id: "phantom",
    index: "01",
    name: "Phantom",
    tagline: "The eternal icon",
    description:
      "The eighth generation of the world's most recognisable motor car. Timeless proportions, a cabin of near-total silence, and craftsmanship without compromise — Phantom remains the definitive Rolls-Royce.",
    tags: ["Timeless", "Grand", "Serene"],
    image: "/images/phantom-night-door.jpg",
    alt: "Rolls-Royce Phantom at night with its coach door open, revealing the Starlight Headliner",
    caption: "Phantom Extended — Starlight Headliner",
  },
  {
    id: "ghost",
    index: "02",
    name: "Ghost",
    tagline: "Post-Opulence",
    description:
      "The purest expression of the Philosophy of Perfection. Ghost distils luxury to the essential — a minimalist silhouette, immaculate materials and presence that needs nothing announced.",
    tags: ["Minimal", "Contemporary", "Refined"],
    image: "/images/ghost-highlands.jpg",
    alt: "Rolls-Royce Ghost travelling effortlessly along a Highland road",
    caption: "Ghost — The Highlands",
  },
  {
    id: "cullinan",
    index: "03",
    name: "Cullinan",
    tagline: "Effortless, everywhere",
    description:
      "The Rolls-Royce of SUVs. Commanding presence, composed capability and a cabin that holds the world at a whisper — wherever the road ends, Cullinan continues.",
    tags: ["Commanding", "Capable", "Versatile"],
    image: "/images/cullinan-twilight.jpg",
    alt: "Rolls-Royce Cullinan above a city at twilight, headlamps illuminated",
    caption: "Cullinan — Twilight",
  },
  {
    id: "spectre",
    index: "04",
    name: "Spectre",
    tagline: "A new era of silence",
    description:
      "The first all-electric Rolls-Royce. A silhouette drawn by the wind, whisper-quiet by nature and bold by conviction — Spectre opens the next chapter of the marque's extraordinary history.",
    tags: ["All-Electric", "Futuristic", "Silent"],
    image: "/images/spectre-dusk.jpg",
    alt: "Rolls-Royce Spectre beside still water at dusk",
    caption: "Spectre — The Electric Era",
  },
];

export function MotorCars() {
  return (
    <section
      id="collection"
      className="relative py-24 lg:py-36"
      aria-label="The Rolls-Royce collection"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 grid gap-10 lg:mb-24 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>The Collection</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-8 font-display text-4xl font-light leading-[1.05] text-ivory sm:text-5xl lg:text-6xl">
                Discover the{" "}
                <em className="font-light italic text-champagne">
                  motor cars.
                </em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2} className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm font-light leading-[2] text-ivory/55">
              Four expressions of one ideal. Each hand-built at Goodwood, each
              as individual as the person for whom it is made.
            </p>
          </Reveal>
        </div>

        {/* Editorial model layouts */}
        {CARS.map((car, i) => (
          <article
            key={car.id}
            id={car.id}
            className="grid items-center gap-10 border-t border-white/[0.07] py-16 lg:grid-cols-12 lg:gap-16 lg:py-24"
          >
            <div
              className={cn(
                "lg:col-span-7",
                i % 2 === 1 && "lg:order-2"
              )}
            >
              <ImageReveal className="group aspect-[16/10]">
                <Image
                  src={car.image}
                  alt={car.alt}
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="img-tone object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:scale-[1.045]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-obsidian/35 via-transparent to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-5 left-5 flex items-center gap-3">
                  <span className="h-px w-6 bg-champagne/70" aria-hidden="true" />
                  <span className="text-[9px] font-light uppercase tracking-[0.32em] text-ivory/70">
                    {car.caption}
                  </span>
                </div>
              </ImageReveal>
            </div>

            <div
              className={cn(
                "lg:col-span-5",
                i % 2 === 1 && "lg:order-1 lg:pr-6"
              )}
            >
              <Reveal>
                <span className="font-display text-lg font-light italic text-champagne/90">
                  {car.index}
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h3 className="mt-4 font-display text-4xl font-light leading-none text-ivory lg:text-5xl">
                  {car.name}
                </h3>
              </Reveal>
              <Reveal delay={0.14}>
                <p className="mt-3 text-[10px] font-light uppercase tracking-[0.4em] text-ivory/45">
                  {car.tagline}
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-7 text-sm font-light leading-[2] text-ivory/60 lg:text-[15px]">
                  {car.description}
                </p>
              </Reveal>
              <Reveal delay={0.26}>
                <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2">
                  {car.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-[10px] font-light uppercase tracking-[0.3em] text-ivory/40"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.32}>
                <div className="mt-10">
                  <DiscoverLink model={car.name} />
                </div>
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

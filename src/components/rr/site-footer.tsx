"use client";

import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { RRBadge } from "./rr-badge";

const MOTOR_CAR_LINKS = [
  { label: "Phantom", href: "#phantom" },
  { label: "Ghost", href: "#ghost" },
  { label: "Cullinan", href: "#cullinan" },
  { label: "Spectre", href: "#spectre" },
  { label: "Black Badge", href: "#black-badge" },
];

const COMPANY_LINKS = [
  { label: "Our Story", href: "#heritage" },
  { label: "Bespoke", href: "#bespoke" },
  { label: "Enquire", href: "#enquire" },
  { label: "Contact", href: "#enquire" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "YouTube", href: "#", Icon: Youtube },
  { label: "X", href: "#", Icon: Twitter },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/[0.07] bg-[#050505]">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-5">
              <RRBadge className="h-12 w-auto text-ivory" />
              <span className="flex flex-col leading-none">
                <span className="text-sm font-light tracking-[0.42em] text-ivory">
                  ROLLS-ROYCE
                </span>
                <span className="mt-2 text-[8px] font-light uppercase tracking-[0.55em] text-ivory/50">
                  Motor Cars
                </span>
              </span>
            </div>
            <p className="mt-10 max-w-sm font-display text-xl font-light italic leading-relaxed text-ivory/60">
              “Take the best that exists and make it better. When it does not
              exist, design it.”
            </p>
            <p className="mt-4 text-[9px] font-light uppercase tracking-[0.35em] text-ivory/40">
              Sir Henry Royce — Co-founder
            </p>
          </div>

          {/* Motor cars */}
          <nav className="lg:col-span-2 lg:col-start-7" aria-label="Motor cars">
            <h3 className="text-[10px] font-light uppercase tracking-[0.4em] text-ivory/40">
              Motor Cars
            </h3>
            <ul className="mt-6 space-y-4">
              {MOTOR_CAR_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-ivory/65 transition-colors duration-500 hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav className="lg:col-span-2" aria-label="Company">
            <h3 className="text-[10px] font-light uppercase tracking-[0.4em] text-ivory/40">
              Company
            </h3>
            <ul className="mt-6 space-y-4">
              {COMPANY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-light text-ivory/65 transition-colors duration-500 hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="lg:col-span-2">
            <h3 className="text-[10px] font-light uppercase tracking-[0.4em] text-ivory/40">
              Follow
            </h3>
            <ul className="mt-4 flex gap-2 lg:mt-6 lg:flex-col lg:gap-1">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="flex h-11 w-11 items-center gap-3 text-ivory/50 transition-colors duration-500 hover:text-champagne"
                  >
                    <Icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.25} />
                    <span className="hidden text-sm font-light lg:inline">
                      {label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal bar */}
        <div className="mt-16 flex flex-col gap-5 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] font-light uppercase tracking-[0.25em] text-ivory/35">
            © {new Date().getFullYear()} Rolls-Royce Motor Cars Limited — All
            rights reserved
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="text-[10px] font-light uppercase tracking-[0.25em] text-ivory/35 transition-colors duration-500 hover:text-ivory/70"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-[10px] font-light uppercase tracking-[0.25em] text-ivory/35">
            Goodwood · England · Est. 1904
          </p>
        </div>
      </div>
    </footer>
  );
}

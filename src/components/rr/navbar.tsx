"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RRBadge } from "./rr-badge";
import { EASE } from "./reveal";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Motor Cars", href: "#collection" },
  { label: "Bespoke", href: "#bespoke" },
  { label: "Black Badge", href: "#black-badge" },
  { label: "Our Story", href: "#heritage" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.4, ease: EASE }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-700",
          scrolled
            ? "border-b border-white/[0.07] bg-obsidian/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 lg:px-12">
          {/* Wordmark */}
          <a
            href="#top"
            className="group flex items-center gap-4"
            aria-label="Rolls-Royce Motor Cars — back to top"
          >
            <RRBadge className="h-9 w-auto text-ivory transition-colors duration-500 group-hover:text-champagne" />
            <span className="flex flex-col leading-none">
              <span className="text-[13px] font-light tracking-[0.42em] text-ivory">
                ROLLS-ROYCE
              </span>
              <span className="mt-1.5 text-[8px] font-light uppercase tracking-[0.55em] text-ivory/50">
                Motor Cars
              </span>
            </span>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-10 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-[11px] font-light uppercase tracking-[0.3em] text-ivory/70 transition-colors duration-500 hover:text-ivory"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#enquire"
              className="border border-ivory/25 px-6 py-2.5 text-[11px] font-light uppercase tracking-[0.3em] text-ivory/90 transition-colors duration-700 hover:border-ivory hover:bg-ivory hover:text-obsidian"
            >
              Enquire
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="flex h-11 w-11 flex-col items-end justify-center gap-[7px] lg:hidden"
          >
            <span className="h-px w-7 bg-ivory transition-all duration-500" />
            <span className="h-px w-5 bg-ivory/70 transition-all duration-500" />
          </button>
        </div>
      </motion.header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-obsidian lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
          >
            <div className="flex h-20 items-center justify-between px-6">
              <div className="flex items-center gap-4">
                <RRBadge className="h-9 w-auto text-ivory" />
                <span className="text-[13px] font-light tracking-[0.42em] text-ivory">
                  ROLLS-ROYCE
                </span>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="relative flex h-11 w-11 items-center justify-center"
              >
                <span className="absolute h-px w-7 rotate-45 bg-ivory" />
                <span className="absolute h-px w-7 -rotate-45 bg-ivory" />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col justify-center gap-2 px-8"
              aria-label="Mobile"
            >
              {[...NAV_LINKS, { label: "Enquire", href: "#enquire" }].map(
                (link, i) => (
                  <div key={link.href} className="overflow-hidden">
                    <motion.a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "110%" }}
                      transition={{
                        duration: 0.9,
                        delay: 0.08 + i * 0.07,
                        ease: EASE,
                      }}
                      className="block py-3 font-display text-4xl font-light text-ivory transition-colors duration-500 hover:text-champagne"
                    >
                      {link.label}
                    </motion.a>
                  </div>
                )
              )}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex items-center justify-between border-t border-white/[0.07] px-8 py-6"
            >
              <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/40">
                Goodwood · England
              </span>
              <span className="text-[9px] uppercase tracking-[0.4em] text-ivory/40">
                Est. 1904
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

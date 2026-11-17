"use client";

import { ArrowRight } from "lucide-react";
import { useEnquiryStore } from "@/lib/enquiry-store";
import { cn } from "@/lib/utils";

/* Small tracked champagne label with hairline rule */
export function SectionLabel({
  children,
  className,
  align = "left",
}: {
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-4",
        align === "center" && "justify-center",
        className
      )}
    >
      <span className="h-px w-10 bg-champagne/70" aria-hidden="true" />
      <span className="text-[10px] font-normal uppercase tracking-[0.45em] text-champagne">
        {children}
      </span>
      {align === "center" && (
        <span className="h-px w-10 bg-champagne/70" aria-hidden="true" />
      )}
    </div>
  );
}

/* Bordered couture button — inverts to ivory on hover */
export function CtaButton({
  children,
  href,
  model,
  className,
}: {
  children: React.ReactNode;
  href: string;
  model?: string;
  className?: string;
}) {
  const setModel = useEnquiryStore((s) => s.setModel);
  return (
    <a
      href={href}
      onClick={model ? () => setModel(model) : undefined}
      className={cn(
        "group inline-flex items-center justify-center gap-4 border border-ivory/30 px-9 py-4 text-[11px] uppercase tracking-[0.35em] text-ivory transition-colors duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:border-ivory hover:bg-ivory hover:text-obsidian",
        className
      )}
    >
      <span>{children}</span>
      <ArrowRight
        className="h-3.5 w-3.5 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1.5"
        strokeWidth={1.25}
        aria-hidden="true"
      />
    </a>
  );
}

/* Editorial discover link — hairline grows, arrow travels */
export function DiscoverLink({
  model,
  label = "Discover",
  className,
}: {
  model: string;
  label?: string;
  className?: string;
}) {
  const setModel = useEnquiryStore((s) => s.setModel);
  return (
    <a
      href="#enquire"
      onClick={() => setModel(model)}
      className={cn(
        "group inline-flex items-center gap-4 text-[11px] uppercase tracking-[0.35em] text-ivory/80 transition-colors duration-500 hover:text-ivory",
        className
      )}
    >
      <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-champagne after:transition-transform after:duration-700 after:ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:after:scale-x-100">
        {label}
      </span>
      <ArrowRight
        className="h-3.5 w-3.5 text-champagne transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-2"
        strokeWidth={1.25}
        aria-hidden="true"
      />
    </a>
  );
}

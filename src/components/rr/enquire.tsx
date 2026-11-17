"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal } from "./reveal";
import { SectionLabel } from "./cta";
import { useEnquiryStore } from "@/lib/enquiry-store";

const MODELS = [
  "Phantom",
  "Ghost",
  "Cullinan",
  "Spectre",
  "Black Badge",
  "Bespoke Commission",
];

type Status = "idle" | "sending" | "done" | "error";

export function Enquire() {
  const model = useEnquiryStore((s) => s.model);
  const setModel = useEnquiryStore((s) => s.setModel);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, model, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="enquire"
      className="relative border-t border-white/[0.06] bg-coal py-24 lg:py-32"
      aria-label="Enquire — begin your Rolls-Royce story"
    >
      <div className="mx-auto grid max-w-[1440px] gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-12">
        {/* Invitation */}
        <div className="flex flex-col justify-center lg:col-span-5">
          <Reveal>
            <SectionLabel>Enquire</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-8 font-display text-4xl font-light leading-[1.08] text-ivory sm:text-5xl">
              Begin your{" "}
              <em className="font-light italic text-champagne">
                Rolls-Royce
              </em>{" "}
              story.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-sm font-light leading-[2] text-ivory/60">
              Our specialists will guide you through the collection, the
              Bespoke atelier and every consideration between — privately, and
              at your pace.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <address className="mt-12 border-l border-white/[0.12] pl-6 text-sm font-light not-italic leading-[2.2] text-ivory/50">
              The Home of Rolls-Royce
              <br />
              Goodwood, West Sussex PO18 0PH
              <br />
              United Kingdom
            </address>
          </Reveal>
        </div>

        {/* Form */}
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.15}>
            {status === "done" ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center border border-white/[0.08] px-8 py-16 text-center">
                <span className="font-display text-3xl font-light italic text-champagne">
                  Thank you{name ? `, ${name.split(" ")[0]}` : ""}.
                </span>
                <p className="mt-6 max-w-sm text-sm font-light leading-[2] text-ivory/60">
                  Your enquiry has been received. A Rolls-Royce specialist
                  will be in touch privately regarding the {model}.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setName("");
                    setEmail("");
                    setMessage("");
                  }}
                  className="mt-10 text-[10px] font-light uppercase tracking-[0.35em] text-ivory/60 underline-offset-8 transition-colors duration-500 hover:text-ivory hover:underline"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-9">
                <div>
                  <label
                    htmlFor="enquire-model"
                    className="mb-2 block text-[10px] font-light uppercase tracking-[0.35em] text-ivory/50"
                  >
                    Motor Car of Interest
                  </label>
                  <Select value={model} onValueChange={setModel}>
                    <SelectTrigger
                      id="enquire-model"
                      className="h-auto w-full justify-between rounded-none border-0 border-b border-white/[0.16] bg-transparent px-0 py-3.5 text-sm font-light tracking-wide text-ivory shadow-none transition-colors duration-500 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 dark:bg-transparent dark:hover:bg-transparent dark:focus-visible:border-champagne"
                    >
                      <SelectValue placeholder="Select a motor car" />
                    </SelectTrigger>
                    <SelectContent className="rounded-none border-white/[0.1] bg-[#131313] text-ivory">
                      {MODELS.map((m) => (
                        <SelectItem
                          key={m}
                          value={m}
                          className="rounded-none font-light tracking-wide focus:bg-white/[0.06] focus:text-ivory data-[state=checked]:text-champagne"
                        >
                          {m}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-9 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="enquire-name"
                      className="mb-1 block text-[10px] font-light uppercase tracking-[0.35em] text-ivory/50"
                    >
                      Name
                    </label>
                    <input
                      id="enquire-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="lux-input"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="enquire-email"
                      className="mb-1 block text-[10px] font-light uppercase tracking-[0.35em] text-ivory/50"
                    >
                      Email
                    </label>
                    <input
                      id="enquire-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="lux-input"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquire-message"
                    className="mb-1 block text-[10px] font-light uppercase tracking-[0.35em] text-ivory/50"
                  >
                    Message
                  </label>
                  <textarea
                    id="enquire-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us something of yourself, and of the motor car you imagine…"
                    className="lux-input resize-none"
                  />
                </div>

                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="group inline-flex items-center justify-center gap-4 border border-ivory/30 px-9 py-4 text-[11px] font-light uppercase tracking-[0.35em] text-ivory transition-colors duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] hover:border-ivory hover:bg-ivory hover:text-obsidian disabled:cursor-wait disabled:opacity-60"
                  >
                    {status === "sending" ? "Sending" : "Request a Consultation"}
                    <ArrowRight
                      className="h-3.5 w-3.5 transition-transform duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-x-1.5"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </button>
                  {status === "error" && (
                    <p
                      role="alert"
                      className="text-[11px] font-light tracking-[0.15em] text-champagne"
                    >
                      Forgive us — something went wrong. Please try once more.
                    </p>
                  )}
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

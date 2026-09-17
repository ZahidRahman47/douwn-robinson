"use client";

import { useState } from "react";
import clsx from "clsx";
import { ShieldCheck } from "lucide-react";
import { donate } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

export function Donate() {
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("monthly");
  const [amount, setAmount] = useState<number | null>(donate.amounts[1]);
  const [custom, setCustom] = useState("");

  return (
    <section id="donate" className="relative overflow-hidden bg-navy-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-mesh-navy bg-grain opacity-70" />
      <div className="container-page relative grid gap-14 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <Reveal>
          <Eyebrow>{donate.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-balance text-3xl font-semibold text-cream sm:text-4xl">
            {donate.title}
          </h2>
          <p className="mt-5 max-w-md text-cream/65">{donate.subhead}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl border border-white/10 bg-navy-800/80 p-7 shadow-soft backdrop-blur sm:p-9">
            <div className="grid grid-cols-2 gap-2 rounded-full bg-navy-900 p-1.5">
              {(["one-time", "monthly"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f)}
                  className={clsx(
                    "rounded-full py-2.5 text-sm font-semibold capitalize transition-colors",
                    frequency === f ? "bg-gold-500 text-navy-950" : "text-cream/60 hover:text-cream"
                  )}
                >
                  {f === "one-time" ? "One-time" : "Monthly"}
                </button>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-4 gap-3">
              {donate.amounts.map((val) => (
                <button
                  key={val}
                  onClick={() => {
                    setAmount(val);
                    setCustom("");
                  }}
                  className={clsx(
                    "rounded-xl border py-3 text-sm font-semibold transition-colors",
                    amount === val && !custom
                      ? "border-gold-400 bg-gold-400/15 text-gold-200"
                      : "border-white/10 text-cream/70 hover:border-gold-400/40"
                  )}
                >
                  ${val}
                </button>
              ))}
            </div>

            <div className="mt-3">
              <input
                type="number"
                min={1}
                placeholder="Custom amount"
                value={custom}
                onChange={(e) => {
                  setCustom(e.target.value);
                  setAmount(null);
                }}
                className="w-full rounded-xl border border-white/10 bg-navy-900 px-4 py-3 text-sm text-cream placeholder:text-cream/40 focus:border-gold-400 focus:outline-none"
              />
            </div>

            <button className="mt-6 w-full rounded-full bg-gradient-to-r from-gold-500 to-gold-400 py-3.5 text-sm font-semibold text-navy-950 shadow-[0_8px_24px_-6px_rgba(232,193,88,0.45)] transition-transform hover:-translate-y-0.5">
              Donate {custom ? `$${custom}` : amount ? `$${amount}` : ""}{" "}
              {frequency === "monthly" ? "/ month" : ""}
            </button>

            <p className="mt-4 flex items-center gap-2 text-xs text-cream/45">
              <ShieldCheck size={14} className="text-gold-400" />
              {donate.trust}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

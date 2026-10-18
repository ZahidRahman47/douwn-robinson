"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Scale, Clock, Cpu, FileCheck, Users, Plus } from "lucide-react";
import { issues } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

const iconMap = {
  ScaleIcon: Scale,
  Clock,
  Cpu,
  FileCheck,
  Users,
};

export function Issues() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="issues" className="relative bg-navy-900 py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="max-w-2xl">
          <Eyebrow>What Duvwon Stands For</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
            What I&apos;ll fight for in office
          </h2>
          <p className="mt-4 text-cream/60">
            Five commitments Duvwon is running on — and will be held accountable to.
          </p>
        </Reveal>

        <RevealGroup className="mt-14 divide-y divide-white/10 border-y border-white/10" stagger={0.05}>
          {issues.map((issue, i) => {
            const Icon = iconMap[issue.icon as keyof typeof iconMap] ?? Scale;
            const open = openIndex === i;
            return (
              <RevealItem key={issue.title}>
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="group flex w-full items-center gap-6 py-7 text-left"
                  aria-expanded={open}
                >
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-gold-400/30 bg-gold-400/5 text-gold-300 transition-colors group-hover:bg-gold-400/15">
                    <Icon size={20} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl font-medium text-cream sm:text-2xl">
                      {issue.title}
                    </span>
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-cream/20 text-cream/70"
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-8 pl-[4.5rem] leading-relaxed text-cream/65">
                        {issue.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}

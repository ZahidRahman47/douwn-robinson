"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { hero } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";

const lineVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: { opacity: 1, y: "0%" },
};

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-900 bg-mesh-navy bg-grain pt-16 pb-28 sm:pt-24">
      {/* ambient blobs */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-gold-500/20 blur-[120px] animate-blob" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] rounded-full bg-maroon-500/20 blur-[120px] animate-blob" />

      <div className="container-page relative grid gap-16 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </motion.div>

          <h1 className="mt-6 font-display text-balance text-[2.5rem] font-semibold leading-[1.08] tracking-tight text-cream sm:text-6xl lg:text-[3.75rem]">
            {hero.headlineLines.map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {i === hero.headlineLines.length - 1 ? (
                    <span className="text-gold-300">{line}</span>
                  ) : (
                    line
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-cream/70"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button href={hero.primaryCta.href} variant="primary">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-gold-400/30 via-gold-500/10 to-transparent blur-2xl shadow-goldGlow" />
          <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-white/10 shadow-soft">
            <Image
              src={hero.portrait}
              alt="Dawson Robinson"
              fill
              sizes="(max-width: 640px) 90vw, 420px"
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-white/10 bg-navy-800/90 px-5 py-4 shadow-soft backdrop-blur">
            <p className="font-display text-2xl font-semibold text-gold-300">20+</p>
            <p className="text-xs text-cream/60">Years serving Fulton County</p>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="mt-16 flex justify-center"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-cream/40"
        >
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

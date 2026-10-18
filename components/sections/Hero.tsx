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

// Fades the arch (photo + hairline) into the page instead of dead-ending it on a
// hard horizontal cut. A mask is used rather than a scrim so the section's mesh
// gradient shows through untouched.
const archFade = {
  maskImage: "linear-gradient(to bottom, #000 68%, transparent 98%)",
  WebkitMaskImage: "linear-gradient(to bottom, #000 68%, transparent 98%)",
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex flex-col overflow-hidden bg-navy-900 bg-mesh-navy bg-grain pb-24 pt-14 sm:pt-16 lg:min-h-[calc(100svh-7.25rem)] lg:justify-center lg:pb-28 lg:pt-8"
    >
      {/* Ambient washes. Deliberately static and GPU-promoted: an infinite transform
          animation on a 120px-blurred surface forces a full re-blur every frame and
          was the main source of scroll jank across the whole page. */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] transform-gpu rounded-full bg-gold-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-[-20%] left-[-10%] h-[420px] w-[420px] transform-gpu rounded-full bg-maroon-500/20 blur-[100px]" />

      <div className="container-page relative grid w-full gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
          </motion.div>

          <h1 className="mt-7 font-display text-[2.75rem] font-semibold leading-[1.04] tracking-[-0.02em] text-cream sm:text-6xl lg:text-[4.25rem]">
            {hero.headlineLines.map((line, i) => (
              <span key={i} className="block overflow-hidden pb-[0.06em]">
                <motion.span
                  className="block"
                  initial="hidden"
                  animate="visible"
                  variants={lineVariants}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}

            <motion.span
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-5 block max-w-[19ch] text-[1.75rem] font-normal italic leading-[1.18] text-gold-300 sm:text-[2.125rem] lg:text-[2.375rem]"
            >
              {hero.headlineAccent}
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 max-w-[46ch] text-[1.0625rem] leading-relaxed text-cream/65"
          >
            {hero.subhead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="mt-10 flex flex-wrap items-center gap-4"
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
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto aspect-[4/5] w-full max-w-[15rem] sm:max-w-[19rem] lg:mr-0 lg:max-w-[26rem]"
        >
          {/* soft gold halo behind the arch */}
          <div className="pointer-events-none absolute -inset-12 transform-gpu rounded-t-full bg-gradient-to-b from-gold-400/12 via-gold-500/5 to-transparent blur-3xl" />

          {/* hairline gold arch, concentric with the portrait and fading at the base */}
          <div
            style={archFade}
            className="pointer-events-none absolute -inset-x-5 -top-5 bottom-0 rounded-t-full border border-gold-400/45"
          />

          {/* portrait clipped to the arch */}
          <div style={archFade} className="relative h-full w-full overflow-hidden rounded-t-full">
            <Image
              src={hero.portrait}
              alt="Duvwon Robinson"
              fill
              sizes="(max-width: 640px) 240px, (max-width: 1024px) 304px, 416px"
              className="object-cover object-top"
              priority
            />
            {/* hairline on the photo edge so the dome reads crisply against the navy */}
            <div className="pointer-events-none absolute inset-0 rounded-t-full ring-1 ring-inset ring-white/10" />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="pointer-events-none mt-14 flex justify-center lg:absolute lg:inset-x-0 lg:bottom-8 lg:mt-0"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-cream/35"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

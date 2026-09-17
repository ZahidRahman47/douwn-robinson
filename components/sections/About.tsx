"use client";

import Image from "next/image";
import { useState } from "react";
import { Play } from "lucide-react";
import { about } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

export function About() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="about" className="relative bg-navy-800 py-24 sm:py-32">
      <div className="container-page grid gap-16 lg:grid-cols-2 lg:items-start">
        <div>
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
              {about.title}
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-6 space-y-4 text-cream/70">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.2}>
            <blockquote className="mt-8 border-l-2 border-gold-400 pl-5">
              <p className="font-display text-xl italic leading-snug text-gold-200">
                &ldquo;{about.pullQuote}&rdquo;
              </p>
            </blockquote>
          </Reveal>

          <RevealGroup className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {about.stats.map((stat) => (
              <RevealItem key={stat.label}>
                <p className="font-display text-3xl font-semibold text-gold-300 sm:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-xs text-cream/55 leading-snug">{stat.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>

        <Reveal delay={0.15} className="relative">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-soft">
            {playing ? (
              <video
                src={about.video.src}
                poster={about.video.poster}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-cover"
              />
            ) : (
              <>
                <Image
                  src={about.video.poster}
                  alt="Video: Meet Dawson Robinson"
                  fill
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-navy-950/30" />
                <button
                  aria-label="Play video"
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gold-500/90 text-navy-950 shadow-[0_0_0_0_rgba(232,193,88,0.5)] transition-all duration-300 group-hover:shadow-[0_0_0_14px_rgba(232,193,88,0.15)] group-hover:scale-105">
                    <Play size={22} fill="currentColor" />
                  </span>
                </button>
              </>
            )}
          </div>
          <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 rounded-2xl border border-white/10 bg-navy-700/80 backdrop-blur sm:block" />
        </Reveal>
      </div>
    </section>
  );
}

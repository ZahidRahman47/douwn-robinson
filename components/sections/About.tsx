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
      <div className="container-page grid gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow>{about.eyebrow}</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
              {about.title}
            </h2>
          </Reveal>

          <Reveal delay={0.05} className="mt-6 space-y-4 text-cream/70">
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
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

        <Reveal delay={0.08} className="relative">
          <div className="lg:sticky lg:top-28">
            <div className="relative">
              {/* gold halo + offset hairline frame, echoing the hero arch */}
              <div className="pointer-events-none absolute -inset-8 transform-gpu bg-gradient-to-br from-gold-400/12 via-gold-500/5 to-transparent blur-3xl" />
              <div className="pointer-events-none absolute -inset-3 rounded-[1.75rem] border border-gold-400/25 sm:-inset-4 sm:rounded-[2rem]" />

              <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-soft sm:rounded-[1.5rem]">
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
                      alt="Video: Meet Duvwon Robinson"
                      fill
                      sizes="(max-width: 1024px) 90vw, 620px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/25 to-navy-950/40" />

                    <button
                      aria-label="Play campaign film"
                      onClick={() => setPlaying(true)}
                      className="group absolute inset-0 flex items-center justify-center"
                    >
                      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/90 text-navy-950 shadow-[0_0_0_0_rgba(232,193,88,0.5)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_0_18px_rgba(232,193,88,0.12)]">
                        <Play size={26} fill="currentColor" className="ml-1" />
                      </span>
                    </button>

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-gold-300/90">
                          {about.video.eyebrow}
                        </p>
                        <p className="mt-1.5 font-display text-lg leading-snug text-cream sm:text-xl">
                          {about.video.caption}
                        </p>
                      </div>
                      <span className="hidden shrink-0 text-xs uppercase tracking-[0.18em] text-cream/50 sm:block">
                        Watch
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

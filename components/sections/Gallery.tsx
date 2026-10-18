"use client";

import Image from "next/image";
import { useCallback, useState } from "react";
import { AnimatePresence, motion, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import { gallery } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";

const SWIPE_THRESHOLD = 60;

const slideVariants = {
  enter: (dir: number) => ({ opacity: 0, x: dir * 60 }),
  center: { opacity: 1, x: 0 },
  exit: (dir: number) => ({ opacity: 0, x: dir * -60 }),
};

export function Gallery() {
  const [[index, direction], setState] = useState<[number, number]>([0, 0]);
  const count = gallery.slides.length;
  const slide = gallery.slides[index];

  const paginate = useCallback(
    (dir: number) => setState(([i]) => [(i + dir + count) % count, dir]),
    [count]
  );

  const goTo = (i: number) => setState(([cur]) => [i, i > cur ? 1 : -1]);

  const onDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD) paginate(1);
    else if (info.offset.x > SWIPE_THRESHOLD) paginate(-1);
  };

  return (
    <section id="gallery" className="relative bg-navy-950 py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="text-center">
          <Eyebrow>{gallery.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
            {gallery.title}
          </h2>
        </Reveal>

        <Reveal delay={0.08} className="mx-auto mt-14 max-w-xl">
          <div
            className="relative"
            role="region"
            aria-roledescription="carousel"
            aria-label={gallery.title}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") paginate(-1);
              if (e.key === "ArrowRight") paginate(1);
            }}
            tabIndex={0}
          >
            <div className="pointer-events-none absolute -inset-3 rounded-[1.75rem] border border-gold-400/25 sm:-inset-4 sm:rounded-[2rem]" />

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-navy-900 shadow-soft sm:rounded-[1.5rem]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.div
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={onDragEnd}
                  className="absolute inset-0 cursor-grab active:cursor-grabbing"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}`}
                >
                  <Image
                    src={slide.src}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 640px) 90vw, 576px"
                    className="pointer-events-none object-contain"
                    draggable={false}
                  />
                </motion.div>
              </AnimatePresence>

              <button
                aria-label="Previous slide"
                onClick={() => paginate(-1)}
                className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-navy-950/70 text-cream backdrop-blur transition-colors hover:border-gold-400/60 hover:text-gold-300"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                aria-label="Next slide"
                onClick={() => paginate(1)}
                className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-navy-950/70 text-cream backdrop-blur transition-colors hover:border-gold-400/60 hover:text-gold-300"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <p className="mt-8 text-center font-display text-lg italic text-gold-200">{slide.caption}</p>

          <div className="mt-5 flex justify-center gap-2">
            {gallery.slides.map((s, i) => (
              <button
                key={s.src}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={clsx(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-gold-400" : "w-3 bg-cream/25 hover:bg-cream/45"
                )}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

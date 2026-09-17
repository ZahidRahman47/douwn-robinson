"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import clsx from "clsx";
import { site, nav, utilityLinks } from "@/lib/data";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Utility bar */}
      <div className="hidden bg-navy-950/80 sm:block">
        <div className="container-page flex h-9 items-center justify-end gap-6 text-xs text-cream/60">
          {utilityLinks.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-gold-300">
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <header
        className={clsx(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-navy-900/90 backdrop-blur-md shadow-soft border-b border-white/5"
            : "bg-transparent"
        )}
      >
        <div className="container-page flex h-20 items-center justify-between">
          <Link href="#top" className="group flex flex-col leading-none">
            <span className="font-display text-xl font-semibold text-cream group-hover:text-gold-300 transition-colors">
              {site.candidateName}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold-400/90">
              for {site.officeEyebrow}
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-cream/80 transition-colors hover:text-gold-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="#donate" variant="primary" className="px-6 py-2.5 text-xs">
              Donate
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-navy-950 lg:hidden"
          >
            <div className="container-page flex h-20 items-center justify-end">
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream"
              >
                <X size={18} />
              </button>
            </div>
            <nav className="flex flex-1 flex-col items-start justify-center gap-8 px-8">
              {nav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-cream hover:text-gold-300"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <Button href="#donate" onClick={() => setOpen(false)} className="mt-4">
                Donate
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { site, footerColumns } from "@/lib/data";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-white/5 bg-navy-950 pt-20">
      <div className="container-page grid gap-12 pb-16 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-semibold text-cream">{site.candidateName}</p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
            for {site.officeEyebrow}
          </p>
          <p className="mt-5 max-w-xs text-sm text-cream/60">
            Building a Fulton County tax office that&apos;s transparent, responsive, and fair for
            every homeowner.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {footerColumns.map((col) => (
          <div key={col.heading}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
              {col.heading}
            </p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-cream/70 hover:text-gold-300">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/50">
            Stay updated
          </p>
          <form className="mt-4 flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="Your email"
              className="rounded-full border border-cream/15 bg-navy-900 px-4 py-2.5 text-sm text-cream placeholder:text-cream/40 focus:border-gold-400 focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-gold-500 px-4 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
            >
              Sign up
            </button>
          </form>
        </div>
      </div>

      <div className="container-page flex flex-col gap-3 border-t border-white/5 py-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
        <p>{site.disclaimer}</p>
        <p>&copy; {new Date().getFullYear()} {site.candidateName}. All rights reserved.</p>
      </div>
    </footer>
  );
}

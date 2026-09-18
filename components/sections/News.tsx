import { ArrowUpRight } from "lucide-react";
import { news } from "@/lib/data";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export function News() {
  return (
    <section id="news" className="relative bg-navy-800 py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Eyebrow>Campaign Updates</Eyebrow>
            <h2 className="mt-4 font-display text-3xl font-semibold text-cream sm:text-4xl">
              News &amp; updates from the campaign
            </h2>
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
          {news.map((item) => (
            <RevealItem key={item.title}>
              <a
                href="#"
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-navy-900/60 p-7 shadow-card transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-gold-400/40 hover:shadow-cardHover"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="rounded-full bg-gold-400/10 px-3 py-1 font-semibold uppercase tracking-wide text-gold-300">
                    {item.category}
                  </span>
                  <span className="text-cream/45">{item.date}</span>
                </div>
                <h3 className="mt-5 font-display text-lg font-medium leading-snug text-cream group-hover:text-gold-200">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/60">{item.excerpt}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-gold-300">
                  Read more
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </a>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

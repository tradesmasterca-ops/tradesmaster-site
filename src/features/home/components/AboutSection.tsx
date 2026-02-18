import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
  src: string;
  alt: string;
  season: "Winter & Spring" | "Summer & Fall";
};

export function AboutSection(): React.JSX.Element {
  const slides = useMemo<readonly Slide[]>(
    () => [
      {
        src: "/Winter&Spring/winter1.jpg",
        alt: "Snow plowing service",
        season: "Winter & Spring",
      },
      {
        src: "/Winter&Spring/winter2.jpg",
        alt: "Winter service work",
        season: "Winter & Spring",
      },
      {
        src: "/Winter&Spring/SnowStairs1.jpg",
        alt: "Stairs snow clearing",
        season: "Winter & Spring",
      },
      {
        src: "/Winter&Spring/SnowStairs2.jpg",
        alt: "Ice & snow removal",
        season: "Winter & Spring",
      },
      {
        src: "/Winter&Spring/SnowStairs3.jpg",
        alt: "Snow clearing detail",
        season: "Winter & Spring",
      },

      {
        src: "/Summer&Fall/GrassBefore.jpg",
        alt: "Grass cutting (before)",
        season: "Summer & Fall",
      },
      {
        src: "/Summer&Fall/GrassAfter.jpg",
        alt: "Grass cutting (after)",
        season: "Summer & Fall",
      },
      {
        src: "/Summer&Fall/Driveway.jpg",
        alt: "Driveway cleanup",
        season: "Summer & Fall",
      },
      {
        src: "/Summer&Fall/Shed.jpg",
        alt: "Yard cleanup",
        season: "Summer & Fall",
      },
      {
        src: "/Summer&Fall/Alley.jpg",
        alt: "Alley cleanup work",
        season: "Summer & Fall",
      },
      {
        src: "/Summer&Fall/Alley2.jpg",
        alt: "Alley cleanup result",
        season: "Summer & Fall",
      },
      {
        src: "/Summer&Fall/StairsBefore.jpg",
        alt: "Stairs (before)",
        season: "Summer & Fall",
      },
      {
        src: "/Summer&Fall/StairsAfter.jpg",
        alt: "Stairs (after)",
        season: "Summer & Fall",
      },
    ],
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);

    return () => window.clearInterval(id);
  }, [slides.length]);

  const current = slides[index];

  return (
    <section id="about" className="bg-slate-50">
      <div className="tm-container py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-2 lg:items-center"
        >
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              This is Larry.
            </h2>

            <p className="mt-5 text-sm leading-relaxed text-slate-700 md:mt-6 md:text-base">
              Tradesmaster started with one goal — do the job properly and do it
              on time. No shortcuts. No disappearing during a snowstorm. No
              messy lawns left half done.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Larry built this business around reliability. Winter means clear
              driveways and safe walkways. Summer means sharp lawn lines and
              clean outdoor spaces. Simple standards. Consistent work.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
              Proudly serving Highland Creek, Ajax, Pickering, Whitby, Rouge
              River, Centennial, Guildwood, and Markham.
            </p>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:p-6">
              <h3 className="text-sm font-semibold tracking-wide text-slate-900">
                What Tradesmaster stands for
              </h3>

              <ul className="mt-4 space-y-3 text-sm text-slate-700">
                {[
                  "Show up when promised",
                  "Clean finish — no rushed jobs",
                  "Clear communication",
                  "Safe winter response",
                  "Seasonal reliability",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-slate-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <div className="aspect-[4/3] w-full bg-slate-50 sm:aspect-[16/10] lg:aspect-[4/5]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={{ opacity: 0, scale: 1.01 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.995 }}
                    transition={{ duration: 0.7 }}
                    loading="lazy"
                  />
                </AnimatePresence>
              </div>

              <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/40 bg-black/35 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                {current.season}
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 hidden max-w-xs rounded-2xl border border-slate-200 bg-white p-5 shadow-xl md:block">
              <div className="text-sm font-semibold text-slate-900">
                Year-Round Service
              </div>
              <p className="mt-2 text-xs text-slate-600">
                Winter &amp; Spring: Snow plowing &amp; clearing
                <br />
                Summer &amp; Fall: Lawn &amp; garden cleanup
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export function Hero(): React.JSX.Element {
  return (
    <section className="border-b border-slate-200">
      <div className="tm-container py-14 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium text-slate-600">
            Seasonal property services • Products that handle real Canadian
            weather
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Clean lawns in summer.
            <br />
            Clear driveways in winter.
          </h1>

          <p className="mt-5 text-base text-slate-600 md:text-lg">
            Tradesmaster delivers reliable seasonal work — snow plowing, garden
            cleaning, grass cutting — plus NovaMax ice control products and
            Heat-Line solutions.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <NavLink
              to="/products"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.99]"
            >
              Explore Products <ArrowRight className="h-4 w-4" />
            </NavLink>

            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 active:scale-[0.99]"
            >
              View Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

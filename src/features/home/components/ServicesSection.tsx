import React from "react";
import {
  Snowflake,
  Leaf,
  Truck,
  Droplets,
  Flame,
  Shovel,
  Scissors,
  Paintbrush,
  Grid2X2,
  Hammer,
} from "lucide-react";
import { motion } from "framer-motion";

type ServiceItem = {
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

function openContactModal(): void {
  window.dispatchEvent(new Event("tm:open-contact"));
}

function ServiceBullet({ item }: { item: ServiceItem }): React.JSX.Element {
  const { Icon, label } = item;

  return (
    <li>
      <button
        type="button"
        onClick={openContactModal}
        className="group flex w-full items-start gap-3 rounded-xl p-2 text-left transition hover:bg-slate-50"
        aria-label={`Request a quote for: ${label}`}
      >
        <span className="mt-0.5 grid h-8 w-8 place-items-center rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition group-hover:border-slate-300">
          <Icon className="h-4 w-4" />
        </span>

        <span className="flex-1 text-slate-700 transition group-hover:text-slate-900">
          {label}
        </span>

        <span className="mt-1 text-xs font-semibold text-slate-400 transition group-hover:text-slate-600">
          Get quote
        </span>
      </button>
    </li>
  );
}

export function ServicesSection(): React.JSX.Element {
  const winterSpring: ServiceItem[] = [
    { label: "Snow plowing (driveways, lots, walkways)", Icon: Truck },
    { label: "Ice control support (as needed)", Icon: Droplets },
    { label: "Heat-line gutter installation", Icon: Flame },
  ];

  const summerFall: ServiceItem[] = [
    { label: "Garden cleaning", Icon: Shovel },
    { label: "Grass cutting", Icon: Scissors },
    { label: "Seasonal yard cleanup", Icon: Leaf },
    { label: "Painting", Icon: Paintbrush },
    { label: "Tile setter", Icon: Grid2X2 },
    { label: "Renovation", Icon: Hammer },
  ];

  return (
    <section id="services" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-3xl font-semibold text-slate-900 sm:text-4xl">
            Seasonal services
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Straightforward, reliable work — booked for the season, delivered on
            schedule.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {/* Winter & Spring */}
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-900 text-white">
                <Snowflake className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Winter & Spring
              </h3>
            </div>

            <ul className="mt-4 space-y-1">
              {winterSpring.map((item) => (
                <ServiceBullet key={item.label} item={item} />
              ))}
            </ul>
          </motion.div>

          {/* Summer & Fall */}
          <motion.div
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-900 text-white">
                <Leaf className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                Summer & Fall
              </h3>
            </div>

            <ul className="mt-4 space-y-1">
              {summerFall.map((item) => (
                <ServiceBullet key={item.label} item={item} />
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

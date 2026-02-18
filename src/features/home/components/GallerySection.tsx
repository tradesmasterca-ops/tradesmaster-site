import React from "react";
import { motion } from "framer-motion";

type GalleryImage = {
  src: string;
  label: string;
};

function ImageCard({ img }: { img: GalleryImage }): React.JSX.Element {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="aspect-[4/3] w-full bg-slate-50">
        <img
          src={img.src}
          alt={img.label}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold text-slate-800">{img.label}</div>
      </div>
    </div>
  );
}

export function GallerySection(): React.JSX.Element {
  const baseUrl = import.meta.env.BASE_URL; // e.g. "/tradesmaster-site/"

  const withBase = (pathFromPublic: string): string =>
    `${baseUrl}${pathFromPublic.replace(/^\/+/, "")}`;

  const summerFall: readonly GalleryImage[] = [
    {
      src: withBase("Summer&Fall/GrassBefore.jpg"),
      label: "Grass cutting (before)",
    },
    {
      src: withBase("Summer&Fall/GrassAfter.jpg"),
      label: "Grass cutting (after)",
    },
    { src: withBase("Summer&Fall/Driveway.jpg"), label: "Driveway cleanup" },
    { src: withBase("Summer&Fall/Shed.jpg"), label: "Yard cleanup" },
  ];

  const winterSpring: readonly GalleryImage[] = [
    { src: withBase("Winter&Spring/winter1.jpg"), label: "Snow plowing" },
    { src: withBase("Winter&Spring/winter2.jpg"), label: "Winter service" },
    {
      src: withBase("Winter&Spring/SnowStairs1.jpg"),
      label: "Stairs clearing",
    },
    {
      src: withBase("Winter&Spring/SnowStairs2.jpg"),
      label: "Ice & snow removal",
    },
  ];

  return (
    <section>
      <div className="tm-container py-14 md:py-18">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold md:text-3xl">
            Service showcase
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600 md:text-base">
            Real work photos — summer results, winter response.
          </p>

          <div className="mt-10">
            <div className="flex items-end justify-between gap-4">
              <h3 className="text-lg font-semibold">Winter &amp; Spring</h3>
              <div className="text-xs text-slate-500">
                Snow plowing • clearing • access
              </div>
            </div>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {winterSpring.map((img) => (
                <ImageCard key={img.src} img={img} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-end justify-between gap-4">
              <h3 className="text-lg font-semibold">Summer &amp; Fall</h3>
              <div className="text-xs text-slate-500">
                Garden cleaning • grass cutting • cleanup
              </div>
            </div>
            <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {summerFall.map((img) => (
                <ImageCard key={img.src} img={img} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

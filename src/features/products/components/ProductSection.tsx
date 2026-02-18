import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Droplets, Cable, Snowflake, ArrowRight } from "lucide-react";
import {
  ProductDetailsModal,
  type ProductDetails,
} from "./ProductDetailsModal";

type ProductId = "novamax-anti-deicer" | "novamax-sfd" | "heat-line";

type ExtendedProductDetails = Omit<ProductDetails, "id"> & {
  id: ProductId;
};

type ProductCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  onClick?: () => void;
  clickable?: boolean;
};

function ProductCard({
  title,
  description,
  icon,
  imageSrc,
  onClick,
  clickable,
}: ProductCardProps): React.JSX.Element {
  const Wrapper: React.ElementType = clickable ? "button" : "div";

  return (
    <Wrapper
      type={clickable ? "button" : undefined}
      onClick={onClick}
      className={[
        "overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm text-left",
        clickable
          ? "cursor-pointer transition hover:-translate-y-[1px] hover:shadow-md"
          : "",
      ].join(" ")}
    >
      <div className="aspect-[16/10] w-full bg-slate-50">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-white">
            {icon}
          </div>
          <div className="text-base font-semibold">{title}</div>
        </div>
        <p className="mt-3 text-sm text-slate-600">{description}</p>

        {clickable && (
          <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
            View details <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export function ProductSection(): React.JSX.Element {
  const novamaxAntiDeicer = useMemo<ExtendedProductDetails>(
    () => ({
      id: "novamax-anti-deicer",
      title: "NovaMax Anti/DeIcer",
      imageSrc: "/NovaMax1.png",
      imageAlt: "NovaMax Anti/DeIcer",
      bullets: [
        "Bio Degradable",
        "Non Corrosive",
        "Non Hazardous",
        "Pet and Plant Friendly",
        "Non Chloride",
        "Non Glycol",
        "Non Marking — no white residue",
        "Non-freezing to -40°C",
      ],
      paragraphs: [
        "Prevents snow from bonding to the surface.",
        "Reduces the build-up of ice and improves surface safety.",
      ],
      contactEmail: "trdz_cdn@yahoo.ca",
    }),
    [],
  );

  const novamaxSfd = useMemo<ExtendedProductDetails>(
    () => ({
      id: "novamax-sfd",
      title: "NovaMax SFD — Granular Runway Deicer",
      imageSrc: "/NovaMax2.png",
      imageAlt: "NovaMax SFD",
      bullets: [
        "Advanced sodium formate-based solid deicer",
        "Environmentally safer and easy to apply",
        "Designed to lower freezing temperature of water",
        "Reduces ice, snow, freezing rain and slush build-up",
        "Maintains traction between tires and surface",
        "Certified to SAE AMS 1431E aviation standard",
      ],
      paragraphs: [
        "NovaMax SFD is a high-performance granular runway and industrial deicer engineered for demanding environments.",
        "Chosen for its environmentally responsible formulation and strong ice-melting capacity, it supports anti-icing and de-icing applications.",
        "Formulated with high-purity sodium formate and corrosion inhibitors, it is non-toxic, non-hazardous and contains no chlorides.",
        "Designed for airports, taxiways, parking aprons and heavy-duty surfaces where safety and reliability are critical.",
      ],
      contactEmail: "trdz_cdn@yahoo.ca",
    }),
    [],
  );

  const heatLine = useMemo<ExtendedProductDetails>(
    () => ({
      id: "heat-line",
      title: "Heat-Line Cable",
      imageSrc: "/Heat-line.jpg.webp",
      imageAlt: "Heat-Line Cable",
      bullets: [
        "All-in-one self-regulating heating cable system",
        "Ideal for new installations or retrofit systems",
        "Energy efficient in extreme temperatures",
        "CSA Certified — NSF61 drinking water safe",
      ],
      paragraphs: [
        "Retro-Line self-regulating heating cable integrated directly into pipe for freeze protection.",
        "Safe, reliable and long-lasting solution for water supply pipes and sump pump lines.",
      ],
      contactEmail: "trdz_cdn@yahoo.ca",
    }),
    [],
  );

  const [active, setActive] = useState<ExtendedProductDetails | null>(null);

  return (
    <section className="border-b border-slate-200">
      <div className="tm-container py-14 md:py-18">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-3xl font-semibold md:text-4xl">Products</h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 md:text-base">
            No e-commerce checkout here — request a quote and we’ll match the
            right product to your situation.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <ProductCard
              title="NovaMax Anti/DeIcer"
              description="Liquid ice control solution for safer surfaces."
              icon={<Droplets className="h-5 w-5" />}
              imageSrc="/NovaMax1.png"
              clickable
              onClick={() => setActive(novamaxAntiDeicer)}
            />

            <ProductCard
              title="NovaMax SFD"
              description="Granular runway and heavy-duty surface deicer."
              icon={<Snowflake className="h-5 w-5" />}
              imageSrc="/NovaMax2.png"
              clickable
              onClick={() => setActive(novamaxSfd)}
            />

            <ProductCard
              title="Heat-Line Cable"
              description="Freeze protection for pipes and critical systems."
              icon={<Cable className="h-5 w-5" />}
              imageSrc="/Heat-line.jpg.webp"
              clickable
              onClick={() => setActive(heatLine)}
            />
          </div>
        </motion.div>
      </div>

      <ProductDetailsModal
        open={active !== null}
        product={active as ProductDetails | null}
        onClose={() => setActive(null)}
      />
    </section>
  );
}

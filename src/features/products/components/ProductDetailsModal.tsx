import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

type ProductId = "novamax-anti-deicer" | "novamax-sfd" | "heat-line";

export type ProductDetails = {
  id: ProductId;
  title: string;
  imageSrc: string;
  imageAlt: string;
  bullets: readonly string[];
  paragraphs: readonly string[];
  contactEmail: string;
};

type Props = {
  open: boolean;
  product: ProductDetails | null;
  onClose: () => void;
};

export function ProductDetailsModal({
  open,
  product,
  onClose,
}: Props): React.JSX.Element {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleRequestQuote = () => {
    onClose();
    window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent("tm:open-contact"));
    }, 50);
  };

  return (
    <AnimatePresence>
      {open && product ? (
        <motion.div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-slate-900/50 p-3 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl max-h-[92vh] flex flex-col"
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.99 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={`${product.title} details`}
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-4 sm:p-5">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
                  {product.title}
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Product details (no checkout — request a quote)
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="grid h-9 w-9 place-items-center rounded-lg hover:bg-slate-100"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto">
              <div className="grid md:grid-cols-2">
                <div className="bg-slate-50 flex items-center justify-center p-4 sm:p-6">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="max-h-[42vh] md:max-h-[60vh] w-auto max-w-full object-contain rounded-xl"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 sm:p-6">
                  <div className="rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
                    <h3 className="text-sm font-semibold text-slate-900">
                      Highlights
                    </h3>

                    <ul className="mt-3 space-y-2 text-sm text-slate-700">
                      {product.bullets.map((b) => (
                        <li key={b} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-400" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 space-y-3 text-sm text-slate-700">
                      {product.paragraphs.map((p) => (
                        <p key={p} className="leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-slate-200 pt-4 text-sm text-slate-700">
                      For more information contact:
                      <a
                        href={`mailto:${product.contactEmail}?subject=${encodeURIComponent(
                          `${product.title} — Quote Request`,
                        )}`}
                        className="ml-2 font-semibold text-slate-900 underline underline-offset-4 hover:text-slate-700"
                      >
                        {product.contactEmail}
                      </a>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                    <button
                      type="button"
                      onClick={handleRequestQuote}
                      className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                    >
                      Request a Quote
                    </button>

                    <button
                      type="button"
                      onClick={onClose}
                      className="rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                    >
                      Close
                    </button>
                  </div>

                  <div className="h-3" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";

const PHONE = "416-618-4522";
const EMAIL = "trdz_cdn@yahoo.ca";

export function ContactModal(): React.JSX.Element {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("tm:open-contact", onOpen);
    return () => window.removeEventListener("tm:open-contact", onOpen);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-slate-900/60 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl"
            initial={{ opacity: 0, y: 18, scale: 0.99 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.99 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Contact Tradesmaster"
          >
            <div className="flex items-start justify-between gap-4 border-b border-slate-200 p-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Contact Tradesmaster
                </h2>
                <p className="mt-1 text-sm text-slate-600">
                  Call or email us for a quote.
                </p>
              </div>

              <button
                type="button"
                onClick={close}
                className="grid h-9 w-9 place-items-center rounded-lg hover:bg-slate-100"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <a
                  href={`tel:${PHONE.replace(/[^0-9+]/g, "")}`}
                  className="flex items-center gap-3 rounded-lg p-3 hover:bg-white"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm">
                    <Phone className="h-5 w-5 text-slate-900" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {PHONE}
                    </div>
                    <div className="text-xs text-slate-600">Tap to call</div>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-2 flex items-center gap-3 rounded-lg p-3 hover:bg-white"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm">
                    <Mail className="h-5 w-5 text-slate-900" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {EMAIL}
                    </div>
                    <div className="text-xs text-slate-600">Tap to email</div>
                  </div>
                </a>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={close}
                  className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

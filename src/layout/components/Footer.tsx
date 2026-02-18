import React from "react";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

export function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="tm-container py-12">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Tradesmaster Service &amp; Supply
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Seasonal property services and trusted products — built for real
              winters and real lawns.
            </p>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=100063762503801"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-900 hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href="https://www.instagram.com/lmstradesmaster/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-900 hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              <li>
                <a href="/products" className="hover:text-slate-900">
                  Products
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-slate-900">
                  Privacy
                </a>
              </li>
              <li>
                <a href="/cookies" className="hover:text-slate-900">
                  Cookies
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900">Contact</h4>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>416-618-4522</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>trdz_cdn@yahoo.ca</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-center text-xs text-slate-500">
          © 2026 Tradesmaster Service &amp; Supply. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

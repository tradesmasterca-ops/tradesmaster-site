// src/layout/components/Navbar.tsx
import React, { useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { X, Menu, Snowflake, Leaf, Package } from "lucide-react";

function NavItem({
  to,
  label,
  onClick,
}: {
  to: string;
  label: string;
  onClick?: () => void;
}): React.JSX.Element {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "rounded-xl px-3 py-2 text-sm font-medium transition",
          isActive
            ? "bg-slate-900 text-white"
            : "text-slate-700 hover:bg-slate-100",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}

function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar(): React.JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  const onAbout = () => {
    closeMobile();

    if (location.pathname === "/") {
      scrollToId("about");
      return;
    }

    navigate("/");
    window.setTimeout(() => scrollToId("about"), 60);
  };

  const onServices = () => {
    closeMobile();
    if (location.pathname !== "/") navigate("/");
  };

  const onGetQuote = () => {
    closeMobile();
    window.dispatchEvent(new CustomEvent("tm:open-contact"));
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="tm-container flex h-16 items-center justify-between">
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={closeMobile}
        >
          {/* LOGO */}
          <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-xl bg-white">
            <img
              src={`${import.meta.env.BASE_URL}Shield.png`}
              alt="Tradesmaster logo"
              className="h-full w-full object-contain"
              loading="eager"
            />
          </div>

          <div className="leading-tight">
            <div className="text-sm font-semibold">Tradesmaster</div>
            <div className="text-xs text-slate-500">Service &amp; Supply</div>
          </div>
        </NavLink>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          <button
            type="button"
            onClick={onServices}
            className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            Services
          </button>

          <NavItem to="/products" label="Products" />

          <button
            type="button"
            onClick={onAbout}
            className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            About Us
          </button>
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop chips */}
          <div className="hidden items-center gap-2 lg:flex">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
              <Snowflake className="h-3.5 w-3.5" />
              Winter
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
              <Leaf className="h-3.5 w-3.5" />
              Summer
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700">
              <Package className="h-3.5 w-3.5" />
              Products
            </span>
          </div>

          <button
            type="button"
            onClick={onGetQuote}
            className="hidden items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.99] md:inline-flex"
          >
            Get a Quote
          </button>

          {/* Mobile controls */}
          <button
            type="button"
            onClick={onGetQuote}
            className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 active:scale-[0.99] md:hidden"
          >
            Quote
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-50 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen ? (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="tm-container py-3">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={onServices}
                className="w-full rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                Services
              </button>

              <NavItem to="/products" label="Products" onClick={closeMobile} />

              <button
                type="button"
                onClick={onAbout}
                className="w-full rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-900 hover:bg-slate-50"
              >
                About Us
              </button>

              <button
                type="button"
                onClick={onGetQuote}
                className="mt-1 inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

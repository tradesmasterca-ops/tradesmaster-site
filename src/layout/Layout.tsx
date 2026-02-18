import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { CookieBanner } from "../features/cookies/CookieBanner";
import { ContactModal } from "../features/products/components/ContactModal";

export function Layout(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* pt ensures content isn't hidden under fixed/sticky navbar */}
      <main className="pt-16 md:pt-16">
        <Outlet />
      </main>

      <Footer />
      <CookieBanner />

      {/* Event-driven modal (no props) */}
      <ContactModal />
    </div>
  );
}

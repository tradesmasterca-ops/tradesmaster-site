import React from "react";
import { Hero } from "./components/Hero";
import { ServicesSection } from "./components/ServicesSection";
import { GallerySection } from "./components/GallerySection";
import { AboutSection } from "./components/AboutSection";

export function HomePage(): React.JSX.Element {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
    </div>
  );
}

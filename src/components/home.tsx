import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import GradientBackground from "./GradientBackground";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <GradientBackground />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section
          id="section-one"
          className="flex items-center justify-center bg-background-secondary min-h-96"
        >
          SECTION ONE
        </section>
        <section
          id="section-two"
          className="flex items-center justify-center bg-background min-h-96"
        >
          SECTION TWO
        </section>
        <section
          id="section-three"
          className="flex items-center justify-center bg-background-secondary min-h-96"
        >
          SECTION THREE
        </section>
      </main>

      {/* Footer */}
      <footer className="flex items-center justify-center bg-background-inverse text-foreground-inverse min-h-96 py-12">
        FOOTER
      </footer>
    </div>
  );
};

export default HomePage;

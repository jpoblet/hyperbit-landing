import React from "react";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import MainSection from "./MainSection";
import TechnologySection from "./TechnologySection";
import MarketsSection from "./MarketsSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="hero">
          <HeroSection />
        </section>
        <section id="main">
          <MainSection />
        </section>
        <section id="technology">
          <TechnologySection />
        </section>
        {/*<section id="markets">
          <MarketsSection />
        </section>*/}
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

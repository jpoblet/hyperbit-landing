import React from "react";
import CubeTempoAnimation from "./CubeTempoAnimation";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  title = "Revolutionizing Finance Through Blockchain",
  subtitle = "Secure, transparent, and efficient Bitcoin solutions for businesses and individuals. Join the future of decentralized finance today.",
}: HeroSectionProps) => {
  return (
    <section className="w-full flex flex-col md:flex-row content-end flex-wrap relative w-full min-h-[60vh] xl:min-h-[80vh] bg-transparent text-foreground gap-10 px-8 py-6 md:px-12 md:py-10 lg:px-14 lg:py-12">
      <div className="w-full md:w-[50vw] items-end">
        <div className="flex flex-col gap-8 h-full pt-40 md:pt-0 justify-end">
          <h1 className="text-5xl lg:text-6xl xl:text-8xl">{title}</h1>
          <p className="text-lg md:text-xl mb-0 xl:mb-8 text-foreground-secondary">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex flex-grow items-center justify-center pb-24 pt-24 lg:pb-32 xl:mb-24 md:min-h-full scale-100 xl:scale-125">
        <CubeTempoAnimation />
      </div>
    </section>
  );
};

export default HeroSection;

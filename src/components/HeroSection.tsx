import React from "react";
import CubeTempoAnimation from "./CubeTempoAnimation";
import { Button } from "./ui/button";
import { ArrowUpRight, BookText } from "lucide-react";
import GradientBackground from "./GradientBackground";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  title = "The decentralized orderbook for inverse perpetual contracts",
  subtitle = [
    "Inverse perpetuals belong on-chain.",
    <br />,
    "No USD. No custody. No KYC.",
  ],
}: HeroSectionProps) => {
  return (
    <section className="w-full flex flex-col md:flex-row content-end flex-wrap text-foreground pt-20">
      <GradientBackground />
      <div className="w-full md:w-[60vw] 2xl:w-[50vw] h-full flex flex-col pl-8 pr-8 pt-16 pb-4 lg:pl-12 lg:pr-8 lg:pt-40 lg:pb-20 xl:pl-16 xl:pr-8 xl:pt-40 xl:pb-24">
        <div className="flex flex-col gap-8 justify-end">
          <div className="text-5xl lg:text-6xl xl:text-7xl">{title}</div>
          <div className="font-light text-lg md:text-xl mb-3 text-foreground-secondary">
            {subtitle}
          </div>
        </div>
        <div className="flex gap-4 pt-8">
          <Button className="flex w-full sm:w-auto gap-2 hover:gap-3 items-center text-sm font-normal bg-background-inverse hover:bg-background text-foreground-inverse hover:text-foreground h-12 pl-5 pr-4 rounded-full transition-all">
            Open App <ArrowUpRight className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            className="flex w-full sm:w-auto gap-2 items-center text-sm font-normal bg-transparent border border-foreground hover:bg-background h-12 pl-5 pr-4 rounded-full transition-all "
          >
            <BookText className="w-4 h-4" /> Read Docs
          </Button>
        </div>
      </div>
      <div className="flex flex-grow items-center min-h-[440px]  justify-center scale-75 lg:scale-100">
        <CubeTempoAnimation />
      </div>
    </section>
  );
};

export default HeroSection;

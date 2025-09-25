import React from "react";
import { MoveRight } from "lucide-react";

interface MainSectionProps {
  textBar?: string;
  mainTitle?: string;
  pillars?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  calloutTextOne?: string;
  calloutTextTwo?: string;
}

const MainSection = ({
  textBar = "Markets",
  subTitle = "Trade the pairs that matter",
  mainTitle = "Starting with the markets that drive inverse perpetual contracts demand",
}: MainSectionProps) => {
  return (
    <section className="flex flex-col w-full bg-background text-foreground items-center">
      {/* Text Bar */}
      <div className="w-full bg-background-tertiary py-4">
        <div className="px-8 lg:px-12 xl:px-16">
          <p className="text-xs text-foreground uppercase tracking-widest">
            {textBar}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center px-8 max-w-4xl lg:px-12 xl:px-16 py-14 lg:py-20">
        {/* Main Title */}
        <div className="flex flex-col gap-6 md:gap-6 items-center text-center text-left pb-16 mt-8">
          <div className="text-xl text-foreground-secondary font-light w-full md:w-1/3">
            {subTitle}
          </div>
          <div className="text-2xl lg:text-3xl xl:text-4xl font-light w-full">
            {mainTitle}
          </div>
        </div>
        <div className="flex flex-col text-2xl lg:text-3xl xl:text-4xl mb-6 font-light w-full gap-5">
          <div className="flex w-full p-8 border-b-2 border-foreground text-foreground bg-background-secondary rounded-3xl items-center hover:bg-background-tertiary hover:-translate-y-2 transition-all">
            <div className="flex w-full justify-center">BTC</div>
            <MoveRight size={64} strokeWidth={1.5} />
            <div className="flex w-full justify-center">USD</div>
          </div>
          <div className="flex w-full p-8 border-b-2 border-foreground text-foreground bg-background-secondary rounded-3xl items-center hover:bg-background-tertiary hover:-translate-y-2 transition-all">
            <div className="flex w-full justify-center">ETH</div>
            <MoveRight size={64} strokeWidth={1.5} />
            <div className="flex w-full justify-center">USD</div>
          </div>
          <div className="flex w-full p-12 rounded-3xl items-center">
            <div className="flex w-full justify-center text-lg">
              More pairs to come...
            </div>
          </div>
          <div className="flex flex-col text-center text-4xl gap-2 w-full items-center justify-center text-foreground">
            Bringing altcoin inverse perps on-chain for the first time.
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

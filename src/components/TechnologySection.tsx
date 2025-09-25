import React from "react";
import { Coins, Zap, Waypoints } from "lucide-react";
import GradientBackground from "./GradientBackground";

interface TechnologySectionProps {
  textBar?: string;
  mainCopy?: string;
  pillars?: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  calloutTextOne?: string;
  calloutTextTwo?: string;
}

const TechnologySection = ({
  textBar = "Technology",
  mainTitle = "Built on",
  mainCopy = "Hyperbit is more than a trading platform — it’s a protocol extension of Hyperliquid. Using HIP-3, we enable coin-margined perpetual contracts with the same sub-second matching engine and on-chain guarantees.",

  calloutTextOne = "When there's no fiat involved, why give up custody or submit to KYC?",
  calloutTextTwo = "Hyperbit keeps inverse perpetuals where they belong — on-chain.",
}: TechnologySectionProps) => {
  return (
    <section className="w-full bg-background-secondary text-foreground">
      {/* Text Bar */}
      <div className="w-full bg-background-tertiary py-4">
        <div className="px-8 lg:px-12 xl:px-16">
          <p className="text-xs text-foreground uppercase tracking-widest">
            {textBar}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 lg:px-12 xl:px-16 py-14 lg:py-20">
        {/* Main Title */}
        <div className="flex flex-col gap-6 items-center text-center w-full pb-16 mt-8 mb-16">
          <div className="flex text-4xl w-full flex-col items-center sm:flex-row justify-center gap-4 font-light">
            {mainTitle}
            <div className="flex bg-background px-8 py-6 rounded-full justify-center">
              <img
                src="/images/Hyperliquid-logo.svg"
                alt="Hyperliquid"
                className="h-10"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(var(--foreground-invert))",
                }}
              />
            </div>
          </div>

          <div className="flex max-w-2xl text-2xl mb-6 font-light text-foreground-secondary w-full">
            {mainCopy}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

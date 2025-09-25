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
  calloutText?: string;
}

const TechnologySection = ({
  textBar = "Technology",
  mainTitle = "Built on",
  mainCopy = "Hyperbit is more than a trading platform — it's a protocol extension of Hyperliquid. Using HIP-3, we enable coin-margined perpetual contracts with the same sub-second matching engine and on-chain guarantees.",

  calloutText = "Institutional-grade tech, fully decentralized.",
}: TechnologySectionProps) => {
  return (
    <section className="w-full flex flex-col bg-background-secondary text-foreground">
      {/* Text Bar */}
      <div className="w-full bg-background-tertiary py-4">
        <div className="px-8 lg:px-12 xl:px-16">
          <p className="text-xs text-foreground uppercase tracking-widest">
            {textBar}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col self-center max-w-4xl gap-4 px-8 py-10 lg:py-16">
        <div className="flex flex-col gap-6 items-center text-center w-full mt-8 mb-10">
          <div className="flex text-4xl w-full flex-col items-center sm:flex-row justify-center gap-4 font-light">
            {mainTitle}
            <div className="flex bg-background px-8 py-6 rounded-full justify-center items-center gap-4">
              <img
                src="/images/blob-dark.gif"
                alt="Hyperliquid Animation"
                className="h-10 dark:hidden"
              />
              <img
                src="/images/blob_green.gif"
                alt="Hyperliquid Animation"
                className="h-10 hidden dark:block"
              />
              <img
                src="/images/Hyperliquid_logo_text.svg"
                alt="Hyperliquid"
                className="h-8"
                style={{
                  filter:
                    "brightness(0) saturate(100%) invert(var(--foreground-invert))",
                }}
              />
            </div>
          </div>
          <div className="flex text-2xl mb-6 font-extralight text-foreground w-full">
            {mainCopy}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-center uppercase text-sm text-foreground font-light text-center gap-4 w-full mb-12">
          <div className="flex w-full rounded-full py-4 px-6 items-center justify-center border border-foreground-secondary bg-background sm:hover:-translate-y-1 transition-all">
            Ultra-low latency order matching
          </div>
          <div className="flex w-full rounded-full py-4 px-6 items-center justify-center border border-foreground-secondary bg-background sm:hover:-translate-y-1 transition-all">
            Composable, secure settlement layer
          </div>
          <div className="flex w-full rounded-full py-4 px-6 items-center justify-center border border-foreground-secondary bg-background sm:hover:-translate-y-1 transition-all">
            Transparent contract rules, enforced by code
          </div>
        </div>
        <div className="flex w-full text-transparent h-20">
          <div className="w-full border-r border-foreground">A</div>
          <div className="w-full bg-background-secondary">B</div>
        </div>
        <div className="text-4xl lg:text-5xl xl:text-6xl text-center pt-16 pb-24">
          {calloutText}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;

import React from "react";
import { Coins, Zap, Waypoints } from "lucide-react";
import GradientBackground from "./GradientBackground";

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
  textBar = "Why Hyperbit",
  subTitle = "Why inverse Perpetuals on DeFi?",
  mainTitle = "Inverse perpetuals are the original crypto-native futures: collateralized and settled in BTC or ETH. But until now, they've lived only on centralized exchanges. Hyperbit brings them on-chain — combining crypto-margined trading with the performance of a professional orderbook.",

  pillars = [
    {
      icon: <Coins strokeWidth={1} className="w-14 h-14 sm:w-12 sm:h-12" />,
      title: "Crypto-Margined Without Haircuts",
      description:
        "Keep your collateral and PnL in BTC or ETH. Capital efficiency through 100% of your margin available.",
    },
    {
      icon: (
        <div className="flex items-center justify-center">
          <img
            src="/images/Hyperliquid-glyph.svg"
            alt="Hyperliquid"
            className="w-16 h-16 lg:hidden"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(var(--foreground-invert))",
            }}
          />
          <img
            src="/images/Hyperliquid-logo.svg"
            alt="Hyperliquid"
            className="h-6 hidden lg:block"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(var(--foreground-invert))",
            }}
          />
        </div>
      ),
      title: "Built On Hyperliquid",
      description:
        "Institutional-grade execution, powered by Hyperliquid's trading engine.",
    },
    {
      icon: <Waypoints strokeWidth={1} className="w-14 h-14 sm:w-12 sm:h-12" />,
      title: "Decentralized & Non-Custodial",
      description:
        "Permissionless and open settlement without KYC. Your keys, your margin.",
    },
  ],
  calloutTextOne = "When there's no fiat involved, why give up custody or submit to KYC?",
  calloutTextTwo = "Hyperbit keeps inverse perpetuals where they belong — on-chain.",
}: MainSectionProps) => {
  return (
    <section className="w-full bg-background text-foreground">
      {/* Text Bar */}
      <div className="w-full bg-background-secondary py-4">
        <div className="px-8 lg:px-12 xl:px-16">
          <p className="text-sm text-foreground font-light uppercase tracking-widest">
            {textBar}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 lg:px-12 xl:px-16 py-14 lg:py-20">
        {/* Main Title */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start text-left pb-16 mt-8 mb-16">
          <div className="text-xl text-foreground-secondary font-light w-full md:w-1/3">
            {subTitle}
          </div>
          <div className="text-2xl lg:text-3xl xl:text-4xl mb-6 font-light w-full">
            {mainTitle}
          </div>
        </div>

        {/* Three Pillars */}
        <div className="flex flex-col gap-16 sm:gap-4">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex sm:hover:bg-background-secondary sm:hover:shadow-lg sm:hover:border-transparent sm:hover:rounded-2xl sm:hover:-translate-y-2 border-b border-foreground-secondary flex-col sm:flex-row px-0 sm:px-8 py-6 items-start sm:items-center gap sm:gap-12 transition-all"
            >
              <div className="flex w-1/4">
                <div className="text-foreground">{pillar.icon}</div>
              </div>
              <div className="flex flex-col md:flex-row w-full py-12 pr-4 md:pr-16 gap-4 md:gap-16 sm:items-center">
                <h3 className="text-2xl lg:text-xl w-2/3">{pillar.title}</h3>
                <p className="text-foreground-secondary w-full font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Callout */}
        <div className="flex flex-col gap-8 md:gap-6 w-full my-16 rounded-3xl py-16 px-14 md:py-14 md:px-24 lg:py-24 lg:px-40 inset-0 h-full md:h-full -z-10 animate-gradient bg-[length:200%_200%] bg-gradient-to-br from-[--peach-300] via-[--sand-200] to-[--teal-300] dark:bg-gradient-to-br dark:from-[--teal-800] dark:via-[--boulder-700] dark:to-[--boulder-900]">
          <div className="text-lg lg:text-xl xl:text-3xl font-light text-left">
            {calloutTextOne}
          </div>
          <div className="text-4xl lg:text-5xl xl:text-6xl text-left">
            {calloutTextTwo}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

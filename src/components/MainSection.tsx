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
  calloutText?: string;
}

const MainSection = ({
  textBar = "Why Hyperbit",
  subTitle = "Why inverse Perpetuals on DeFi?",
  mainTitle = "Inverse perpetuals are the original crypto-native futures: collateralized and settled in BTC or ETH. But until now, they've lived only on centralized exchanges. Hyperbit brings them on-chain — combining crypto-margined trading with the performance of a professional orderbook.",

  pillars = [
    {
      icon: <Coins strokeWidth={1} className="w-20 h-20" />,
      title: "Crypto-Margined Without Haircuts",
      description:
        "Keep your collateral and PnL in BTC or ETH. Capital efficiency through 100% of your margin available.",
    },
    {
      icon: <Zap strokeWidth={1} className="w-20 h-20" />,
      title: "Built On Hyperliquid",
      description:
        "Institutional-grade execution, powered by Hyperliquid's trading engine.",
    },
    {
      icon: <Waypoints strokeWidth={1} className="w-20 h-20" />,
      title: "Decentralized & Non-Custodial",
      description:
        "Permissionless and open settlement without KYC. Your keys, your margin.",
    },
  ],
  calloutText = "When there's no fiat involved, why give up custody or submit to KYC? Hyperbit keeps inverse perpetuals where they belong — on-chain.",
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
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start text-center md:text-left pb-16 mt-8 mb-16">
          <div className="text-xl text-foreground-secondary font-light w-full md:w-1/3">
            {subTitle}
          </div>
          <div className="text-2xl lg:text-3xl xl:text-4xl mb-6 font-light w-full">
            {mainTitle}
          </div>
        </div>

        {/* Three Pillars */}
        <div className="flex flex-col gap-4">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="flex text-left hover:bg-background-secondary hover:shadow-lg hover:border-transparent hover:rounded-2xl hover:-translate-y-2 items-center gap-12 hover:gap-14 border-b border-foreground-secondary py-12 transition-all"
            >
              <div className="flex flex-grow w-1/4 justify-center">
                <div className="text-foreground">{pillar.icon}</div>
              </div>
              <div className="flex flex-col md:flex-row w-full gap-2 py-8 lg:gap-16">
                <h3 className="text-lg lg:text-xl w-2/3">{pillar.title}</h3>
                <p className="text-foreground-secondary w-full leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Highlighted Callout */}
        <div className="w-full my-16 rounded-3xl py-14 px-20 lg:py-24 lg:px-40 inset-0 h-full md:h-full -z-10 animate-gradient bg-[length:200%_200%] bg-gradient-to-br from-[--peach-300] via-[--sand-200] to-[--teal-300] dark:bg-gradient-to-br dark:from-[--teal-800] dark:via-[--boulder-700] dark:to-[--boulder-900]">
          <div className="text-3xl lg:text-4xl xl:text-5xl text-center md:text-left">
            {calloutText}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

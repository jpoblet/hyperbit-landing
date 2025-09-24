import React from "react";
import { Shield, Zap, Globe } from "lucide-react";

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
  textBar = "Built for the future of decentralized finance",
  mainTitle = "Trade inverse perpetuals without compromise",
  pillars = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Non-custodial",
      description:
        "Your assets remain in your wallet. Trade directly from your own keys without giving up control.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "No KYC Required",
      description:
        "Access global markets instantly. No identity verification, no waiting periods, no restrictions.",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Fully On-chain",
      description:
        "Every trade is transparent and verifiable. Built on decentralized infrastructure you can trust.",
    },
  ],
  calloutText = "When there's no fiat involved, why give up custody or submit to KYC? Hyperbit keeps inverse perpetuals where they belong — on-chain.",
}: MainSectionProps) => {
  return (
    <section className="w-full bg-background text-foreground">
      {/* Text Bar */}
      <div className="w-full bg-background-secondary py-4">
        <div className="max-w-7xl mx-auto px-8 lg:px-12 xl:px-16">
          <p className="text-center text-sm font-medium text-foreground-secondary uppercase tracking-wider">
            {textBar}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 py-20 lg:py-32">
        {/* Main Title */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6">
            {mainTitle}
          </h2>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-20">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-accent text-foreground">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-xl lg:text-2xl font-semibold mb-4">
                {pillar.title}
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlighted Callout */}
        <div className="bg-accent rounded-2xl p-8 lg:p-12 text-center">
          <p className="text-lg lg:text-xl font-medium leading-relaxed text-foreground">
            {calloutText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainSection;

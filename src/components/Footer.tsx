import React from "react";
import { ExternalLink } from "lucide-react";

interface FooterProps {
  quickLinks?: Array<{
    label: string;
    href: string;
    external?: boolean;
  }>;
  communityCTA?: string;
  tagline?: string;
}

const Footer = ({
  quickLinks = [
    { label: "Docs", href: "#docs", external: true },
    { label: "Twitter/X", href: "https://twitter.com", external: true },
    { label: "Discord", href: "https://discord.com", external: true },
    { label: "GitHub", href: "https://github.com", external: true },
    { label: "Terms", href: "#terms" },
    { label: "Privacy", href: "#privacy" }
  ],
  communityCTA = "Join our Discord and shape the future of decentralized derivatives.",
  tagline = "Hyperbit is powered by Hyperliquid. Built for traders who believe in crypto-native markets."
}: FooterProps) => {
  return (
    <footer className="bg-background-inverse text-foreground-inverse">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 xl:px-16 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-12">
          
          {/* Left Column - Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-3">
              {quickLinks.map((link, index) => (
                <React.Fragment key={index}>
                  <a
                    href={link.href}
                    className="text-foreground-inverse/80 hover:text-foreground-inverse transition-colors duration-200 flex items-center gap-1"
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    {link.label}
                    {link.external && <ExternalLink className="w-3 h-3" />}
                  </a>
                  {index < quickLinks.length - 1 && (
                    <span className="text-foreground-inverse/40">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Column - Community CTA */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Community</h3>
            <p className="text-foreground-inverse/80 leading-relaxed">
              {communityCTA}
            </p>
          </div>
        </div>

        {/* Bottom Section - Tagline */}
        <div className="border-t border-foreground-inverse/20 pt-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-center gap-4">
              <img 
                src="/images/Hyperbit_logo_black.svg" 
                alt="Hyperbit"
                className="h-6"
                style={{ filter: 'brightness(0) saturate(100%) invert(1)' }}
              />
            </div>
            <p className="text-sm text-foreground-inverse/60 leading-relaxed">
              {tagline}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
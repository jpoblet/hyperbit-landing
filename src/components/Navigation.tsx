import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Moon,
  Sun,
  ArrowUpRight,
  Equal,
  Monitor,
  ChevronDown,
  X,
  BookText,
  Globe,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Theme = "light" | "dark" | "system";

// Navigation configuration - change these to update all navigation items
const NAVIGATION_CONFIG = {
  brand: {
    name: "Hyperbit",
    shortName: "H",
    href: "/",
  },
  navItems: [
    { label: "Community", href: "#community", icon: Globe },
    { label: "Docs", href: "#docs", icon: BookText },
  ],
  cta: {
    label: "Open app",
    href: "#app",
  },
};

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [theme, setTheme] = useState<Theme>("system");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine scroll direction
      const scrollingUp = currentScrollY < lastScrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      // Show navigation if:
      // 1. At the top (scrollY <= 600)
      // 2. Scrolling up (regardless of position)
      if (currentScrollY <= 600 || scrollingUp) {
        setIsVisible(true);
      }
      // Hide navigation if scrolling down and past 600px
      else if (scrollingDown && currentScrollY > 600) {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
      setScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Apply theme based on selection
  useEffect(() => {
    const applyTheme = () => {
      const root = document.documentElement;

      if (theme === "system") {
        // Use system preference
        const systemPrefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)",
        ).matches;
        if (systemPrefersDark) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
      } else if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    applyTheme();

    // Listen for system theme changes when system is selected
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme();

      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  // Load saved theme preference on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["light", "dark", "system"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Save theme preference
  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Determine if navigation should have background (after scrolling starts)
  const hasBackground = scrollY > 0;

  // Get current theme icon
  const getThemeIcon = () => {
    switch (theme) {
      case "light":
        return <Sun className="w-5 h-5" />;
      case "dark":
        return <Moon className="w-5 h-5" />;
      case "system":
        return <Monitor className="w-5 h-5" />;
      default:
        return <Monitor className="w-5 h-5" />;
    }
  };

  return (
    <>
      <nav
        className={`fixed rounded-none md:rounded-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-32"
        } ${
          hasBackground
            ? "bg-white/40 dark:bg-white/10 backdrop-blur-3xl border-b md:border border-white/70 dark:border-white/20 md:mx-8 md:my-6"
            : "bg-transparent border border-transparent"
        }`}
      >
        <div className="pl-6 pr-4 py-4 md:pl-10 md:pr-5 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={NAVIGATION_CONFIG.brand.href}>
              <div className="flex items-center">
                <img
                  src="/images/Hyperbit_logo_black.svg"
                  alt={NAVIGATION_CONFIG.brand.name}
                  className="h-6 hidden sm:flex"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(var(--foreground-invert))",
                  }}
                />
                <img
                  src="/images/Hyperbit_glyph_black.svg"
                  alt={NAVIGATION_CONFIG.brand.shortName}
                  className="h-6 sm:hidden"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(var(--foreground-invert))",
                  }}
                />
              </div>
            </a>

            {/* Right side: Navigation Links + CTA + Theme Toggle */}
            <div className="flex items-center">
              {/* Navigation Links */}
              <div className="hidden md:flex items-center gap-2 text-sm">
                {NAVIGATION_CONFIG.navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 bg-transparent hover:bg-background h-12 pl-4 pr-5 rounded-full transition-all"
                    >
                      <IconComponent className="w-4 h-4" />
                      {item.label}
                    </a>
                  );
                })}
              </div>

              {/* CTA Button */}
              <Button className="flex gap-2 hover:gap-4 ml-6 hover:ml-4 mr-4 items-center text-sm font-normal bg-background-inverse hover:bg-background text-foreground-inverse hover:text-foreground h-12 pl-5 pr-4 rounded-full transition-all ">
                {NAVIGATION_CONFIG.cta.label}{" "}
                <ArrowUpRight className="w-4 h-4" />
              </Button>

              {/* Theme Toggle Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="h-12 px-3 rounded-full text-foreground hover:bg-background hidden md:flex items-center gap-1 data-[state=open]:bg-background data-[state=open]:border-foreground border border-transparent focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:ring-0 group"
                    aria-label="Toggle theme"
                  >
                    {getThemeIcon()}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-36 p-0 bg-background rounded-xl"
                >
                  <DropdownMenuItem
                    onClick={() => handleThemeChange("light")}
                    className="flex items-center gap-2 p-4 cursor-pointer hover:bg-background-secondary focus:bg-background-secondary"
                  >
                    <Sun className="w-4 h-4" />
                    Light
                    {theme === "light" && (
                      <div className="ml-auto w-2 h-2 bg-active rounded-full" />
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleThemeChange("dark")}
                    className="flex items-center gap-2 p-4 cursor-pointer hover:bg-background-secondary focus:bg-background-secondary"
                  >
                    <Moon className="w-4 h-4" />
                    Dark
                    {theme === "dark" && (
                      <div className="ml-auto w-2 h-2 bg-active rounded-full" />
                    )}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleThemeChange("system")}
                    className="flex items-center gap-2 p-4 cursor-pointer hover:bg-background-secondary focus:bg-background-secondary"
                  >
                    <Monitor className="w-4 h-4" />
                    System
                    {theme === "system" && (
                      <div className="ml-auto w-2 h-2 bg-active rounded-full" />
                    )}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <Button
                  size="icon"
                  className="text-foreground hover:bg-background rounded-full h-12 w-12"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <Equal className="w-7 h-7" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex items-center justify-between p-6">
          <img
            src="/images/Hyperbit_logo_black.svg"
            alt={NAVIGATION_CONFIG.brand.name}
            className="h-6"
            style={{
              filter:
                "brightness(0) saturate(100%) invert(var(--foreground-invert))",
            }}
          />
          <Button
            size="icon"
            className="text-foreground hover:bg-background-secondary rounded-full h-12 w-12"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="w-7 h-7" />
          </Button>
        </div>

        {/* Mobile Menu Content */}
        <div className="flex flex-col h-full px-6 pb-6">
          {/* Navigation Links */}
          <div
            className={`flex flex-col gap-8 mt-12 transition-all duration-500 delay-100 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {NAVIGATION_CONFIG.navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 text-3xl text-foreground hover:text-foreground-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <IconComponent className="w-8 h-8" />
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div
            className={`mt-12 transition-all duration-500 delay-200 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Button className="w-full flex gap-2 items-center text-lg font-normal bg-background-inverse hover:bg-background text-foreground-inverse hover:text-foreground h-14 rounded-full transition-all">
              {NAVIGATION_CONFIG.cta.label} <ArrowUpRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Theme Selection Dropdown */}
          <div
            className={`mt-12 transition-all duration-500 delay-300 ${
              isMobileMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-lg text-foreground mb-6">Theme</h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="w-full h-14 px-4 rounded-xl text-foreground hover:bg-background-secondary border border-foreground/20 data-[state=open]:bg-background-secondary data-[state=open]:border-foreground/40 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none focus:ring-0 group justify-between"
                  aria-label="Select theme"
                >
                  <div className="flex items-center gap-3">
                    {getThemeIcon()}
                    <span className="capitalize">{theme}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="w-full p-0 bg-background rounded-xl z-[70]"
                style={{ width: "var(--radix-dropdown-menu-trigger-width)" }}
                sideOffset={8}
              >
                <DropdownMenuItem
                  onClick={() => {
                    handleThemeChange("light");
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 p-4 cursor-pointer hover:bg-background-secondary focus:bg-background-secondary"
                >
                  <Sun className="w-5 h-5" />
                  <span>Light</span>
                  {theme === "light" && (
                    <div className="ml-auto w-3 h-3 bg-active rounded-full" />
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    handleThemeChange("dark");
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 p-4 cursor-pointer hover:bg-background-secondary focus:bg-background-secondary"
                >
                  <Moon className="w-5 h-5" />
                  <span>Dark</span>
                  {theme === "dark" && (
                    <div className="ml-auto w-3 h-3 bg-active rounded-full" />
                  )}
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => {
                    handleThemeChange("system");
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-3 p-4 cursor-pointer hover:bg-background-secondary focus:bg-background-secondary"
                >
                  <Monitor className="w-5 h-5" />
                  <span>System</span>
                  {theme === "system" && (
                    <div className="ml-auto w-3 h-3 bg-active rounded-full" />
                  )}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;

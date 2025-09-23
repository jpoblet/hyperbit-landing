import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import {
  Moon,
  Sun,
  ArrowRight,
  Equal,
  Monitor,
  ChevronDown,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

type Theme = "light" | "dark" | "system";

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Hide navigation after 600px scroll
      if (currentScrollY > 600) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed rounded-none md:rounded-full top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-32"
      } ${
        hasBackground
          ? "bg-white/40 dark:bg-white/10 backdrop-blur-3xl border-b md:border border-white/70 dark:border-white/20 md:mx-8 md:my-6"
          : "bg-transparent border border-transparent"
      }`}
    >
      <div className="pl-6 pr-4 py-4 md:pl-8 md:pr-5 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center">
              <div className="text-2xl text-foreground hidden sm:flex">
                Hyperbit
              </div>
              <div className="text-4xl text-foreground sm:hidden">H</div>
            </div>
          </a>

          {/* Right side: Navigation Links + CTA + Theme Toggle */}
          <div className="flex items-center">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-12 text-sm">
              <a
                href="#solutions"
                className="border-b border-1 border-transparent hover:border-foreground transition-colors "
              >
                Solutions
              </a>
              <a
                href="#technology"
                className="border-b border-1 border-transparent hover:border-foreground transition-colors "
              >
                Technology
              </a>
              <a
                href="#about"
                className="border-b border-1 border-transparent hover:border-foreground transition-colors "
              >
                About
              </a>
            </div>

            {/* CTA Button */}
            <Button className="flex gap-2 hover:gap-4 ml-12 hover:ml-10 mr-4 items-center text-sm font-normal bg-background-inverse hover:bg-background text-foreground-inverse hover:text-foreground h-12 pl-5 pr-4 rounded-full transition-all ">
              Launch app <ArrowRight className="w-4 h-4" />
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
              >
                <Equal className="w-7 h-7" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

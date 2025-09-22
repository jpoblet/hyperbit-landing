import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Moon, Sun, ArrowRight, Equal } from "lucide-react";

const Navigation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  // Determine if navigation should have background (after scrolling starts)
  const hasBackground = scrollY > 0;

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // You can add actual dark mode implementation here
    document.documentElement.classList.toggle("dark");
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

          {/* Right side: Navigation Links + CTA + Dark Mode Toggle */}
          <div className="flex items-center space-x-3">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-12 text-md mr-8">
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
            <Button className="flex gap-3 hover:gap-5 items-center text-md bg-background hover:bg-background-inverse font-normal hover:text-foreground-inverse h-12 pl-5 pr-4 rounded-full transition-all ">
              Launch app <ArrowRight className="w-4 h-4" />
            </Button>

            {/* Dark/Light Mode Toggle */}
            <Button
              onClick={toggleDarkMode}
              className="h-12 w-12 p-2 rounded-full text-foreground hover:bg-background transition-all "
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>

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

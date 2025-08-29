"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { LINKS } from "@/lib/constants";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <header className="bg-background/80 border-border fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-primary text-xl font-bold transition-colors"
            >
              EG
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              01. About
            </button>
            <button
              onClick={() => scrollToSection("apps")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              02. Apps
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              03. Contact
            </button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(`${LINKS.resume}`, "_blank")}
            >
              Resume
            </Button>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="h-9 w-9 p-0"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="h-9 w-9 p-0 md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-border border-t py-4 md:hidden">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground text-left transition-colors"
              >
                01. About
              </button>
              <button
                onClick={() => scrollToSection("apps")}
                className="text-muted-foreground hover:text-foreground text-left transition-colors"
              >
                02. Apps
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground text-left transition-colors"
              >
                03. Contact
              </button>
              <Button
                variant="outline"
                size="sm"
                className="w-fit bg-transparent"
                onClick={() => window.open(`${LINKS.resume}`, "_blank")}
              >
                Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

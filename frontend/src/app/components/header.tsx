"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // If not mounted yet, don't render theme-dependent parts to avoid mismatch
  if (!mounted) {
    return (
      <header className="w-full border-b sticky top-0 z-50 bg-background">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
                SoftSell
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            {/* ... other desktop links ... */}
            <Button
              variant="default"
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
            >
              Get Started
            </Button>
            {/* Don't render the theme toggle yet */}
          </nav>
          <div className="md:hidden flex items-center">
            {/* Don't render the theme toggle yet */}
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-background border-b">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {/* ... mobile links ... */}
              <Button
                variant="default"
                className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </header>
    );
  }

  return (
    <header className="w-full border-b sticky top-0 z-50 bg-background">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">
              SoftSell
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#how-it-works"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="#why-choose-us"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Why Choose Us
          </Link>
          <Link
            href="#testimonials"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Contact
          </Link>
          <Button
            variant="default"
            className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
          >
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#how-it-works"
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              How It Works
            </Link>
            <Link
              href="#why-choose-us"
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Why Choose Us
            </Link>
            <Link
              href="#testimonials"
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="text-foreground/80 hover:text-foreground transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Button
              variant="default"
              className="bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 w-full"
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

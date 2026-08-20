"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            className="text-lg font-bold text-white"
          >
            JP
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="flex items-center gap-6">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>

          {/* Desktop Resume */}
          <div className="hidden md:block">
            <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
              <Button>
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t border-zinc-800 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}

              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full">
                  Resume
                </Button>
              </a>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
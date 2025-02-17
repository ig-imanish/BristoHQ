"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { text: "Services", href: "#services" },
  { text: "Work", href: "#projects" },
  { text: "About", href: "#about" },
  { text: "Team", href: "#team" },
  { text: "Contact Us", href: "/contact", isButton: true }
];

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
    className={`w-auto fixed left-0 right-0 top-0 bg-white shadow-md flex items-center justify-between px-6 py-4 mx-4 mt-2 z-50 
    md:rounded-lg md:border-b md:border-gray-300
    ${mobileMenuOpen ? "rounded-t-lg rounded-b-none border-none md:rounded-lg md:border-b md:border-gray-300" : "rounded-lg border-b border-gray-300"}`}
  >
      {/* Logo/Brand */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.webp"
          alt="Bristo HQ"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-black">Bristo HQ</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          link.isButton ? (
            <Link key={link.href} href={link.href}>
              <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full px-5 py-2">
                {link.text}
              </Button>
            </Link>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors rounded-md text-black hover:text-[#5865F2] font-medium"
            >
              {link.text}
            </Link>
          )
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden rounded-full p-2 hover:bg-gray-200"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
      </button>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div
          className={`absolute top-full left-0 right-0 bg-white shadow-md flex flex-col items-center py-4 space-y-4 md:hidden 
          ${mobileMenuOpen ? "rounded-b-lg" : "rounded-none"}`}
        >
          {navLinks.map((link) => (
            link.isButton ? (
              <Link key={link.href} href={link.href} className="w-full text-center">
                <Button className="bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full px-5 py-2 w-11/12">
                  {link.text}
                </Button>
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-[#5865F2] font-medium w-full text-center py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.text}
              </Link>
            )
          ))}
        </div>
      )}
    </nav>
  );
}

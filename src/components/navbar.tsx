"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  {
    text: "Services",
    href: "#services"
  },
  {
    text: "Work", 
    href: "#projects"
  },
  {
    text: "About",
    href: "#about"
  },
  {
    text: "Team",
    href: "#team"
  },
  {
    text: "Contact Us",
    href: "/contact",
    isButton: true
  }
];

export default function Navigation() {
 
  return (
    <nav className="flex items-center justify-between py-4 w-full">
      {/* Logo/Brand */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.webp"
          alt="Bristo HQ"
          width={32}
          height={32}
          className="rounded-full"
        />
        <span className="text-xl font-bold text-[#5865F2]">Bristo HQ</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          link.isButton ? (
            <Button 
              key={link.href}
              className={`bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full `}
            >
              {link.text}
            </Button>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors rounded-md text-white hover:text-[#5865F2]`}
            >
              {link.text}
            </Link>
          )
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden rounded-full p-2 hover:bg-gray-800">
        <Menu className="w-6 h-6" />
      </button>
    </nav>
  );
}
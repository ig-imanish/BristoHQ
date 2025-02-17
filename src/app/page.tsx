"use client";

import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navigation from "@/components/navbar";
import Projects from "@/components/projects";
import Team from "@/components/team";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const recordVisit = async () => {
      try {
        await fetch('/api/message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: 'BristoHQ',
            email: 'bristohq@gmail.com',
            message: 'Someone visited the website',
          }),
        });
      } catch (error) {
        console.error('Failed to record visit:', error);
      }
    };

    recordVisit();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </header>
      <main className="flex-1 pt-24">
        <Hero />
        <About />
        <Projects />
        <Team />
      </main>
      <Footer />
    </div>
  );
}

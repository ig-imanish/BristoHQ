"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const HeroSections = [
  {
    title: "Building the Future with",
    titleHighlight: "AI Innovation",
    description: "We specialize in creating cutting-edge AI solutions that revolutionize how businesses operate. From machine learning to natural language processing, we turn AI possibilities into practical realities.",
    buttons: [
      {
        text: "Get Started",
        variant: "primary",
      },
      {
        text: "Learn More",
        variant: "outline",
      }
    ],
    image: "/hero-1.png",
    imageAlt: "Digital Solutions",
    reverse: false
  },
  {
    title: "Transform Your Vision",
    titleHighlight: "Into Reality", 
    description: "Experience the power of cutting-edge technology combined with expert guidance. Our comprehensive solutions help you navigate digital transformation and achieve measurable results.",
    buttons: [
      {
        text: "Contact Us",
        variant: "primary",
      },
      {
        text: "View Services",
        variant: "outline",
      }
    ],
    image: "/hero-2.png",
    imageAlt: "alt",
    reverse: true
  }
];
export default function Hero() {
    return (
        <>
            {HeroSections.map((section, index) => (
                <section key={index} className="py-16 md:py-28 px-4 md:px-8">
                    <div className="container mx-auto">
                        <div className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 md:gap-16`}>
                            {/* Content Side */}
                            <div className="flex-1 space-y-6 md:space-y-8">
                                <div className="relative">
                                
                                    {/* Content */}
                                    <div className="backdrop-blur-sm bg-gradient-to-br from-gray-900/95 via-gray-900/98 to-gray-800/95 p-8 md:p-10 rounded-3xl border border-gray-800/50 hover:border-[#5865F2]/30 transition-all duration-500 shadow-2xl shadow-black/20">
                                        <div className="space-y-6">
                                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                                                {section.title}{" "}
                                                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#5865F2] to-purple-500">
                                                    {section.titleHighlight}
                                                </span>
                                            </h1>
                                            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                                                {section.description}
                                            </p>
                                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                                {section.buttons.map((button, buttonIndex) => (
                                                    <Button
                                                        key={buttonIndex}
                                                        variant={button.variant === "primary" ? "default" : "outline"}
                                                        className={`
                                                            group relative overflow-hidden rounded-full px-8 py-6 text-lg font-medium transition-all duration-300
                                                            ${button.variant === "primary" 
                                                                ? "bg-gradient-to-r from-[#5865F2] to-purple-500 text-white hover:shadow-lg hover:shadow-[#5865F2]/25" 
                                                                : "border-[#5865F2] text-[#5865F2] hover:bg-[#5865F2]/10"
                                                            }
                                                        `}
                                                    >
                                                        {button.text}
                                                    </Button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Image Side */}
                            <div className="flex-1 relative w-full">
                                <div className="relative w-full aspect-square">
                                    <div className="absolute inset-0 rounded-3xl overflow-hidden">
                                        <Image
                                            src={section.image}
                                            alt={section.imageAlt}
                                            fill
                                            quality={100}
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 hover:scale-105"
                                            priority
                                        />
                                    </div>
                                    <div className="absolute -z-10 inset-0 bg-[#5865F2]/20 blur-[100px] rounded-full transform scale-90" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </>
    );
}

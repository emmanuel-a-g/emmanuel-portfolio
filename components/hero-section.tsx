"use client";

import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-4 pt-20 sm:px-6 sm:pt-20 lg:px-8 lg:pt-24"
    >
      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-up">
          <div className="ring-primary/20 mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full ring-4">
            <Image
              src="/emmanuel-circle.png"
              alt="Emmanuel Garcia"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>
        </div>

        <div className="animate-fade-in-up animate-delay-100">
          <p className="text-muted-foreground mb-4 text-lg">Hi, my name is</p>
          <h1 className="text-foreground mb-6 text-4xl font-bold sm:text-6xl lg:text-7xl">
            <span className="text-balance">Emmanuel Garcia,</span>
          </h1>
          <h2 className="text-primary mb-8 text-2xl font-bold sm:text-4xl lg:text-5xl">
            <span className="text-balance">full stack software developer.</span>
          </h2>
        </div>

        <div className="animate-fade-in-up animate-delay-200">
          <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-lg text-balance">
            Welcome to my hub! I specialize in building exceptional digital
            experiences with modern web technologies. Feel free to explore my
            work and get in touch.
          </p>
        </div>

        <div className="animate-fade-in-up animate-delay-300">
          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              onClick={() => scrollToSection("apps")}
              className="w-full sm:w-auto"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0"
              onClick={() => window.open(LINKS.github, "_blank")}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0"
              onClick={() => window.open(LINKS.linkedin, "_blank")}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="h-10 w-10 p-0"
              onClick={() => scrollToSection("contact")}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce">
          <Button
            variant="ghost"
            size="sm"
            className="h-10 w-10 p-0"
            onClick={() => scrollToSection("about")}
          >
            <ArrowDown className="h-5 w-5" />
            <span className="sr-only">Scroll down</span>
          </Button>
        </div>
      </div>
    </section>
  );
}

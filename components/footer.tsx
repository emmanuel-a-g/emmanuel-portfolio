"use client";

import { Button } from "@/components/ui/button";
import { LINKS } from "@/lib/constants";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
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
              onClick={() => window.open(`mailto:${LINKS.email}`)}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>

          {/* Copyright */}
          <div className="space-y-2 text-center">
            <p className="text-muted-foreground flex items-center justify-center gap-1 text-sm">
              Built with <Heart className="h-4 w-4 text-red-500" /> by Emmanuel
              Garcia
            </p>
            <p className="text-muted-foreground text-xs">
              © {currentYear} Emmanuel Garcia. All rights reserved.
            </p>
          </div>

          {/* Back to Top */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
}

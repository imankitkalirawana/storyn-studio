"use client";
import { ArrowUpRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-foreground text-background py-24 px-6 md:px-12 flex flex-col justify-between min-h-[80vh]"
    >
      <div>
        <h2 className="text-6xl md:text-[10rem] font-serif leading-none tracking-tight mb-8">
          Let&apos;s Talk.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-background/20 pt-12">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-background/50 mb-6">
            Contact
          </h3>
          <a
            href="mailto:hello@storyn.com"
            className="text-2xl md:text-3xl hover:text-default-hover transition-colors block mb-2"
          >
            hello@storyn.com
          </a>
          <p className="text-lg text-background/70">+61 3 9999 9999</p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-background/50 mb-6">
            Social
          </h3>
          <div className="flex flex-col gap-2">
            <a
              target="_blank"
              href="https://www.instagram.com/storyn.studio/"
              className="text-lg hover:text-default-hover transition-colors flex items-center gap-2"
            >
              Instagram <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="text-lg hover:text-default-hover transition-colors flex items-center gap-2"
            >
              LinkedIn <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-background/50 mb-6">
            Address
          </h3>
          <p className="text-lg text-background/70">
            Gurugram
            <br />
            Haryana
            <br />
            India
          </p>
        </div>
      </div>

      <div className="mt-24 text-xs text-background/30 uppercase tracking-widest flex justify-between">
        <span>Storyn Studio © {new Date().getFullYear()}</span>
        <span>Site by Storyn</span>
      </div>
    </footer>
  );
};

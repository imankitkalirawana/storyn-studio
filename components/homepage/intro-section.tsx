"use client";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import Image from "next/image";

const DESIGN_MIX_ART =
  "https://images.unsplash.com/photo-1741335661678-d6df6ef05ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

export const IntroSection = () => {
  return (
    <section className="bg-white py-24 px-4 md:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24">
        {/* Left: Music Player Card */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -5 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-white p-4 rounded-[2rem] shadow-xl border border-gray-100 max-w-xs w-full"
        >
          <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-4">
            <Image
              src={DESIGN_MIX_ART}
              alt="Design Mix Art"
              className="w-full h-full object-cover"
              fill
            />
          </div>
          <div className="flex items-center justify-between px-2 pb-2">
            <div>
              <h3 className="text-lg font-bold text-black">
                &apos;26 Design Mix
              </h3>
              <p className="text-xs text-gray-500 font-medium mt-0.5">
                Deep focus & creative flows
              </p>
            </div>
            <button className="flex items-center gap-1 bg-black text-white pl-4 pr-3 py-2 rounded-full text-xs font-bold hover:bg-gray-800 transition-colors">
              Play <Play size={10} fill="currentColor" />
            </button>
          </div>
        </motion.div>

        {/* Center: Main Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex-1 text-center space-y-6"
        >
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-medium tracking-tight leading-tight text-gray-400">
            Hi! We are{" "}
            <span className="text-black font-bold">Storyn Studio</span>.<br />
            We build brands that don&apos;t just
            <br />
            look good, they{" "}
            <span className="text-pink-500 italic font-serif">feel</span> good.
          </h2>
          <p className="text-sm font-bold text-gray-300 uppercase tracking-widest">
            Based in Melbourne · Digital & Chill
          </p>
        </motion.div>

        {/* Right: Sticker/Badge */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 15 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Starburst Background */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -m-6 z-0"
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-gray-50 fill-current"
            >
              {/* Simple 12-point star/burst shape */}
              <path d="M100 0 L115 35 L150 25 L145 60 L180 70 L155 95 L180 120 L145 130 L150 165 L115 155 L100 190 L85 155 L50 165 L55 130 L20 120 L45 95 L20 70 L55 60 L50 25 L85 35 Z" />
            </svg>
          </motion.div>

          {/* Circle Image */}
          <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBjdWx0dXJlLHdvcmtpbmclMjBwbGFjZXxlbnwxfHx8fDE3NzAwMjQ1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Office Vibe"
              className="w-full h-full object-cover grayscale contrast-125"
              fill
              sizes="192px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

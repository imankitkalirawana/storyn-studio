"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Starburst, SpikyCircle, Flower } from "./stickers";
import Image from "next/image";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background/Floating Elements Area */}
      <div className="relative w-full max-w-7xl h-full flex flex-col items-center justify-center z-10">
        {/* Row 1: Images & "Brands" */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12 w-full mb-4">
          {/* Left Image (Graffiti) */}
          <motion.div
            className="hidden md:block w-48 h-32 rounded-2xl overflow-hidden border-2 border-foreground/10 -rotate-6 relative"
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.8 }}
            drag
            dragConstraints={containerRef}
          >
            <Image
              src="https://images.unsplash.com/photo-1769613758100-a5d12762b1ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFmZml0aSUyMG11cmFsJTIwYXJ0JTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwMDI1NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Graffiti"
              fill
              className="object-cover"
              sizes="192px"
            />
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter z-20">
            Brands
          </h1>

          {/* Right Image (Portrait) */}
          <motion.div
            className="hidden md:block w-40 h-56 rounded-full overflow-hidden border-2 border-foreground/10 rotate-6 translate-y-8 relative"
            initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
            animate={{ opacity: 1, scale: 1, rotate: 6 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            drag
            dragConstraints={containerRef}
          >
            <Image
              src="https://images.unsplash.com/photo-1747767807272-e91bc322065f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1cmJhbiUyMHN0cmVldCUyMGFydCUyMHBvcnRyYWl0JTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwMDI1NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Urban"
              fill
              className="object-cover"
              sizes="160px"
            />
          </motion.div>
        </div>

        {/* Row 2: Star, "& Products", Flower */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 w-full relative">
          {/* Pink Starburst */}
          <motion.div
            className="absolute left-[10%] -top-12 md:relative md:left-auto md:top-auto w-24 h-24 text-accent z-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Starburst className="w-full h-full drop-shadow-[0_4px_10px_rgba(236,72,153,0.3)]" />
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter z-20 flex items-center gap-4">
            <span className="font-serif italic font-light">&</span> Products
          </h1>

          {/* Play Button Pill (Holographic Flower) */}
          <motion.button
            className="hidden md:block w-20 h-20 hover:scale-110 transition-transform"
            animate={{ rotate: -360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Flower className="w-full h-full drop-shadow-xl" />
          </motion.button>
        </div>

        {/* Bottom Area */}
        <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Music Card */}
          <motion.div
            className="bg-white rounded-3xl p-4 flex flex-col gap-4 max-w-xs mx-auto md:mx-0 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            drag
            dragConstraints={containerRef}
          >
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1741335661678-d6df6ef05ae7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHBzeWNoZWRlbGljJTIwY29sb3JmdWwlMjBhbGJ1bSUyMGFydHxlbnwxfHx8fDE3NzAwMjU1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Album Art"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-lg leading-none mb-1 text-black">
                  &apos;26 Design Mix
                </h3>
                <p className="text-xs text-gray-500">
                  Deep focus & creative flows
                </p>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-full flex items-center gap-1 font-bold text-sm hover:bg-gray-800 transition-colors">
                Play <Play size={14} fill="currentColor" />
              </button>
            </div>
          </motion.div>

          {/* Description Text */}
          <motion.div
            className="text-center text-xl md:text-2xl font-medium text-gray-500 leading-relaxed px-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p>
              Hi! We are{" "}
              <span className="text-black font-bold">Storyn Studio</span>.
              <br />
              We build brands that don&apos;t just look good, they{" "}
              <span className="italic text-pink-500">feel</span> good.
              <br />
              <span className="text-sm text-gray-400 mt-4 block">
                Based in Melbourne · Digital & Chill
              </span>
            </p>
          </motion.div>

          {/* Profile Circle */}
          <div className="relative flex justify-center items-center">
            <motion.div
              className="absolute inset-0 text-black/5 scale-150"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <SpikyCircle className="w-full h-full" />
            </motion.div>

            <motion.div
              className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1743691259195-1f3c8115ce65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXQlMjBibGFjayUyMGFuZCUyMHdoaXRlJTIwdXJiYW58ZW58MXx8fHwxNzcwMDI1NTQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Profile"
                fill
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                sizes="160px"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

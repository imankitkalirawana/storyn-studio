"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { Flower } from "./stickers";
import Image from "next/image";
import MovingStrip from "./moving-strip";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background/Floating Elements Area */}
      <div className="relative w-full  h-full flex flex-col items-center justify-center z-10">
        {/* Row 1: Images & "Brands" */}
        <div className="flex  flex-row w-full pt-10 pb-32 items-center justify-center ">
          <div className="flex flex-col md:flex-row   justify-center gap-4 md:gap-12 w-full ">
            {/* Left Image (Graffiti) */}
            <motion.div
              className="hidden md:block w-60 h-40  rounded-2xl overflow-hidden border-2  -rotate-6   relative"
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
                sizes="(max-width: 768px) 100vw, 192px"
              />
            </motion.div>
            <div className="flex items-center justify-center">
              <span className="text-[256px] font-serif  text-[#FB6514]">&</span>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter z-20">
              Brands
            </h1>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter z-20 flex items-center gap-4">
              Products
            </h1>
          </div>

          {/* Right Image (Portrait) */}
          {/* Row 2: Star, "& Products", Flower */}
          <div className="flex   justify-center gap-2 md:gap-8 w-full relative">
            <motion.div
              className="hidden md:block w-40 h-56 rounded-full overflow-hidden border-2 border-foreground/10 rotate-6 relative"
              initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ duration: 0.8, delay: 0.2 }}
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

            {/* Play Button Pill (Holographic Flower) */}
            <motion.button
              className="hidden md:block w-20 h-20 hover:scale-110 transition-transform"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Flower className="w-full h-full drop-shadow-xl" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

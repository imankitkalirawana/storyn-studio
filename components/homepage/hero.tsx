"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { Flower } from "./stickers";
import Image from "next/image";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[90vh] pt-30 w-full flex items-center justify-center overflow-hidden px-4"
    >
      {/* LEFT IMAGE */}
      <motion.div
        className="absolute left-50 top-52 w-60 h-40 rounded-2xl overflow-hidden border-2 -rotate-6"
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ duration: 0.8 }}
        drag
        dragConstraints={containerRef}
      >
        <Image
          src="https://images.unsplash.com/photo-1769613758100-a5d12762b1ce"
          alt="Graffiti"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        className="absolute right-60 top-42 w-50 h-70 rounded-full overflow-hidden border-2"
        initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
        animate={{ opacity: 1, scale: 1, rotate: 6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        drag
        dragConstraints={containerRef}
      >
        <Image src="/hero.jpg" alt="Urban" fill className="object-cover" />
      </motion.div>

      {/* FLOWER BUTTON */}
      <motion.button
        className="absolute right-40 bottom-32 w-30 h-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Flower className="w-full h-full drop-shadow-xl" />
      </motion.button>

      {/* MAIN TEXT */}
      <div className="relative z-10 flex items-center">
        <div className="flex items-center">
          <span className="text-[300px] font-serif text-accent translate-y-2 italic ">
            &
          </span>
          <div>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter">
              Brands
            </h1>
            <h1 className="text-7xl md:text-9xl font-bold tracking-tighter">
              Products
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

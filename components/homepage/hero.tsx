"use client";
import { useRef } from "react";
import { motion } from "motion/react";
import { Flower, Starburst } from "./stickers";
import Image from "next/image";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh]  md:min-h-[90vh] pt-20 md:pt-30 w-full flex items-center justify-center overflow-hidden px-4"
    >
      {/* LEFT IMAGE - smaller on mobile, desktop unchanged */}
      <motion.div
        className="absolute left-0 top-40 w-44 h-34 md:left-50 md:top-52 md:w-60 md:h-40 rounded-xl md:rounded-2xl overflow-hidden border-2 -rotate-6"
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 1, scale: 1, rotate: -6 }}
        transition={{ duration: 0.8 }}
        dragConstraints={containerRef}
      >
        <Image
          src="/hero(2).png"
          alt="Graffiti"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* STARBURST pink - smaller on mobile */}
      <motion.div
        className="absolute -left-15 top-106 w-40 h-40 md:left-[-80] md:top-96 md:w-60 md:h-60 text-pink-500 z-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Starburst className="w-full h-full drop-shadow-[0_4px_10px_rgba(236,72,153,0.3)]" />
      </motion.div>

      {/* RIGHT IMAGE - smaller on mobile */}
      <motion.div
        className="absolute right-0 top-32 w-28 h-40 md:right-60 md:top-42 md:w-50 md:h-70 rounded-full overflow-hidden border-2"
        initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
        animate={{ opacity: 1, scale: 1, rotate: 6 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        dragConstraints={containerRef}
      >
        <Image src="/hero.jpg" alt="Urban" fill className="object-cover" />
      </motion.div>

      {/* FLOWER BUTTON - smaller on mobile */}
      <motion.button
        className="absolute right-12 bottom-30 w-20 h-20 md:right-40 md:bottom-32 md:w-30 md:h-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Flower className="w-full h-full drop-shadow-xl" />
      </motion.button>

      {/* MAIN TEXT - scaled down on mobile, desktop unchanged */}
      <div className="relative z-10 flex items-center">
        <div className="flex items-center">
          <span className="text-[100px] sm:text-[140px] md:text-[300px] font-serif text-accent translate-y-2 italic leading-none">
            &
          </span>
          <div className="text-[50px] sm:text-5xl md:text-9xl font-bold tracking-tighter leading-none">
            <h1>Brands</h1>
            <h1>Products</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

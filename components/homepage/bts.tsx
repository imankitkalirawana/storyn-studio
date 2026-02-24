"use client";
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "motion/react";
import { wrap } from "@motionone/utils";
import { Star } from "lucide-react";
import Image from "next/image";
import { bts } from "@/data/bts";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 50 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  // Wrap logic adjusted for content width
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Change direction based on scroll direction
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden m-0 flex flex-nowrap whitespace-nowrap w-full">
      <motion.div className="flex flex-nowrap gap-4 md:gap-8" style={{ x }}>
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

export const BehindTheScenes = () => {
  return (
    <section className="pb-32 overflow-hidden border-t border-border/50">
      <div className="mb-24 px-6 md:px-12 py-6 flex items-end justify-between max-w-[1920px] mx-auto">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Behind the <br />
            <span className="text-default">Scenes.</span>
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-8 md:gap-12 relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

        <ParallaxText baseVelocity={-1}>
          {bts.map((t, i) => (
            <ReviewCard key={`r1-${i}`} data={t} />
          ))}
        </ParallaxText>

        <ParallaxText baseVelocity={1}>
          {bts.map((t, i) => (
            <ReviewCard key={`r2-${i}`} data={t} isDark />
          ))}
        </ParallaxText>
      </div>
    </section>
  );
};

const ReviewCard = ({
  data,
  isDark = false,
}: {
  data: {
    id: number;
    text: string;
    author: string;
    role: string;
    img: string;
  };
  isDark?: boolean;
}) => {
  return (
    <div
      className={`
      relative group
      w-[300px] md:w-[400px] 
      shrink-0 
      p-6 md:p-8 rounded-[2rem] 
      ${isDark ? "bg-black text-white" : "bg-gray-100 text-black"}
      transition-all duration-500
      hover:scale-[1.02]
      cursor-pointer
      whitespace-normal
    `}
    >
      <div className="flex justify-between items-start mb-6 md:mb-8">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${isDark ? "fill-white text-white" : "fill-black text-black"}`}
            />
          ))}
        </div>
        <div
          className={`text-[10px] md:text-xs font-bold uppercase tracking-widest ${isDark ? "text-gray-500" : "text-gray-400"}`}
        >
          Verified
        </div>
      </div>

      <p className="text-lg md:text-xl font-medium leading-tight mb-6 md:mb-8 font-serif">
        &quot;{data.text}&quot;
      </p>

      <div className="flex items-center gap-4">
        <div
          className={`w-10 h-10 rounded-full overflow-hidden ${isDark ? "bg-gray-800" : "bg-white"}`}
        >
          <Image
            src={data.img}
            alt={data.author}
            className="w-full h-full rounded-4xl object-cover grayscale group-hover:grayscale-0 transition-all"
            fill
          />
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide">
            {data.author}
          </p>
          <p
            className={`text-[10px] md:text-xs uppercase tracking-widest ${isDark ? "text-gray-500" : "text-gray-500"}`}
          >
            {data.role}
          </p>
        </div>
      </div>
    </div>
  );
};

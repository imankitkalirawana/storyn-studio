"use client";
import { motion } from "motion/react";
import Image from "next/image";
import { Play } from "lucide-react";
import { SpikyCircle } from "./stickers";
import { useRef } from "react";

export default function AboutUs() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <section
        ref={containerRef}
        className="relative w-full flex flex-col items-center justify-center overflow-hidden px-4 "
      >
        <div className="w-full mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl">
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
              Every brand has a story. we make yours{" "}
              <span className="italic text-accent font-bold font-serif">
                Unforgettable.
              </span>
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
      </section>
    </>
  );
}

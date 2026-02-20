"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Palette,
  Layers,
  Monitor,
  Smartphone,
  Layout,
  Code,
  Heart,
} from "lucide-react";
import Image from "next/image";

// Data for the bubbles
const skills = [
  // Active Skills (Center Intersection)
  {
    id: "branding",
    label: "branding",
    x: 32,
    y: 55,
    active: true,
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1589829100333-e215933ccd67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGlkZW50aXR5JTIwbW9ja3VwJTIwY29sb3JmdWx8ZW58MXx8fHwxNzcwMDI0NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "bg-zinc-800",
  },
  {
    id: "brand-strategy",
    label: "brand strategy",
    x: 28,
    y: 70,
    active: true,
    icon: Heart,
    image:
      "https://images.unsplash.com/photo-1655704705321-3ac52dc67f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0JTIwY29sb3JmdWwlMjBzaGFwZXMlMjBhcHAlMjBpY29uJTIwc3R5bGV8ZW58MXx8fHwxNzcwMDI0NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "bg-zinc-900",
  },
  {
    id: "web-design",
    label: "web design",
    x: 38,
    y: 82,
    active: true,
    icon: Monitor,
    image:
      "https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBsYW5kaW5nJTIwcGFnZSUyMG1pbmltYWwlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAwMjQ1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "bg-zinc-800",
  },
  {
    id: "ui-ux",
    label: "ui/ux design",
    x: 52,
    y: 70,
    active: true,
    icon: Layout,
    image:
      "https://images.unsplash.com/photo-1744692149286-5c8b73250f59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMHV4JTIwbW9iaWxlJTIwc2NyZWVuJTIwY29sb3JmdWwlMjBtb2Rlcm58ZW58MXx8fHwxNzcwMDI0NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "bg-zinc-900",
  },
  {
    id: "app-design",
    label: "app design",
    x: 65,
    y: 55,
    active: true,
    icon: Smartphone,
    image:
      "https://images.unsplash.com/photo-1655704705321-3ac52dc67f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzZCUyMGFic3RyYWN0JTIwY29sb3JmdWwlMjBzaGFwZXMlMjBhcHAlMjBpY29uJTIwc3R5bGV8ZW58MXx8fHwxNzcwMDI0NTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "bg-zinc-800",
  },
  {
    id: "web-dev",
    label: "web app development",
    x: 62,
    y: 82,
    active: true,
    icon: Code,
    image:
      "https://images.unsplash.com/photo-1648134859211-4a1b57575f4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBsYW5kaW5nJTIwcGFnZSUyMG1pbmltYWwlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAwMjQ1NzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "bg-zinc-900",
  },

  // Inactive Skills (Brand Side - Left)
  { id: "printing", label: "printing services", x: 22, y: 45, active: false },
  { id: "packaging", label: "packaging design", x: 18, y: 58, active: false },
  { id: "pr", label: "pr campaigns", x: 15, y: 72, active: false },
  { id: "video", label: "video productions", x: 20, y: 85, active: false },

  // Inactive Skills (Product Side - Right)
  { id: "data", label: "data science", x: 75, y: 45, active: false },
  {
    id: "production",
    label: "production planning",
    x: 82,
    y: 58,
    active: false,
  },
  { id: "gtm", label: "gtm strategy", x: 78, y: 72, active: false },
  { id: "smm", label: "smm", x: 85, y: 72, active: false },
  { id: "writing", label: "product writing", x: 85, y: 85, active: false },
];

export const Intersection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeSkillData = skills.find((s) => s.id === hoveredSkill);

  return (
    <section className="bg-white py-24 px-6 md:px-12 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
          <h2 className="text-4xl md:text-6xl font-serif text-black max-w-xl leading-[1.1]">
            At the intersection of <br />
            product and brand
          </h2>
          <p className="text-gray-600 max-w-md leading-relaxed">
            With over 2+ years of experience, our offerings have evolved into a
            set of services that complement each other, allowing us to design,
            develop, and extend a consistent experience across all touchpoints.
          </p>
        </div>

        {/* Interactive Visualization */}
        <div className="relative w-full aspect-video md:aspect-2/1 min-h-[600px] flex items-center justify-center">
          {/* Axis Labels */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black/80 z-10">
            Brand <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black/80 z-10">
            <div className="w-2 h-2 rounded-full bg-black"></div> Product
          </div>

          {/* Dashed Circles */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Large Circle */}
            <div className="w-[80%] h-[120%] border border-dashed border-gray-300 rounded-[50%] absolute" />
            {/* Inner Circle */}
            <div className="w-[50%] h-[80%] border border-dashed border-gray-300 rounded-[50%] absolute" />
            {/* Center Line */}
            <div className="w-full h-px border-t border-dashed border-gray-200 absolute top-1/2 left-0" />
          </div>

          {/* Central Preview Area */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 z-20 w-64 h-48 pointer-events-none perspective-[1000px]">
            <AnimatePresence mode="wait">
              {activeSkillData ? (
                <motion.div
                  key={activeSkillData.id}
                  initial={{ opacity: 0, rotateX: 10, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateX: -10, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={activeSkillData.image || ""}
                    alt={activeSkillData.label}
                    className="w-full h-full object-cover rounded-xl shadow-2xl rotate-[-5deg] border-4 border-white"
                  />
                  {/* Decorative floating elements */}
                  <div
                    className={`absolute -right-4 -bottom-4 w-12 h-12 ${activeSkillData.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                  >
                    {React.createElement(activeSkillData.icon || Palette, {
                      size: 20,
                    })}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <span className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Mastery Area
                  </span>
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                    <Layers className="w-6 h-6" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Skills Bubbles */}
          <div className="absolute inset-0 z-30">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.id}
                  style={{
                    position: "absolute",
                    left: `${skill.x}%`,
                    top: `${skill.y}%`,
                  }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 3 + index * 0.2, // Randomize slightly
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.1,
                  }}
                  className="group"
                >
                  <button
                    onMouseEnter={() =>
                      skill.active && setHoveredSkill(skill.id)
                    }
                    onMouseLeave={() => setHoveredSkill(null)}
                    className={`
                      relative -translate-x-1/2 -translate-y-1/2 px-5 py-2.5 rounded-full flex items-center gap-3 transition-all duration-300
                      ${
                        skill.active
                          ? `${hoveredSkill === skill.id ? "scale-110 bg-black" : "bg-zinc-800"} text-white shadow-xl hover:shadow-2xl z-20`
                          : "bg-white/80 border border-gray-200 text-gray-400 z-10 hover:border-gray-300 hover:text-gray-500"
                      }
                    `}
                  >
                    {skill.active && Icon && (
                      <Icon
                        className={`w-4 h-4 ${hoveredSkill === skill.id ? "text-purple-400" : "text-purple-300"}`}
                      />
                    )}
                    <span
                      className={`text-sm font-medium whitespace-nowrap ${skill.active ? "tracking-wide" : ""}`}
                    >
                      {skill.label}
                    </span>

                    {/* Active tooltip arrow */}
                    {skill.active && hoveredSkill === skill.id && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 -mt-1"></div>
                    )}
                  </button>

                  {/* Connecting lines for effect? (Optional, maybe too messy) */}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

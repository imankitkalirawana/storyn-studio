"use client";
import React, { useState, useEffect, useRef } from "react";
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

const SECTION_IN_VIEW_DELAY_MS = 1000;
const MOBILE_CYCLE_DURATION_MS = 1500;

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

const activeSkillsList = skills.filter(
  (s) => s.active && "icon" in s && s.icon && "image" in s && s.image,
) as Array<
  (typeof skills)[number] & {
    icon: React.ComponentType<{ className?: string; size?: number }>;
    image: string;
    color: string;
  }
>;

export const Intersection = () => {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [sectionInView, setSectionInView] = useState(false);
  const [mobileCycleIndex, setMobileCycleIndex] = useState(0);
  const [mobileCycleStarted, setMobileCycleStarted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const cycleTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startDelayRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeSkillData = skills.find((s) => s.id === hoveredSkill);

  // Detect mobile viewport (set initial in callback to avoid sync setState in effect)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    const id = requestAnimationFrame(() => setIsMobile(mq.matches));
    return () => {
      mq.removeEventListener("change", handler);
      cancelAnimationFrame(id);
    };
  }, []);

  // Intersection: section in view (for mobile auto-cycle)
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setSectionInView(true);
        else setSectionInView(false);
      },
      { threshold: 0.2, rootMargin: "0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Mobile: after 2s delay when in view, cycle through active skills one by one
  useEffect(() => {
    if (!isMobile || !sectionInView || activeSkillsList.length === 0) return;
    startDelayRef.current = setTimeout(() => {
      setMobileCycleStarted(true);
      setMobileCycleIndex(0);
      cycleTimerRef.current = setInterval(() => {
        setMobileCycleIndex((i) => (i + 1) % activeSkillsList.length);
      }, MOBILE_CYCLE_DURATION_MS);
    }, SECTION_IN_VIEW_DELAY_MS);
    return () => {
      setMobileCycleStarted(false);
      if (startDelayRef.current) clearTimeout(startDelayRef.current);
      if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
    };
  }, [isMobile, sectionInView]);

  const displayedSkill =
    isMobile && sectionInView && mobileCycleStarted
      ? activeSkillsList[mobileCycleIndex]
      : activeSkillData;

  return (
    <section
      ref={sectionRef}
      className="bg-white py-0 md:py-24 px-6 md:px-12 overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-6 md:gap-12">
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
        <div className="relative w-full aspect-video md:aspect-2/1 min-h-[400px] md:min-h-[600px] flex items-center justify-center">
          {/* Axis Labels */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black/80 z-10">
            Brand <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-black/80 z-10">
            <div className="w-2 h-2 rounded-full bg-black"></div> Product
          </div>

          {/* Dashed Circles - concentric circles (same center, both round) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Large circle */}
            <div className="absolute w-[70%] md:w-[80%] md:h-[120%]  aspect-square border border-dashed border-gray-300 rounded-full md:rounded-[50%] md:absolute" />
            {/* Inner circle */}
            <div className=" md:w-[50%] md:h-[80%] md:rounded-[50%] absolute w-[42%] aspect-square border border-dashed border-gray-300 rounded-full" />
            {/* Center Line */}
            <div className="w-full h-px border-t border-dashed border-gray-200 absolute top-1/2 left-0" />
          </div>

          {/* Central Preview Area */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 z-20 w-64 h-48 pointer-events-none perspective-[1000px]">
            <AnimatePresence mode="wait">
              {displayedSkill ? (
                <motion.div
                  key={displayedSkill.id}
                  initial={{ opacity: 0, rotateX: 10, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateX: -10, y: -10, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={displayedSkill.image || ""}
                    alt={displayedSkill.label}
                    className="w-full h-full object-cover rounded-xl shadow-2xl rotate-[-5deg] border-4 border-white"
                    fill
                  />
                  {/* Decorative floating elements */}
                  <div
                    className={`absolute -right-4 -bottom-4 w-12 h-12 ${displayedSkill.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                  >
                    {React.createElement(displayedSkill.icon || Palette, {
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
            {isMobile
              ? // Mobile: only 6 active skills, icon-only bubbles; active one has pill tooltip + center image (auto-cycled)
                activeSkillsList.map((skill, index) => {
                  const Icon = skill.icon;
                  const isActive =
                    sectionInView &&
                    mobileCycleStarted &&
                    index === mobileCycleIndex;
                  return (
                    <motion.div
                      key={skill.id}
                      style={{
                        position: "absolute",
                        left: `${skill.x}%`,
                        top: `${skill.y}%`,
                      }}
                      animate={{
                        y: [0, -6, 0],
                      }}
                      transition={{
                        duration: 3 + index * 0.2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.1,
                      }}
                      className="-translate-x-1/2 -translate-y-1/2 flex items-center gap-2"
                    >
                      <motion.div
                        layout
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className={`
                        flex items-center gap-2 rounded-full transition-all duration-300
                        ${isActive ? "bg-black px-4 py-2.5 shadow-xl" : "bg-gray-200/90 p-2.5"}
                      `}
                      >
                        {Icon && (
                          <Icon
                            className={`w-4 h-4 shrink-0 ${isActive ? "text-purple-400" : "text-gray-500"}`}
                          />
                        )}
                        <AnimatePresence>
                          {isActive && (
                            <motion.span
                              initial={{ opacity: 0, width: 0 }}
                              animate={{ opacity: 1, width: "auto" }}
                              exit={{ opacity: 0, width: 0 }}
                              transition={{ duration: 0.25 }}
                              className="text-sm font-medium text-white whitespace-nowrap overflow-hidden"
                            >
                              {skill.label}
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </motion.div>
                  );
                })
              : // Desktop: all skills, hover to show label + center image
                skills.map((skill, index) => {
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
                        duration: 3 + index * 0.2,
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
                        {skill.active && hoveredSkill === skill.id && (
                          <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-black rotate-45 -mt-1"></div>
                        )}
                      </button>
                    </motion.div>
                  );
                })}
          </div>
        </div>
      </div>
    </section>
  );
};

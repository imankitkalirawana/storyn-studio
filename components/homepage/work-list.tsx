"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import { Chip } from "@heroui/react";

export const WorkList = ({
  onProjectSelect,
}: {
  onProjectSelect?: (project: Project) => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Parallax transforms for 3 columns
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springConfig,
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 100]),
    springConfig,
  ); // Moves opposite/slower
  const y3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -350]),
    springConfig,
  );

  // Shuffle/Split projects for columns
  const col1 = [projects[0], projects[3], projects[6], projects[1]];
  const col2 = [projects[4], projects[2], projects[7], projects[0]];
  const col3 = [projects[5], projects[1], projects[3], projects[4]];

  return (
    <section
      ref={containerRef}
      className="py-24 px-4 md:px-8 overflow-hidden min-h-[150vh]"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Header - Fixed/Sticky feel or just top placement */}
        <div className="flex flex-col items-center justify-center mb-24 text-center">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85]">
            Selected <br />
            <span className="text-default">Work</span>
          </h2>
        </div>

        {/* Puzzle Grid / Parallax Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Column 1 */}
          <motion.div
            style={{ y: y1 }}
            className="flex flex-col gap-12 md:gap-24 pt-0"
          >
            {col1.map((project, i) => (
              <Card
                key={`c1-${i}`}
                project={project}
                onClick={() => onProjectSelect?.(project)}
              />
            ))}
          </motion.div>

          {/* Column 2 - Offset Start */}
          <motion.div
            style={{ y: y2 }}
            className="flex flex-col gap-12 md:gap-24 pt-24 md:pt-48"
          >
            {col2.map((project, i) => (
              <Card
                key={`c2-${i}`}
                project={project}
                onClick={() => onProjectSelect?.(project)}
              />
            ))}
          </motion.div>

          {/* Column 3 - More Offset */}
          <motion.div
            style={{ y: y3 }}
            className="hidden md:flex flex-col gap-12 md:gap-24 pt-12"
          >
            {col3.map((project, i) => (
              <Card
                key={`c3-${i}`}
                project={project}
                onClick={() => onProjectSelect?.(project)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  project,
  onClick,
}: {
  project: Project;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`relative group w-full ${project.height} rounded-[2rem] overflow-hidden`}
      onClick={onClick}
    >
      <Image
        src={project.img}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        fill
      />

      {/* Sticker/Pill Overlay */}
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
        <Chip className="bg-background/50 backdrop-blur-lg px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all text-xs font-bold uppercase tracking-widest text-foreground shadow-lg">
          {project.category}
        </Chip>
        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Bottom Title */}
      <div className="absolute p-4 w-full bottom-0 bg-linear-to-t from-foreground opacity-0  group-hover:opacity-100 to-transparent transition-all">
        <h3 className="text-2xl font-bold text-background drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

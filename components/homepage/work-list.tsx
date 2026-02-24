"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Project, projects } from "@/data/projects";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";

const MOBILE_INITIAL_COUNT = 4;

export const WorkList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showAllMobile, setShowAllMobile] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Parallax transforms for 3 columns (desktop)
  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -200]),
    springConfig,
  );
  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [-100, 100]),
    springConfig,
  );
  const y3 = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -350]),
    springConfig,
  );

  // Shuffle/Split projects for columns (desktop)
  const col1 = [projects[0], projects[6], projects[1]];
  const col2 = [projects[2], projects[7]];
  const col3 = [projects[5], projects[3], projects[4]];

  const mobileInitial = projects.slice(0, MOBILE_INITIAL_COUNT);
  const mobileRest = projects.slice(MOBILE_INITIAL_COUNT);
  const hasMoreMobile = mobileRest.length > 0;

  return (
    <section
      id="work"
      ref={containerRef}
      className="py-12 md:py-24 px-4 md:px-8 overflow-hidden min-h-[150vh]"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center justify-center md:mb-24 mb-12 text-center">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85]">
            Selected <br />
            <span className="text-default">Work</span>
          </h2>
        </div>

        {/* Mobile: 4 projects + View more → then all */}
        <div className="md:hidden flex flex-col gap-8">
          {mobileInitial.map((project) => (
            <Card key={project.id} project={project} />
          ))}
          {hasMoreMobile && !showAllMobile && (
            <div className="flex justify-center pt-4">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold border-2 rounded-full px-8"
                onPress={() => setShowAllMobile(true)}
              >
                View more
              </Button>
            </div>
          )}
          {showAllMobile &&
            mobileRest.map((project) => (
              <Card key={project.id} project={project} />
            ))}
        </div>

        {/* Desktop: Puzzle Grid / Parallax Columns (unchanged) */}
        <div className="hidden md:grid md:grid-cols-3 gap-16">
          <motion.div style={{ y: y1 }} className="flex flex-col gap-16 pt-0">
            {col1.map((project, i) => (
              <Card key={`c1-${i}`} project={project} />
            ))}
          </motion.div>
          <motion.div
            style={{ y: y2 }}
            className="flex flex-col gap-16 md:pt-48"
          >
            {col2.map((project, i) => (
              <Card key={`c2-${i}`} project={project} />
            ))}
          </motion.div>
          <motion.div style={{ y: y3 }} className="flex flex-col gap-16 pt-12">
            {col3.map((project, i) => (
              <Card key={`c3-${i}`} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Card = ({ project }: { project: Project }) => {
  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className={`relative group w-full ${project.height} rounded-[2rem] overflow-hidden`}
      >
        <Image
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          fill
        />

        {/* Sticker/Pill Overlay */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          <Chip className="bg-background/50 backdrop-blur-lg px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-all text-xs font-bold uppercase tracking-widest text-foreground shadow-lg">
            {project.category}
          </Chip>

          <Button className="w-10 h-10 bg-foreground text-background rounded-full flex items-center opacity-0 group-hover:opacity-100 transition-all justify-center shadow-lg">
            <ArrowUpRight size={18} />
          </Button>
        </div>

        {/* Bottom Title */}
        <div className="absolute p-4 w-full bottom-0 bg-linear-to-t from-foreground opacity-0  group-hover:opacity-100 to-transparent transition-all">
          <h3 className="text-2xl font-bold text-background drop-shadow-md translate-y-4 group-hover:translate-y-0 transition-all duration-300">
            {project.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};

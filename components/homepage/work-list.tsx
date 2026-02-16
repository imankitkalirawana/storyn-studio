"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export type Project = {
  id: number;
  title: string;
  category: string;
  img: string;
  height: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Vogue Editorial",
    category: "Fashion",
    img: "https://images.unsplash.com/photo-1730385781420-77c5ef5f0539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwZWRpdG9yaWFsJTIwZmFzaGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc3MDAzMDE1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-64 md:h-80",
  },
  {
    id: 2,
    title: "Neo Tokyo",
    category: "Art Direction",
    img: "https://images.unsplash.com/photo-1627589161730-0d90bea5a656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwcG9ydHJhaXQlMjBhZXN0aGV0aWN8ZW58MXx8fHwxNzcwMDMwMTUyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-80 md:h-96",
  },
  {
    id: 3,
    title: "Pastel Dreams",
    category: "3D Design",
    img: "https://images.unsplash.com/photo-1751646563987-d5720fb773cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwc2hhcGVzJTIwY29sb3JmdWwlMjBwYXN0ZWx8ZW58MXx8fHwxNzcwMDMwMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-72 md:h-80",
  },
  {
    id: 4,
    title: "Eco Packaging",
    category: "Branding",
    img: "https://images.unsplash.com/photo-1761125802333-d145773f4461?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwcGFja2FnaW5nJTIwZGVzaWduJTIwc3VzdGFpbmFibGV8ZW58MXx8fHwxNzcwMDMwMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-60 md:h-72",
  },
  {
    id: 5,
    title: "Modern Arch",
    category: "Photography",
    img: "https://images.unsplash.com/photo-1665043548178-8e606eca11eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmFsJTIwZGVzaWduJTIwbWluaW1hbHxlbnwxfHx8fDE3NzAwMzAxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-96 md:h-[30rem]",
  },
  {
    id: 6,
    title: "Typo Bold",
    category: "Graphic Design",
    img: "https://images.unsplash.com/photo-1762354766808-92f8ad416174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2xkJTIwdHlwb2dyYXBoeSUyMHBvc3RlciUyMGRlc2lnbnxlbnwxfHx8fDE3NzAwMzAxNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-80 md:h-[26rem]",
  },
  {
    id: 7,
    title: "Lumina App",
    category: "Mobile Design",
    img: "https://images.unsplash.com/photo-1760597371674-c5a412f2ae01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWJyYW50JTIwdWklMjBkZXNpZ24lMjBtb2JpbGUlMjBhcHAlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzAwMjU5MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-72",
  },
  {
    id: 8,
    title: "Flux Web",
    category: "Web Design",
    img: "https://images.unsplash.com/photo-1659841064804-5f507b1b488a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ24lMjBsYW5kaW5nJTIwcGFnZSUyMGJyaWdodCUyMGdyYWRpZW50fGVufDF8fHx8MTc3MDAyNTkxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    height: "h-64",
  },
];

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
      className="bg-white py-24 px-4 md:px-8 overflow-hidden min-h-[150vh]"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Header - Fixed/Sticky feel or just top placement */}
        <div className="flex flex-col items-center justify-center mb-24 text-center">
          <h2 className="text-6xl md:text-9xl font-bold tracking-tighter text-black leading-[0.85]">
            Selected <br />
            <span className="text-gray-300">Work.</span>
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
            {/* Duplicate for length/feeling */}
            {col1.map((project, i) => (
              <Card
                key={`c1-dup-${i}`}
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
            {col2.map((project, i) => (
              <Card
                key={`c2-dup-${i}`}
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
            {col3.map((project, i) => (
              <Card
                key={`c3-dup-${i}`}
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
      <div className="absolute top-4 left-4 right-4 flex justify-between items-start opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-black shadow-lg">
          {project.category}
        </div>
        <div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center shadow-lg">
          <ArrowUpRight size={18} />
        </div>
      </div>

      {/* Bottom Title */}
      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-bold text-white drop-shadow-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

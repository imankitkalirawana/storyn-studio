"use client";
import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { Button } from "@heroui/react";

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  height: string;
  details: {
    client: string;
    role: string;
    Headline: string;
    description: {
      column1?: string;
      column2?: string;
    };
    image: string;
    insights: string;
    name: string;
    designation: string;
  };
  caseStudyUrl?: string;
}

interface CaseStudyProps {
  project: Project;
}

export const CaseStudy: React.FC<CaseStudyProps> = ({ project }) => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  const router = useRouter();

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation / Back Button - Sticky & Blended */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center text-white">
        <Button
          onClick={() => router.back()}
          className="group flex items-center bg-background/50 backdrop-blur-sm gap-3 text-sm font-bold uppercase tracking-widest hover:bg-background/70 transition-all"
        >
          <ArrowLeft size={18} />
          <span className="hidden md:inline">Back</span>
        </Button>
        <div className="text-sm font-bold uppercase tracking-widest opacity-0 md:opacity-100 transition-opacity">
          Storyn Studio
        </div>
        <div className="w-8" /> {/* Spacer for balance */}
      </nav>

      {/* Hero Section */}
      <div className="w-full h-[50vh] md:h-screen relative overflow-hidden ">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="w-full md:h-full h-[100px]"
        >
          <Image
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover object-center"
            fill
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
        </motion.div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 pb-12 md:pb-24 text-white">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[1920px] mx-auto"
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-4 py-1.5 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                    {project.category}
                  </span>
                  <span className="px-4 py-1.5 rounded-full border border-white/30 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
                    2024
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none md:leading-snug -ml-1 md:-ml-2">
                  {project.title}
                </h1>
              </div>

              {/* External Link Button in Hero */}
              {project.caseStudyUrl && (
                <a
                  href={project.caseStudyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-gray-200 transition-all cursor-pointer"
                >
                  <span>View Live</span>
                  <ArrowUpRight
                    size={18}
                    className="group-hover:rotate-45 transition-transform"
                  />
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1920px] mx-auto px-4 md:px-12 pt-24 pb-12">
        {/* Project Meta & Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32 md:mb-48">
          {/* Sticky Sidebar */}
          <div className="md:col-span-3">
            <div className="sticky top-32 space-y-12">
              <div className="space-y-8 border-l border-gray-200 pl-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Client
                  </h3>
                  <p className="text-lg font-medium">
                    {project.details.client}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Role
                  </h3>
                  <p className="text-lg font-medium">{project.details.role}</p>
                </div>

                {/* Secondary View Button for Sidebar */}
                {project.caseStudyUrl && (
                  <div className="pt-4">
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-colors"
                    >
                      Behance Case Study <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-8 md:col-start-5">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-medium leading-tight mb-12  ">
                {project.details.Headline}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed font-medium">
                <p>{project.details.description.column1}</p>
                <p>{project.details.description.column2}</p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="relative flex">
          <Image
            src={project.details.image}
            alt={project.title}
            className="w-full h-full object-cover"
            width={1000}
            height={1000}
          />
        </div>
        {/* Insight Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24  md:mb-32 p-8 md:p-16 bg-gray-50 rounded-[3rem]">
          <div className="md:space-y-6 space-y-2">
            <h3 className="text-4xl font-bold tracking-tight">The Insight</h3>
            <div className="w-12 h-1 bg-black" />
          </div>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed">
              {project.details.insights}
            </p>
            <div className="flex items-center gap-4">
              <div>
                <p className="font-bold text-sm">{project.details.name}</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  {project.details.designation}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Teaser */}
        <div className="relative group cursor-pointer py-32 border-t border-gray-200 overflow-hidden">
          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Next Case Study
            </p>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter group-hover:scale-105 transition-transform duration-500">
              Keep Scrolling
            </h2>

            <Button
              onClick={() => router.back()}
              className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
            >
              <ArrowUpRight
                size={18}
                className="group-hover:rotate-45 transition-transform"
              />
            </Button>
          </div>

          {/* Hover Background Gradient */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-6 flex justify-between items-center text-xs uppercase tracking-widest">
        <span>&copy; 2024 Storyn Studio</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Behance
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
};

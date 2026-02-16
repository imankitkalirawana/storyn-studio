"use client";
import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  height: string;
  caseStudyUrl?: string;
}

interface CaseStudyProps {
  project: Project;
  onBack: () => void;
  onNext: () => void;
}

const detailImages = [
  "https://images.unsplash.com/photo-1662928793080-155661f021f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0eXBvZ3JhcGh5JTIwcG9zdGVyJTIwZGVzaWduJTIwb24lMjB3YWxsfGVufDF8fHx8MTc3MTI0NjI0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1763674111862-78a0a5031711?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZGVzaWduJTIwZGV0YWlscyUyMGNsb3NlJTIwdXAlMjB3aGl0ZXxlbnwxfHx8fDE3NzEyNDYyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

export const CaseStudy: React.FC<CaseStudyProps> = ({
  project,
  onBack,
  onNext,
}) => {
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 500], [1, 1.1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [project]);

  return (
    <div className="bg-white min-h-screen text-black font-sans selection:bg-black selection:text-white">
      {/* Navigation / Back Button - Sticky & Blended */}
      <nav className="fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference text-white">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ArrowLeft size={14} />
          </div>
          <span className="hidden md:inline">Back</span>
        </button>
        <div className="text-sm font-bold uppercase tracking-widest opacity-0 md:opacity-100 transition-opacity">
          Storyn Studio
        </div>
        <div className="w-8" /> {/* Spacer for balance */}
      </nav>

      {/* Hero Section */}
      <div className="w-full h-screen relative overflow-hidden">
        <motion.div
          style={{ scale: heroScale, opacity: heroOpacity }}
          className="w-full h-full"
        >
          <Image
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover"
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
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.85] -ml-1 md:-ml-2">
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
                  <p className="text-lg font-medium">Storyn Partners</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                    Role
                  </h3>
                  <p className="text-lg font-medium">
                    Art Direction, UI/UX, Dev
                  </p>
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
              <h2 className="text-3xl md:text-6xl font-medium leading-tight mb-12 indent-12 md:indent-24">
                Our mission was to strip away the noise and reveal the{" "}
                <span className="italic font-serif text-gray-400">
                  essential soul
                </span>{" "}
                of the brand.
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  For {project.title}, we approached the design as a form of
                  digital architecture. Every pixel was placed with purpose,
                  building a structure that houses the brand&apos;s narrative
                  without overpowering it.
                </p>
                <p>
                  The result is a seamless, immersive experience that engages
                  users from the first interaction, guiding them effortlessly
                  through a journey of discovery and connection.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Immersive Gallery */}
        <div className="space-y-6 md:space-y-12 mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-end">
            <motion.div
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
              className="aspect-3/4 rounded-[2rem] overflow-hidden bg-gray-100"
            >
              <Image
                src={detailImages[0]}
                alt="Process 1"
                className="w-full h-full object-cover"
                fill
              />
            </motion.div>
            <div className="space-y-6 md:space-y-12">
              <p className="text-sm font-bold uppercase tracking-widest text-gray-400 max-w-xs ml-auto text-right">
                Visual Exploration — 01
              </p>
              <motion.div
                whileHover={{ scale: 0.98 }}
                transition={{ duration: 0.5 }}
                className="aspect-square rounded-[2rem] overflow-hidden bg-gray-100"
              >
                <Image
                  src={detailImages[1]}
                  alt="Process 2"
                  className="w-full h-full object-cover"
                  fill
                />
              </motion.div>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 0.99 }}
            transition={{ duration: 0.5 }}
            className="w-full aspect-video rounded-[2rem] overflow-hidden bg-gray-100"
          >
            <Image
              src={project.img}
              alt="Final Result"
              className="w-full h-full object-cover"
              fill
            />
          </motion.div>
        </div>

        {/* Insight Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 p-8 md:p-16 bg-gray-50 rounded-[3rem]">
          <div className="space-y-6">
            <h3 className="text-4xl font-bold tracking-tight">The Insight</h3>
            <div className="w-12 h-1 bg-black" />
          </div>
          <div className="space-y-8">
            <p className="text-xl leading-relaxed">
              &quot;We realized that the user journey wasn&apos;t linear—it was
              circular. By reimagining the navigation flow, we increased
              engagement by 40% and reduced bounce rates significantly.&quot;
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1761429942613-8d36f33dea5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwbWluaW1hbGlzdCUyMHN0dWRpbyUyMGxpZ2h0aW5nJTIwd29tYW58ZW58MXx8fHwxNzcwMDMwNTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Designer"
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
              <div>
                <p className="font-bold text-sm">Elena Vosk</p>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Lead Designer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Next Project Teaser */}
        <div
          onClick={onNext}
          className="relative group cursor-pointer py-32 border-t border-gray-200 overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center text-center gap-8">
            <p className="text-sm font-bold uppercase tracking-widest text-gray-400">
              Next Case Study
            </p>
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter group-hover:scale-105 transition-transform duration-500">
              Keep Scrolling
            </h2>
            <div className="w-20 h-20 rounded-full bg-black text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ArrowUpRight size={32} />
            </div>
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

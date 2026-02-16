"use client";
import { Footer } from "@/components/homepage/footer";
import { Hero } from "@/components/homepage/hero";
import { Intersection } from "@/components/homepage/inter-section";
import { StorySection } from "@/components/homepage/story-section";
import { WorkList } from "@/components/homepage/work-list";
import AboutUs from "@/components/homepage/about-us";
import MovingStrip from "@/components/homepage/moving-strip";
import { Testimonials } from "@/components/homepage/testimonial";
import { CaseStudy } from "../projects";
import { useEffect, useState } from "react";
import { Project, projects } from "@/data/projects";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Smooth scroll behavior for the html element
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = projects.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % projects.length;
    setSelectedProject(projects[nextIndex]);
    window.scrollTo(0, 0);
  };

  if (selectedProject) {
    return (
      <CaseStudy
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
        onNext={handleNextProject}
      />
    );
  }

  return (
    <>
      <main>
        <Hero />
        <MovingStrip />
        <AboutUs />
        <Intersection />
        <WorkList onProjectSelect={setSelectedProject} />
        <StorySection />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

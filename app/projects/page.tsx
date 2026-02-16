"use client";
import { CaseStudy } from "@/components/projects";
import { useEffect } from "react";
import { projects } from "@/components/homepage/work-list";

export default function Projects() {
  // Smooth scroll behavior for the html element
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <>
      <CaseStudy project={projects[0]} />
    </>
  );
}

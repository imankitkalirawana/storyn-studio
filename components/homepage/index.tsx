"use client";
import { Footer } from "@/components/homepage/footer";
import { Hero } from "@/components/homepage/hero";
import { Intersection } from "@/components/homepage/inter-section";
import { StorySection } from "@/components/homepage/story-section";
import { WorkList } from "@/components/homepage/work-list";
import AboutUs from "@/components/homepage/about-us";
import MovingStrip from "@/components/homepage/moving-strip";
import { Testimonials } from "@/components/homepage/testimonial";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <MovingStrip />
        <AboutUs />
        <Intersection />
        <WorkList />
        <StorySection />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
}

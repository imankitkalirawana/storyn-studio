import { Footer } from "@/components/homepage/footer";
import { Hero } from "@/components/homepage/hero";
import { Intersection } from "@/components/homepage/inter-section";
import { IntroSection } from "@/components/homepage/intro-section";
import { StorySection } from "@/components/homepage/story-section";
import { WorkList } from "@/components/homepage/work-list";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <IntroSection />
        <Intersection />
        <WorkList />
        <StorySection />
        <Footer />
      </main>
    </>
  );
}

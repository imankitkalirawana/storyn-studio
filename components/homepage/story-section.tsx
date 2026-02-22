"use client";
import { motion } from "motion/react";
import Image from "next/image";

type StoryStep = { title: string; text: string; img: string };
type TeamMember = { name: string; role: string; img: string };

const storySteps: StoryStep[] = [
  {
    title: "The Beginning",
    text: "Storyn Studio wasn't born in a boardroom. It started in a small apartment, fueled by late-night coffee and a shared obsession with perfect pixels. We realized that most digital experiences were just... noise. We wanted to create signals.",
    img: "https://images.unsplash.com/photo-1545845497-f57021dae168?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtpbmclMjBvbiUyMGxhcHRvcCUyMGNsb3NldXAlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc3MDAzMDU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "The Process",
    text: "We believe in subtraction. Every project begins with a chaotic mess of ideas, which we relentlessly refine until only the essential remains. It's not about what we can add, but what we can take away without losing the soul of the brand.",
    img: "https://images.unsplash.com/photo-1543320485-d0d5a49c2b2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkZXNpZ24lMjBzdHVkaW8lMjB0ZWFtJTIwbWVldGluZyUyMGNyZWF0aXZlJTIwbWluaW1hbGlzdCUyMHdoaXRlfGVufDF8fHx8MTc3MDAzMDU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "The Vision",
    text: "Today, we're a collective of dreamers and doers. We don't just build websites; we build digital homes. Spaces where your audience feels understood, inspired, and ready to connect. Silence is our canvas, and your story is the paint.",
    img: "https://images.unsplash.com/photo-1673691186762-5611baa346d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwc2hhcGVzJTIwY29sb3JmdWwlMjBwYXN0ZWx8ZW58MXx8fHwxNzcwMDMwMTUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const team: TeamMember[] = [
  {
    name: "Ankit Kalirawana",
    role: "pCo-Founder",
    img: "/assets/ankit.jpg",
  },
  {
    name: "Marcus Chen",
    role: "Lead Developer",
    img: "https://images.unsplash.com/photo-1735663202660-1a44d63ae163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwbWluaW1hbGlzdCUyMHN0dWRpbyUyMGxpZ2h0aW5nJTIwbWFufGVufDF8fHx8MTc3MDAzMDU3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Sarah Jenkins",
    role: "Brand Strategist",
    img: "https://images.unsplash.com/photo-1742473716788-72ec6df8a830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwd29tYW4lMjBibGFjayUyMGFuZCUyMHdoaXRlJTIwb3IlMjBtaW5pbWFsfGVufDF8fHx8MTc3MDAzMDU3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "David Ross",
    role: "Motion Designer",
    img: "https://images.unsplash.com/photo-1750390200293-92d5a788d3a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0JTIwbWFuJTIwZ2xhc3NlcyUyMG1pbmltYWx8ZW58MXx8fHwxNzcwMDMwNTc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export const StorySection = () => {
  return (
    <section className="bg-white text-black py-32 relative" id="about-us">
      <div className="max-w-[1920px] mx-auto px-4 md:px-12">
        {/* Intro Text */}
        <div className="mb-32 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-8"
          >
            We Are Storyn.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-500 leading-relaxed font-serif italic"
          >
            &quot;A story is not just what you tell people. It&apos;s what they
            believe about you based on the signals your brand sends.&quot;
          </motion.p>
        </div>

        {/* Narrative Flow */}
        <div className="flex flex-col gap-32 md:gap-18 mb-24">
          {storySteps.map((step, i) => (
            <StoryItem key={i} step={step} index={i} />
          ))}
        </div>

        {/* Team Section */}
        <div className="border-t border-gray-100 pt-32">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">
                The Minds
              </h3>
              <p className="text-gray-400 max-w-md">
                Meet the people who turn coffee into code and dreams into
                designs.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase"
            >
              Join the Team
            </motion.button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <TeamCard key={i} member={member} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const StoryItem = ({ step, index }: { step: StoryStep; index: number }) => {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ margin: "-10px" }}
      className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12 md:gap-24`}
    >
      <div className="flex-1 space-y-6">
        <div className="w-16 h-1 bg-black mb-6"></div>
        <h3 className="text-3xl md:text-4xl font-bold">{step.title}</h3>
        <p className="text-lg text-gray-600 leading-relaxed">{step.text}</p>
      </div>
      <div className="flex-1 w-full aspect-5/3 relative overflow-hidden rounded-[2rem]">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.7 }}
          src={step.img}
          alt={step.title}
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ margin: "-50px" }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-[2rem] mb-6 aspect-3/4 bg-gray-100">
        <Image
          src={member.img}
          alt={member.name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale"
          fill
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div>
        <h4 className="text-xl font-bold mb-1 group-hover:text-gray-600 transition-colors">
          {member.name}
        </h4>
        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
};

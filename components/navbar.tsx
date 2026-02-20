"use client";
import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Button, Link } from "@heroui/react";

export const Navigation = () => {
  const [hidden, setHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setIsScrolled(latest > 50);
  });

  const links = [
    { name: "Projects", href: "#work" },
    { name: "About Us", href: "#about-us" },
  ];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 px-6  md:px-12 py-6 flex justify-between items-center transition-colors duration-300 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <Image
          src="/assets/logo.png"
          alt="Storyn Studio"
          width={200}
          height={200}
        ></Image>

        {/* Desktop */}
        <div className="flex items-center gap-12">
          <div className="hidden md:flex items-center gap-12">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium transition-colors uppercase tracking-widest text-black/70 hover:text-black"
              >
                {link.name}
              </a>
            ))}
          </div>
          <Link href="/contact" className="no-underline">
            <Button
              size="md"
              variant="tertiary"
              className="font-medium rounded-full text-sm uppercase tracking-widest bg-black text-white"
            >
              Contact
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-white text-black flex flex-col items-center justify-center gap-8 md:hidden"
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-serif"
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </>
  );
};

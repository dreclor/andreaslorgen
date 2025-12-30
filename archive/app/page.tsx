"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ProjectCarousel from "./components/ProjectCarousel";
import SocialLinks from "./components/SocialLinks";
import { COLORS } from "./constants/colors";

export default function Home() {
  const [showShh, setShowShh] = useState(false);
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: COLORS.background }}
    >
      <SocialLinks />
      <div className="flex flex-col items-center justify-start pt-10 pb-32">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold w-1/2 p-4 relative"
          style={{ willChange: "transform", color: COLORS.accent }}
        >
          Hey, it's Andreas!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl font-bold w-1/2 p-4 text-right"
          style={{ color: COLORS.accent }}
        >
          I'm a senior at Stanford studying CS and{" "}
          <a
            href="https://drive.google.com/drive/folders/1R_IcG2K5PEi6thXTKNAA-C0js7yRjGVL?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-wavy text-[#FFFCF9] hover:text-[#B1EDE8]"
          >
            Creative Writing
          </a>
          .
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          <ProjectCarousel />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.8 }}
          className="text-2xl font-bold w-1/2 p-4 text-left"
          style={{ color: COLORS.accent }}
        >
          I spent this past summer writing code at{" "}
          <a href="https://www.tennr.com/" style={{ color: COLORS.accent }}>
            <span className="underline">Tennr AI</span>
          </a>
          .
          <br />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-2xl font-bold w-1/2 p-4 text-right"
          style={{ color: COLORS.accent }}
        >
          I'm currently working on a few personal creative projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.0 }}
          className="w-1/2 p-4 flex justify-center"
        >
          <div
            className="relative w-full max-w-2xl aspect-video cursor-pointer"
            onClick={() => setShowShh(true)}
          >
            <Image
              src="/aux.png"
              alt="Creative project"
              fill
              className="object-contain rounded-lg"
            />
            {showShh && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 flex items-center justify-center text-6xl pointer-events-none"
              >
                🤫
              </motion.div>
            )}
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.6 }}
          className="text-2xl font-bold w-1/2 p-4 text-left"
          style={{ color: COLORS.accent }}
        >
          On the lookout for products that inspire me.
        </motion.p>
      </div>
    </div>
  );
}

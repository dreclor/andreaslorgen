"use client";
import { motion } from "framer-motion";
import ProjectCarousel from "./components/ProjectCarousel";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#D62246]">
      <SocialLinks />
      <div className="flex flex-col items-center justify-start pt-10 pb-32">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ willChange: "transform" }}
          className="text-2xl font-bold text-[#61E294] w-1/2 p-4 relative"
        >
          Hey, it's Andreas!
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-2xl font-bold text-[#61E294] w-1/2 p-4 text-right"
        >
          I'm a senior at Stanford studying CS and{" "}
          <a
            href="https://drive.google.com/drive/folders/1R_IcG2K5PEi6thXTKNAA-C0js7yRjGVL?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#61E294]"
            style={{ textDecoration: "underline", textDecorationStyle: "wavy" }}
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
          className="text-2xl font-bold text-[#61E294] w-1/2 p-4 text-left"
        >
          I spent this past summer writing code at{" "}
          <a href="https://www.tennr.com/" className="text-[#61E294]">
            <span className="underline">Tennr AI</span>
          </a>
          .
          <br />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="text-2xl font-bold text-[#61E294] w-1/2 p-4 text-right"
        >
          I'm currently working on a few personal creative projects.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 3.0 }}
          className="text-2xl font-bold text-[#61E294] w-1/2 p-4 text-left"
        >
          On the lookout for products that inspire me.
        </motion.p>
      </div>
    </div>
  );
}

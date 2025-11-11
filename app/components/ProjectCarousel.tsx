"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCarousel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className="w-full mt-8 mb-8"
    >
      <p className="text-2xl font-bold text-[#61E294] w-1/2 p-4 text-center mx-auto mb-4">
        Here are some of my favorite school projects:
      </p>
      <div
        className="overflow-x-auto scrollbar-hide scroll-smooth"
        style={{ scrollBehavior: "smooth" }}
      >
        <div
          className="flex gap-6 pl-8 pr-8 pb-4"
          style={{ scrollSnapType: "x mandatory" }}
        >
          <a
            href="https://hci.stanford.edu/courses/cs147/2024/au/projects/Designing-for-Movement/PISSION/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 group"
            style={{
              scrollSnapAlign: "start",
              height: "300px",
              width: "562.5px",
            }}
          >
            <div className="relative overflow-hidden rounded-lg hover:border-[#61E294]/80 transition-all hover:shadow-lg hover:shadow-[#61E294]/20 w-full h-full">
              <Image
                src="/pission-preview.png"
                alt="PISSION - The Quickest Route to Relief"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>
          <a
            href="https://mechanicsofmagic.com/2025/06/07/p2-microdose-group-20/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 group"
            style={{
              scrollSnapAlign: "start",
              height: "300px",
              width: "250px",
            }}
          >
            <div className="relative overflow-hidden rounded-lg hover:border-[#61E294]/80 transition-all hover:shadow-lg hover:shadow-[#61E294]/20 w-full h-full">
              <Image
                src="/microdoze.png"
                alt="Microdoze - A psychedelic trip in a frat house"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </a>
          <div
            className="flex-shrink-0 group"
            style={{
              scrollSnapAlign: "start",
              height: "300px",
              width: "533.33px",
            }}
          >
            <div className="relative overflow-hidden rounded-lg hover:border-[#61E294]/80 transition-all hover:shadow-lg hover:shadow-[#61E294]/20 w-full h-full">
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
                width="100%"
                height="100%"
                src="https://embed.figma.com/slides/97et0IwKwk8iM5CABRgFgT/Resolute-Arc-deck-07-24?node-id=1-29&embed-host=share"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

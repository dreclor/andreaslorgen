"use client";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-3 items-center">
      <a
        href="mailto:aclorgen@gmail.com"
        className="text-[#61E294] hover:opacity-80 transition-opacity"
        aria-label="Email"
      >
        <FaEnvelope size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/andreascannonlorgen"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#61E294] hover:opacity-80 transition-opacity"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="https://www.instagram.com/heyitsandreas"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#61E294] hover:opacity-80 transition-opacity"
        aria-label="Instagram"
      >
        <FaInstagram size={32} />
      </a>
    </div>
  );
}


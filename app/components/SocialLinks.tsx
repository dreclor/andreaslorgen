"use client";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";
import { COLORS } from "../constants/colors";

export default function SocialLinks() {
  return (
    <div className="fixed top-6 right-6 z-50 flex gap-3 items-center">
      <a
        href="mailto:aclorgen@gmail.com"
        style={{ color: COLORS.accent }}
        className="hover:opacity-80 transition-opacity"
        aria-label="Email"
      >
        <FaEnvelope size={32} />
      </a>
      <a
        href="https://www.linkedin.com/in/andreascannonlorgen"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: COLORS.accent }}
        className="hover:opacity-80 transition-opacity"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="https://www.instagram.com/heyitsandreas"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: COLORS.accent }}
        className="hover:opacity-80 transition-opacity"
        aria-label="Instagram"
      >
        <FaInstagram size={32} />
      </a>
    </div>
  );
}


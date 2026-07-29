"use client";

import { motion } from "framer-motion";
import { useActiveSection } from "@/hooks/useActiveSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function MobileHero() {
  const activeSection = useActiveSection(sections.map((s) => s.id));

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="lg:hidden"
    >
      {/* Intro */}
      <h1 className="text-4xl font-bold tracking-tight text-slate-100">
        Arjun Singh
      </h1>

      <h2 className="mt-3 text-lg text-slate-400">
        Full Stack Developer
      </h2>

      <p className="mt-5 max-w-md text-slate-400 leading-relaxed">
        I build scalable web apps and clean user experiences.
      </p>

      <div className="flex gap-6 text-slate-400 mt-5">
          <a
            href="https://www.linkedin.com/in/arjun-singh-a04311313"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg"/>
          </a>
          <a
            href="mailto:sankhlaarjunsingh52@gmail.com"
            className="hover:text-slate-200 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} size="lg"/>
          </a>
          <a
            href="tel:+918278628295"
            className="hover:text-slate-200 transition"
          >
            <FontAwesomeIcon icon={faPhone } size="lg"/>
          </a>

          <a
            href="https://wa.me/+918278628295"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition"
          >
            <FontAwesomeIcon icon={faWhatsapp } size="lg"/>
          </a>        
      </div>

      {/* Mobile Nav */}
      <nav className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`relative pb-1 transition
                ${
                  isActive
                    ? "text-slate-100"
                    : "text-slate-400 hover:text-slate-200"
                }`}
            >
              {section.label}

              {/* underline */}
              <span
                className={`absolute left-0 -bottom-0.5 h-[2px] bg-teal-300 transition-all
                  ${
                    isActive ? "w-full" : "w-0"
                  }`}
              />
            </a>
          );
        })}
      </nav>
    </motion.section>
  );
}

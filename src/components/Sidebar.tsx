"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


import { useActiveSection } from "@/hooks/useActiveSection";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Sidebar() {
  const activeSection = useActiveSection(sections.map((s) => s.id));

  return (
    <aside className="hidden lg:flex flex-col justify-between w-[38%] py-24 sticky top-0 h-screen">
      <div>
        <h1 className="text-[52px] font-bold tracking-tight text-slate-100">
          Arjun Singh
        </h1>

        <h2 className="mt-2 text-xl text-slate-400">
          Full Stack Developer
        </h2>

        <p className="mt-2 max-w-sm text-slate-400">
          I build scalable web apps and clean user experiences.
        </p>

        {/* Navigation */}
        <nav className="mt-16 space-y-4">
          {sections.map((section) => {
            const isActive = activeSection === section.id;

            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`group flex items-center gap-4 text-sm font-medium uppercase tracking-widest transition
                  ${
                    isActive
                      ? "text-slate-200"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
              >
                <span
                  className={`h-px transition-all ${
                    isActive
                      ? "w-16 bg-slate-200"
                      : "w-8 bg-slate-500 group-hover:w-16"
                  }`}
                />
                {section.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Social */}
      <div className="flex gap-6 text-slate-400">
          <a
            href="https://www.linkedin.com/in/arjun-singh-a04311313"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="mailto:sankhlaarjunsingh52@gmail.com"
            className="hover:text-slate-200 transition"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="tel:+918278628295"
            className="hover:text-slate-200 transition"
          >
            <FontAwesomeIcon icon={faPhone } />
          </a>

          <a
            href="https://wa.me/+918278628295"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-slate-200 transition"
          >
            <FontAwesomeIcon icon={faWhatsapp  } />
          </a>        
      </div>
    </aside>
  );
}

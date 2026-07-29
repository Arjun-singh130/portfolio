"use client";

import { motion } from "framer-motion";

interface Props {
  period: string;
  title: string;
  company: string;
  link?: string;
  description: string;
  tech: string[];
}

export default function ExperienceCard({
  period,
  title,
  company,
  link,
  description,
  tech,
}: Props) {
  const Wrapper = link ? motion.a : motion.div;

  return (
    <Wrapper
      href={link}
      target={link ? "_blank" : undefined}
      rel={link ? "noopener noreferrer" : undefined}
      whileHover={{ y: -4 }}
      className="group relative grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-4 sm:gap-6 rounded-lg p-4 sm:p-6 transition hover:bg-[#112240]/50"
    >
      {/* Date */}
      <p className="text-sm uppercase tracking-widest text-slate-500">
        {period}
      </p>

      {/* Content */}
      <div>
        <h3 className="text-lg font-medium text-slate-200 group-hover:text-teal-300 transition">
          {title} ·{" "}
          <span className="inline-flex items-center gap-1">
            {company}
            <span className="text-sm">↗</span>
          </span>
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {description}
        </p>

        {/* Tech stack */}
        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <li
              key={item}
              className="rounded-full bg-teal-400/10 px-3 py-1 text-xs text-teal-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}


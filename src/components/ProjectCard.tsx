"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tech,
}: Props) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      className="group relative grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-6 rounded-lg p-6 transition hover:bg-[#112240]/60"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] sm:aspect-[4/3] w-full sm:w-[140px] overflow-hidden rounded-md border border-slate-700 bg-[#020c1b]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-1"
        />
      </div>

      {/* Content */}
      <div>
        <h3 className="text-base sm:text-lg font-medium text-slate-200 group-hover:text-teal-300 transition inline-flex items-center gap-1">
          {title}
          <span className="text-sm">↗</span>
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
    </motion.a>
  );
}

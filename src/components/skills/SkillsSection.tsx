"use client";

import { skills } from "@/data/skills";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >

      <div className="space-y-6 p-4">
        {skills.map((group) => (
          <div key={group.category} className="space-y-2">
            <h3 className="text-sm font-medium text-slate-300">
              {group.category}
            </h3>

            <p className="text-slate-400 leading-relaxed">
              {group.items.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

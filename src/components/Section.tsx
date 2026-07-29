"use client";

import { motion } from "framer-motion";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
    >
      <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-200">
        {title}
      </h2>

      <div className="text-slate-400 text-base leading-relaxed max-w-none sm:max-w-xl">
        {children}
      </div>
    </motion.section>
  );
}

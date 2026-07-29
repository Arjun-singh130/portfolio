"use client";

import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="space-y-6 max-w-xl p-4"
    >
      <p className="text-slate-400 leading-relaxed">
        I’m currently open to new opportunities and interesting projects.  
        Whether you have a question or just want to say hi, my inbox is always open.
      </p>

      <a
        href="mailto:sankhlaarjunsingh52@gmail.com"
        className="inline-flex items-center gap-2 rounded-md border border-teal-300/40 px-6 py-3 text-sm font-medium text-teal-300 hover:bg-teal-300/10 transition"
      >
        Say Hello
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        className="inline-flex items-center gap-2 mx-4 rounded-md border border-slate-400/40 px-6 py-3 text-sm text-slate-200 hover:bg-slate-400/10 transition"
      >
        View Resume
      </a>

    </motion.section>
  );
}

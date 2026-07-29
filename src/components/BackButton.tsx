"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function BackButton() {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.push("/")}
      whileHover={{ x: -4 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-200 transition"
    >
      <span className="text-xl leading-none">←</span>
    </motion.button>
  );
}

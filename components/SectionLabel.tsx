"use client";

import { motion } from "framer-motion";

export default function SectionLabel({
  index,
  children
}: {
  index: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="flex items-center gap-3"
    >
      <span className="font-mono text-[11px] tracking-wider text-ocean-700 tabular">
        {index}
      </span>
      <span className="h-px w-10 bg-ink-300" />
      <span className="font-mono text-[11px] tracking-wider uppercase text-ink-600">
        {children}
      </span>
    </motion.div>
  );
}

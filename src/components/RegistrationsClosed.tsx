"use client";

import { motion, useReducedMotion } from "motion/react";

export default function RegistrationsClosed() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      role="status"
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
      className="relative flex cursor-not-allowed select-none items-center gap-2.5
                 overflow-hidden rounded-full border border-white/35 bg-white/10
                 px-5 py-2.5 backdrop-blur-[2px] sm:gap-3 sm:px-6 sm:py-3"
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        {!reduceMotion && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-white"
            animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
          />
        )}
        <span className="relative h-2.5 w-2.5 rounded-full bg-white" />
      </span>

      <span className="font-[MPlusRounded1c] text-xs font-bold uppercase tracking-[0.14em] whitespace-nowrap text-white sm:text-sm">
        Registrations Closed
      </span>

      {!reduceMotion && (
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12
                     bg-gradient-to-r from-transparent via-white/25 to-transparent"
          animate={{ x: ["-150%", "400%"] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            repeatDelay: 3.6,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
}

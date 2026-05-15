"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >

          <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/70">
            Privacy-first AI Interview Platform
          </div>

          <h1 className="mx-auto max-w-4xl text-6xl font-bold tracking-tight">
            Practice Real Interviews
            <span className="block bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              With AI Voice Agents
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Upload your resume and experience a realtime AI-powered mock interview with intelligent follow-up questions and detailed feedback.
          </p>

          <div className="mt-10 flex items-center justify-center gap-4">

            
            <Link
  href="/upload"
  className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:scale-105"
>
  Start Interview
</Link>

            <button className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10">
              Learn More
            </button>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
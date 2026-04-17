"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center px-6 relative overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/gym.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY (important for readability) */}
      <div className="absolute inset-0 bg-black/70" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl">

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight"
        >
          TRAIN LIKE A{" "}
          <span className="text-red-500">BEAST</span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-gray-300 max-w-md text-lg"
        >
          Push your limits with world-class training, expert coaches,
          and high-performance equipment.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex gap-4 flex-wrap"
        >
          <a
            href="#pricing"
            className="bg-red-500 px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Join Now
          </a>

          <a
            href="#features"
            className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition"
          >
            Explore
          </a>
        </motion.div>

        {/* TRUST LINE */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-gray-400 text-sm"
        >
          🔥 500+ Members • 10+ Trainers • 5 Years Experience
        </motion.p>

      </div>

      {/* OPTIONAL GRADIENT (adds depth) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

    </section>
  );
}
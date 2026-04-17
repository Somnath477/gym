"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative py-28 text-center overflow-hidden">

      {/* Background Image */}
      <img
        src="/images/gym3.jpg"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />

      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-extrabold"
        >
          Start Your Fitness Journey Today
        </motion.h2>

        <p className="text-gray-400 mt-4">
          No excuses. No limits. Just results.
        </p>

        <button
          onClick={() =>
            window.open("https://wa.me/91XXXXXXXXXX?text=I want to join gym")
          }
          className="mt-8 bg-red-500 px-8 py-4 rounded-full text-lg font-semibold hover:scale-105 transition"
        >
          Join via WhatsApp 💪
        </button>

      </div>
    </section>
  );
}
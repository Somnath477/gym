"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ParallaxSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.15); // smoother + slower
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-[500px] md:h-[550px] -mt-10 relative overflow-hidden">

      {/* BACKGROUND (PARALLAX) */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/gym2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offset}px) scale(1.1)`,
        }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          PUSH YOUR <span className="text-red-500">LIMITS</span>
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-300 mt-4 max-w-md text-sm md:text-base"
        >
          Every rep, every drop of sweat, every second counts.
          This is where your transformation begins.
        </motion.p>

        {/* CTA BUTTON */}
        <motion.a
          href="#pricing"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 bg-red-500 px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
        >
          Join Now 💪
        </motion.a>

      </div>

    </section>
  );
}
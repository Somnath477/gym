"use client";

import { useEffect, useState } from "react";

export default function ParallaxSection() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.2); // smoother
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-[800px] md:h-[700px] relative overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/gym2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${offset}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">

        <h2 className="text-5xl md:text-6xl font-extrabold text-center">
          PUSH YOUR LIMITS
        </h2>

      </div>

    </section>
  );
}
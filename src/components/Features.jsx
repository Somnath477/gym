"use client";

import Reveal from "./Reveal";

const features = [
  {
    title: "Modern Equipment",
    desc: "Train with world-class machines designed for maximum performance.",
  },
  {
    title: "Expert Trainers",
    desc: "Certified coaches to guide your fitness journey with precision.",
  },
  {
    title: "Personal Coaching",
    desc: "Custom workout plans tailored to your body and goals.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-28 px-6 bg-black">

      {/* Heading */}
      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold">
            Why Choose <span className="text-red-500">Us</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Everything you need to transform your body and mindset
          </p>
        </div>
      </Reveal>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {features.map((item, i) => (
          <Reveal key={i}>
            <div className="group bg-zinc-900 p-8 rounded-2xl border border-zinc-800 hover:border-red-500 transition duration-300 hover:scale-105">

              <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>

            </div>
          </Reveal>
        ))}

      </div>
    </section>
  );
}
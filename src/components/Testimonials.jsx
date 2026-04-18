"use client";

import Reveal from "./Reveal";

const reviews = [
  {
    name: "Rahul Das",
    text: "I lost 10kg in 3 months. Best gym experience ever!",
  },
  {
    name: "Amit Roy",
    text: "Trainers are amazing and very supportive.",
  },
  {
    name: "Sneha Gupta",
    text: "Loved the environment and equipment quality.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-black px-6">

      <Reveal>
        <h2 className="text-4xl text-center mb-12">
          What Our Members Say
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reviews.map((r, i) => (
          <Reveal key={i}>
            <div className="bg-zinc-900 p-6 rounded-xl">
              <p className="text-gray-300 text-sm">“{r.text}”</p>
              <h4 className="mt-4 text-red-500 font-semibold">{r.name}</h4>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}
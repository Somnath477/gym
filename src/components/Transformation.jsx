"use client";

import { useEffect, useState } from "react";

const transformations = [
  {
    name: "Rahul",
    before: "/images/before1.jpg",
    after: "/images/after1.jpg",
    text: "Lost 12kg in 3 months with proper guidance.",
  },
  {
    name: "Amit",
    before: "/images/before2.jpg",
    after: "/images/after2.jpg",
    text: "Gained strength and muscle within 4 months.",
  },
  {
    name: "Sneha",
    before: "/images/before3.jpg",
    after: "/images/after3.jpg",
    text: "Improved fitness and confidence completely.",
  },
  {
    name: "Riya",
    before: "/images/before4.jpg",
    after: "/images/after4.jpg",
    text: "Lost fat and built a toned body.",
  },
];

export default function Transformation() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % transformations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const t = transformations[index];

  return (
    <section className="py-28 bg-black text-center px-6">

      <h2 className="text-4xl mb-12">
        Real Transformations 💪
      </h2>

      <div className="max-w-5xl mx-auto">

        {/* SLIDER CARD */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg transition duration-500">

          {/* IMAGES */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src={t.before}
              alt="before"
              className="rounded-xl h-64 object-cover"
            />
            <img
              src={t.after}
              alt="after"
              className="rounded-xl h-64 object-cover"
            />
          </div>

          {/* TEXT */}
          <p className="text-gray-300 mt-6 text-sm">
            “{t.text}”
          </p>

          <h4 className="mt-3 text-red-500 font-semibold">
            {t.name}
          </h4>

        </div>

      </div>

    </section>
  );
}
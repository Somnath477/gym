"use client";

import Reveal from "./Reveal";

const trainers = [
  { name: "Rahul Singh", role: "Strength Coach", img: "trainer1.jpg" },
  { name: "Amit Das", role: "Fitness Trainer", img: "trainer2.jpg" },
  { name: "Sneha Roy", role: "Yoga Expert", img: "trainer3.jpg" },
];

export default function Trainers() {
  return (
    <section className="py-28 bg-zinc-900 px-6">

      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold">
            Meet Our <span className="text-red-500">Trainers</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Experts dedicated to your transformation
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {trainers.map((t, i) => (
          <Reveal key={i}>
            <div className="group text-center">

              <div className="overflow-hidden rounded-2xl">
                <img
                  src={`/images/${t.img}`}
                  className="h-72 w-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <h3 className="mt-4 text-xl font-bold">
                {t.name}
              </h3>

              <p className="text-gray-400 text-sm">
                {t.role}
              </p>

            </div>
          </Reveal>
        ))}

      </div>

    </section>
  );
}
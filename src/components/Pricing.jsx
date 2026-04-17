"use client";

import Reveal from "./Reveal";

const plans = [
  {
    name: "Basic",
    price: "₹999",
    features: ["Gym Access", "Locker Facility", "Basic Training"],
  },
  {
    name: "Pro",
    price: "₹1999",
    features: ["All Basic Features", "Personal Trainer", "Diet Plan"],
    highlight: true,
  },
  {
    name: "Elite",
    price: "₹2999",
    features: ["All Pro Features", "1-on-1 Coaching", "Priority Support"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-28 bg-black px-6">

      <Reveal>
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold">
            Choose Your <span className="text-red-500">Plan</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Flexible memberships designed for your fitness goals
          </p>
        </div>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {plans.map((p, i) => (
          <Reveal key={i}>
            <div
              className={`p-8 rounded-2xl border transition duration-300 ${
                p.highlight
                  ? "bg-red-500 text-black scale-105"
                  : "bg-zinc-900 border-zinc-800 hover:border-red-500"
              }`}
            >
              <h3 className="text-xl font-bold">{p.name}</h3>

              <p className="text-4xl font-extrabold mt-3">{p.price}</p>
              <p className="text-sm mt-1">/ month</p>

              <ul className="mt-6 space-y-2 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx}>✔ {f}</li>
                ))}
              </ul>

              <button
                className={`mt-6 w-full py-3 rounded-full font-semibold ${
                  p.highlight
                    ? "bg-black text-white"
                    : "bg-red-500 text-white"
                }`}
              >
                Join Now
              </button>
            </div>
          </Reveal>
        ))}

      </div>
    </section>
  );
}
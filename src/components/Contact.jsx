export default function Contact() {
  return (
    <section className="py-28 bg-zinc-900 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* INFO */}
        <div>
          <h2 className="text-4xl font-bold text-red-500 mb-6">
            Visit Our Gym
          </h2>

          <p className="text-gray-400 mb-4">
            📍 Park Street, Kolkata, West Bengal
          </p>

          <p className="text-gray-400 mb-4">
            📞 +91 9876543210
          </p>

          <p className="text-gray-400">
            ⏰ Mon - Sat: 6AM - 10PM
          </p>
        </div>

        {/* MAP */}
        <div>
          <iframe
            src="https://www.google.com/maps?q=Park+Street+Kolkata&output=embed"
            className="w-full h-80 rounded-xl border border-zinc-800"
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </section>
  );
}
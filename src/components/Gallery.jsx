export default function Gallery() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl text-center mb-12">Our Gym</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {["gym1.jpg", "gym2.jpg", "gym3.jpg", "gym4.jpg"].map((img, i) => (
          <img
            key={i}
            src={`/images/${img}`}
            className="h-40 w-full object-cover rounded"
          />
        ))}
      </div>
    </section>
  );
}
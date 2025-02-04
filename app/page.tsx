// app/page.tsx
export default function HomePage() {
  return (
    <section className="text-center space-y-8">
      <h1 className="text-4xl font-extrabold text-green-700">
        Welcome to AgroSupply Network
      </h1>
      <p className="text-lg text-gray-700">
        Cutting-edge solutions for smart agriculture and optimized logistics.
      </p>
      <a
        href="/solutions"
        className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700"
      >
        Discover More
      </a>
    </section>
  );
}

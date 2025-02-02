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

// app/about/page.tsx
export default function AboutPage() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold text-green-600">About Us</h2>
      <p className="text-gray-700">
        AgroSupply Network was created to provide innovative solutions for agriculture, utilizing blockchain technology and optimized logistics.
      </p>
      <p className="text-gray-700">
        Our mission is to streamline agricultural processes, reduce risks, and boost productivity.
      </p>
    </section>
  );
}
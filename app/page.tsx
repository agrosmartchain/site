import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 to-green-300 text-gray-900">
      {/* Hero Section */}
      <section className="w-full text-center py-20">
        <h1 className="text-5xl font-bold mb-6">
          Bine ai venit la AgroSupply Network
        </h1>
        <p className="text-xl mb-8">
          Soluția ta pentru agricultură inteligentă și logistică optimizată
        </p>
        <Link href="/discover">
          <a className="px-8 py-4 text-lg font-semibold text-white bg-green-600 rounded-lg shadow-lg hover:bg-green-700 transition-all">
            Descoperă mai multe
          </a>
        </Link>
      </section>

      {/* Prezentare Proiect */}
      <section className="w-full max-w-6xl mx-auto py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Despre AgroSupply Network</h2>
        <p className="text-lg leading-8 mb-8">
          Proiectul nostru combină eficiența agriculturii inteligente și optimizarea logisticii prin blockchain. 
          Tokenul nativ **AgroSupply Token (AST)** este cheia către o soluție globală scalabilă.
        </p>
        <Image
          src="/images/agriculture.jpg"
          alt="Agricultură Inteligentă"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
        />
      </section>

      {/* Beneficii */}
      <section className="w-full max-w-6xl mx-auto py-16 px-8">
        <h2 className="text-3xl font-semibold text-center mb-6">Beneficii</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Eficiență Crescută</h3>
            <p>Automatizăm procesele agricole pentru rezultate mai bune și costuri reduse.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Securitate Blockchain</h3>
            <p>Datele sunt protejate și transparente, utilizând tehnologia blockchain.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg text-center">
            <h3 className="text-2xl font-bold mb-4">Soluții Scalabile</h3>
            <p>Extindem rețeaua pentru a sprijini fermierii și operatorii logistici din întreaga lume.</p>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="w-full max-w-6xl mx-auto py-16 px-8 bg-green-50 rounded-lg shadow-md mt-16">
        <h2 className="text-3xl font-semibold text-center mb-6">Plan de Dezvoltare</h2>
        <ul className="text-lg leading-8 list-disc list-inside">
          <li>2025 Q1: Lansarea platformei și implementarea funcțiilor de bază.</li>
          <li>2025 Q2: Integrarea tokenului AST și expansiunea rețelei.</li>
          <li>2025 Q3: Parteneriate strategice cu lideri din industria agricolă.</li>
        </ul>
      </section>

      {/* Contact */}
      <section className="w-full max-w-6xl mx-auto py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contactează-ne</h2>
        <p className="text-lg mb-8">Pentru mai multe informații, scrie-ne la <a href="mailto:contact@agrosupplynetwork.com" className="text-green-600 underline">contact@agrosupplynetwork.com</a></p>
      </section>
    </main>
  );
}

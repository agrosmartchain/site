import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'AgroSupply Network',
  description: 'Solutions for smart agriculture and optimized logistics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-green-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">AgroSupply Network</h1>
            <nav className="flex space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/about" className="hover:underline">About Us</a>
              <a href="/solutions" className="hover:underline">Solutions</a>
              <a href="/contact" className="hover:underline">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container mx-auto p-6">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          © 2025 AgroSupply Network. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
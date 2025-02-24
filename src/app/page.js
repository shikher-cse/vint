import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center p-5 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Vintage Store</h1>
        <div>
          <Link href="/" className="mx-3">Home</Link>
          <Link href="/shirts" className="mx-3">Vintage Shirts</Link>
          <Link href="/cart" className="mx-3">Cart</Link>
          <Link href="/contact" className="mx-3">Contact</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[60vh] flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold">Authentic Vintage Shirts</h2>
          <p className="mt-2">Curated collection of rare and classic vintage shirts.</p>
          <Link href="/shirts" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md">Shop Now</Link>
        </div>
      </header>

      {/* Featured Vintage Shirts */}
      <section className="py-10 px-5">
        <h3 className="text-3xl font-bold text-center mb-6">Featured Vintage Shirts</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sample Product */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-4 rounded-lg shadow-lg">
              <Image src="/shirt-placeholder.jpg" width={300} height={300} alt="Vintage Shirt" className="rounded-lg" />
              <h4 className="text-xl font-semibold mt-3">Vintage Shirt {item}</h4>
              <p className="text-gray-600">$29.99</p>
              <Link href="/shirts" className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-md">View</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-5 bg-gray-800 text-white mt-10">
        <p>&copy; 2025 Vintage Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

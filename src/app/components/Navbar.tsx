import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-black/60 backdrop-blur-md py-4 px-8 flex items-center justify-between fixed top-0 left-0 z-50 shadow-lg">
      <div className="text-xl font-bold text-white">
        <Link href="/">Thomas Kidane</Link>
      </div>
      <div className="flex gap-6">
        <Link href="/" className="text-white hover:text-purple-300 transition">Home</Link>
        <Link href="/blog" className="text-white hover:text-purple-300 transition">Blog</Link>
      </div>
    </nav>
  );
} 
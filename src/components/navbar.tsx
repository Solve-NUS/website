import Link from 'next/link'; // If using Next.js; otherwise, use <a> tags.

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-gray-800">
          Solve@NUS
        </Link>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
          <Link href="/archives" className="text-gray-600 hover:text-gray-800">
            Archives
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

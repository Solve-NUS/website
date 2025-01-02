import Link from 'next/link'; // If using Next.js; otherwise, use <a> tags.
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 h-16">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="Solve@NUS Logo"
            width={32} // Set the width of the image
            height={32} // Set the height of the image
            className="mr-2" // Space between the logo and text
          />
          <span className="text-xl font-bold text-gray-800">Solve@NUS</span>
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

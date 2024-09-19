// components/Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Logo/Brand */}
          <div>
            <h1 className="text-lg font-bold mb-4">YourBrand</h1>
            <p className="text-sm text-gray-400">
              Bringing you quality and reliable service.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul>
              <li className="mb-2">
                <Link href="/about" className="hover:text-gray-400">About Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
              </li>
              <li className="mb-2">
                <Link href="/services" className="hover:text-gray-400">Services</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul>
              <li className="mb-2">
                <Link href="/blog" className="hover:text-gray-400">Blog</Link>
              </li>
              <li className="mb-2">
                <Link href="/faq" className="hover:text-gray-400">FAQ</Link>
              </li>
              <li className="mb-2">
                <Link href="/support" className="hover:text-gray-400">Support</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul>
              <li className="mb-2">
                <a href="https://facebook.com" className="hover:text-gray-400" target="_blank">Facebook</a>
              </li>
              <li className="mb-2">
                <a href="https://twitter.com" className="hover:text-gray-400" target="_blank">Twitter</a>
              </li>
              <li className="mb-2">
                <a href="https://instagram.com" className="hover:text-gray-400" target="_blank">Instagram</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center mt-10 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} MusicSchool. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

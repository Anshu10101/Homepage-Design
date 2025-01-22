import { FaFacebookF, FaTwitter, FaInstagram, FaSearch } from "react-icons/fa";

const NavbarTop = () => {
  return (
    <div className="bg-blue-900 text-white text-sm py-2">
      <div className="container mx-auto flex justify-end items-center px-4 space-x-4">
        {/* Contact Section */}
        <a
          href="mailto:info@registerkaro.in"
          className="hover:underline flex items-center space-x-1"
        >
          <span>📧</span>
          <span>www.registerkaro.in</span>
        </a>
        <span className="border-l border-gray-400 h-4"></span>
        <a
          href="tel:+918447746183"
          className="hover:underline flex items-center space-x-1"
        >
          <span>📞</span>
          <span>+91 8447746183</span>
        </a>
        <span className="border-l border-gray-400 h-4"></span>
        {/* Social Media Section */}
        <button className="hover:text-orange-400 bg-transparent border-none cursor-pointer">
          <FaInstagram />
        </button>
        <button className="hover:text-orange-400 bg-transparent border-none cursor-pointer">
          <FaFacebookF />
        </button>
        <button className="hover:text-orange-400 bg-transparent border-none cursor-pointer">
          <FaTwitter />
        </button>
        
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <NavbarTop />
      <div className="bg-white text-black text-lg py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo Section */}
          <div className="text-2xl font-bold">
            <a href="/">Logo</a>
          </div>
          {/* Navigation Links */}
          <div className="flex space-x-6">
            <a href="/" className="hover:underline">
              Home
            </a>
            <a href="/about" className="hover:underline">
              Our Services
            </a>
            <a href="/services" className="hover:underline">
              Blog
            </a>
            <a href="/contact" className="hover:underline">
              Contact Us
            </a>
            <a href="/contact" className="hover:underline">
              About us
            </a>
            <button className="text-black hover:text-gray-600 bg-transparent border-none cursor-pointer">
              <FaSearch />
            </button>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Talk to an Expert
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
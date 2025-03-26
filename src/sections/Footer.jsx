import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#3f2710] font-[Raleway] text-white p-10 mt-40">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">About Us</h2>
          <p>We celebrate Indian tribal art and crafts by connecting artisans with global buyers. Every purchase supports traditional communities and their heritage.</p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Quick Links</h2>
          <ul>
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/shop" className="hover:underline">Shop</a></li>
            <li><a href="/about" className="hover:underline">Category</a></li>
            <li><a href="/about" className="hover:underline">Communities</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-lg font-bold mb-4">Contact Us</h2>
          <p>Email: support@tribalcrafts.com</p>
          <p>Phone: <span className='font-sans'>+91 12345 67890</span></p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center border-t border-[#ffffff2e] pt-6">
        <p>&copy; {new Date().getFullYear()} Tribal Crafts. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

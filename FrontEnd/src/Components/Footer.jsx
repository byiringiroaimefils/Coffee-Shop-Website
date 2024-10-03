

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-96">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between mb-8">
          {/* About Us Section */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <p className="text-sm text-gray-400">
              Your favorite coffee shop, serving freshly brewed coffee and delightful treats.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-400 ">Home</a></li>
              <li><a href="#" className="text-sm text-gray-400 ">Menu</a></li>
              <li><a href="#" className="text-sm text-gray-400 ">Contact</a></li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-sm text-gray-400">Email: support@coffeeshop.com</p>
            <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 ">
            {/* <FontAwesomeIcon icon={faFacebookF} /> */}
          </a>
          <a href="#" className="text-gray-400 ">
            {/* <FontAwesomeIcon icon={faTwitter} /> */}
          </a>
          <a href="#" className="text-gray-400 ">
            {/* <FontAwesomeIcon icon={faInstagram} /> */}
          </a>
          <a href="#" className="text-gray-400 ">
            {/* <FontAwesomeIcon icon={faLinkedinIn} /> */}
          </a>
        </div>


        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-sm text-gray-500">&copy; 2024 Coffee Shop. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

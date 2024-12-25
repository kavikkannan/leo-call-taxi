const FooterComponent = () => {
    return (
      <footer className="bg-gray-100 text-gray-800 py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Navigation Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">NAVIGATION</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Categories</a></li>
              <li><a href="#" className="hover:underline">Bestseller</a></li>
              <li><a href="#" className="hover:underline">Clients</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
            </ul>
          </div>
  
          {/* Legal Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">LEGAL</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
              <li><a href="#" className="hover:underline">Corporate Information</a></li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">TALK TO US</h3>
            <p className="mb-2">support@hm.com</p>
            <p>+66 2399 1145</p>
          </div>
  
          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-600">
                <i className="fab fa-instagram">📷</i>
              </a>
              <a href="#" className="hover:text-gray-600">
                <i className="fab fa-facebook">🌐</i>
              </a>
              <a href="#" className="hover:text-gray-600">
                <i className="fab fa-twitter">🐦</i>
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-600 mt-8">
          Created by CodeCrafters | © 2025 All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default FooterComponent;
  
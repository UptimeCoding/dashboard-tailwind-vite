import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <p>&copy; 2024 ObjectWays</p>
            
          </div>
          <nav>
            <ul className="flex">
              
              <li className="mr-6">
                <a href="#" className="text-white hover:text-gray-400">About Us</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-white hover:text-gray-400">Blog</a>
              </li>
              <li className="mr-6">
                <a href="#" className="text-white hover:text-gray-400">Licenses</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

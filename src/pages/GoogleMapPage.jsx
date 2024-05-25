import React from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Footer from '../pages/Footer';

function GoogleMapPage({ darkMode, sidebarOpen, setSidebarOpen, toggleDarkMode }) {
  return (
    <div className={`flex flex-col md:flex-row h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className={`relative flex-1 overflow-y-auto overflow-x-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Objectways Locations in India</h1>
          <p className="mb-4">Google Map embedded showing Objectways locations in India</p>

          {/* Embedded Google Map */}
          <div className="mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125360.72384047126!2d78.04761276767903!3d10.923838745350452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa2fa775015431%3A0x2214f0490735ec99!2sOBJECT%20WAYS!5e0!3m2!1sen!2sin!4v1716630792466!5m2!1sen!2sin"
              width="100%"
              height="600px"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default GoogleMapPage;

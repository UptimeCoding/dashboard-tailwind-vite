import React from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Footer from '../pages/Footer';

function IconPage({ darkMode, sidebarOpen, setSidebarOpen, toggleDarkMode }) {
  return (
    <div className={`flex flex-col md:flex-row h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className={`relative flex-1 overflow-y-auto overflow-x-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Material Design Icons</h1>
          <p className="mb-4">Handcrafted by our friends from Google</p>

          <div className="mb-8">
            <iframe
              src="https://www.creative-tim.com/vuematerial/components/icon"
              title="Material Design Icons"
              width="100%"
              height="600px"
              frameBorder="0"
            />
          </div>

         
          
        </div>
        <Footer />
      </div>

    </div>
  );
}

export default IconPage;

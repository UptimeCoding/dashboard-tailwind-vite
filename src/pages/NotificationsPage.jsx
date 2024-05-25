import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Footer from '../pages/Footer';

function NotificationsPage() {
  const [darkMode, setDarkMode] = useState(false); // Define darkMode state
  const [sidebarOpen, setSidebarOpen] = useState(false); // Define sidebarOpen state

  // Define toggleDarkMode function
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  return (
    <div className={`flex flex-col md:flex-row h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className={`relative flex-1 overflow-y-auto overflow-x-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        {/* Main content */}
        <div className="flex flex-col items-center justify-center min-h-screen">
          {/* Heading */}
          <h1 className="text-3xl font-bold mb-4">Notifications <span role="img" aria-label="heart emoji">❤️</span></h1>

          {/* Notifications Style */}
          <div className="flex flex-wrap justify-center w-full max-w-3xl mb-8">
            <div className="w-full sm:w-1/2 p-4">
              <h2 className="text-lg font-bold mb-2">Notifications Style</h2>
              {/* Notification Examples */}
              <div className="mb-4 p-4 bg-gray-100 rounded-lg shadow">
                <p className="text-gray-800">This is a plain notification</p>
              </div>

              <div className="mb-4 p-4 bg-blue-100 rounded-lg shadow flex justify-between items-center">
                <p className="text-blue-800">This is a notification with close button.</p>
                <button className="text-blue-600 hover:text-blue-800">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 11-1.414-1.414L8.586 10 5.293 6.707a1 1 0 111.414-1.414L10 8.586z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-4 p-4 bg-green-100 rounded-lg shadow flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="w-6 h-6 fill-current text-green-500 mr-2" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13h-2v-2h2v2zm0-4h-2V7h2v4z"></path>
                  </svg>
                  <p className="text-green-800">This is a notification with close button and icon.</p>
                </div>
                <button className="text-green-600 hover:text-green-800">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 11-1.414-1.414L8.586 10 5.293 6.707a1 1 0 111.414-1.414L10 8.586z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="mb-4 p-4 bg-yellow-100 rounded-lg shadow flex justify-between items-center">
                <div className="flex items-center">
                  <svg className="w-6 h-6 fill-current text-yellow-500 mr-2" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13h-2v-2h2v2zm0-4h-2V7h2v4z"></path>
                  </svg>
                  <div>
                    <p className="text-yellow-800">This is a notification with close button and icon and have many lines. You can see that the icon and the close button are always vertically aligned.</p>
                    <p className="text-yellow-800">This is a beautiful notification. So you don't have to worry about the style.</p>
                  </div>
                </div>
                <button className="text-yellow-600 hover:text-yellow-800">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 11-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 11-1.414-1.414L8.586 10 5.293 6.707a1 1 0 111.414-1.414L10 8.586z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Notification States */}
            <div className="w-full sm:w-1/2 p-4">
              <h2 className="text-lg font-bold mb-2">Notification States</h2>
              <div className="mb-4 p-4 bg-blue-100 rounded-lg shadow">
                <p className="text-blue-800">Info - This is a regular notification made with ".alert-info"</p>
              </div>
              <div className="mb-4 p-4 bg-green-100 rounded-lg shadow">
                <p className="text-green-800">Success - This is a regular notification made with ".alert-success"</p>
              </div>
              <div className="mb-4 p-4 bg-yellow-100 rounded-lg shadow">
                <p className="text-yellow-800">Warning - This is a regular notification made with ".alert-warning"</p>
              </div>
              <div className="mb-4 p-4 bg-red-100 rounded-lg shadow">
                <p className="text-red-800">Danger - This is a regular notification made with ".alert-danger"</p>
              </div>
              <div className="mb-4 p-4 bg-indigo-100 rounded-lg shadow">
                <p className="text-indigo-800">Primary - This is a regular notification made with ".alert-primary"</p>
              </div>
            </div>
          </div>

          <div className="w-full max-w-lg">
            <h2 className="text-lg font-bold mb-4 text-center">Notifications Places</h2>
            <div className="flex flex-wrap justify-center">
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg mb-2 mr-2">Top Left</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg mb-2 mr-2">Top Center</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg mb-2 mr-2">Top Right</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg mb-2 mr-2">Bottom Left</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg mb-2 mr-2">Bottom Center</button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg mb-2 mr-2">Bottom Right</button>
            </div>
          </div>
            </div>
            <Footer />
      </div>
    </div>
  );
}

export default NotificationsPage;


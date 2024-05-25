import React, { useState } from 'react';
import Footer from '../pages/Footer';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';

function ProfilePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className={`relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                 
        <main className="px-4 sm:px-6 lg:px-8 py-8 flex justify-center">
          <div className={`container mx-auto p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white'}`}>
            
            <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left Column: Profile Form */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Company</label>
                  <input
                    type="text"
                    disabled
                    className="w-full p-2 border rounded bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">User Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email Address</label>
                  <input type="email" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium">First Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Last Name</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Address</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium">City</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Country</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Postal Code</label>
                  <input type="text" className="w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium">About Me</label>
                  <textarea className="w-full p-2 border rounded" rows="9"></textarea>
                </div>
                <button className={`w-full p-2 bg-indigo-600 text-white rounded ${darkMode ? 'hover:bg-indigo-500' : 'hover:bg-indigo-700'}`}>
                  Update Profile
                </button>
              </div>

              {/* Right Column: Profile Details */}
              <div className={`space-y-4 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md">
                  <img
                    src="https://demos.creative-tim.com/vue-material-dashboard/img/marc.aba54d65.jpg"
                    alt="Profile"
                    className="w-32 h-32 rounded-full shadow-md"
                  />
                  <h2 className="text-xl font-bold mt-4">CEO / Co-Founder</h2>
                  <p className="text-gray-700">Alec Thompson</p>
                  <p className="mt-4">
                    Don't be scared of the truth because we need to restart the human foundation in truth.
                    And I love you like Kanye loves Kanye. I love Rick Owens’ bed design but the back is...
                  </p>
                  <button className={`mt-4 p-2 bg-indigo-600 text-white rounded-full ${darkMode ? 'hover:bg-indigo-500' : 'hover:bg-indigo-700'}`}>
                    Follow
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default ProfilePage;

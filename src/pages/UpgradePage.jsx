import React from 'react';
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import Footer from '../pages/Footer';

function UpgradePage({ darkMode, sidebarOpen, setSidebarOpen, toggleDarkMode }) {
  return (
    <div className={`flex flex-col md:flex-row h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className={`relative flex-1 overflow-y-auto overflow-x-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        {/* Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Vue Material Dashboard PRO</h1>
          <p className="mb-4">Are you looking for more components? Please check our Premium Version of Vue Material Dashboard.</p>

          <div className="mb-8">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-gray-200">
                <tr>
                  <th className="border border-gray-200"></th>
                  <th className="border border-gray-200">Free</th>
                  <th className="border border-gray-200">PRO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-200">Components</td>
                  <td className="border border-gray-200">60</td>
                  <td className="border border-gray-200">200</td>
                </tr>
                <tr>
                  <td className="border border-gray-200">Plugins</td>
                  <td className="border border-gray-200">2</td>
                  <td className="border border-gray-200">15</td>
                </tr>
                <tr>
                  <td className="border border-gray-200">Example Pages</td>
                  <td className="border border-gray-200">3</td>
                  <td className="border border-gray-200">27</td>
                </tr>
                <tr>
                  <td className="border border-gray-200">Login, Register, Pricing, Lock Pages</td>
                  <td className="border border-gray-200">-</td>
                  <td className="border border-gray-200">✔</td>
                </tr>
                <tr>
                  <td className="border border-gray-200">DataTables, VectorMap, SweetAlert, Wizard, jQueryValidation, FullCalendar etc...</td>
                  <td className="border border-gray-200">-</td>
                  <td className="border border-gray-200">✔</td>
                </tr>
                <tr>
                  <td className="border border-gray-200">Mini Sidebar</td>
                  <td className="border border-gray-200">-</td>
                  <td className="border border-gray-200">✔</td>
                </tr>
                <tr>
                  <td className="border border-gray-200">Premium Support</td>
                  <td className="border border-gray-200">-</td>
                  <td className="border border-gray-200">✔</td>
                </tr>
                <tr>
                  <td className="border border-gray-200">Price</td>
                  <td className="border border-gray-200">Free: Just $0</td>
                  <td className="border border-gray-200">PRO: Just $59</td>
                </tr>
                <tr>
                  <td className="border border-gray-200">Action</td>
                  <td className="border border-gray-200">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Current</button>
                  </td>
                  <td className="border border-gray-200">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Upgrade to PRO</button>
                  </td>
                </tr>
              </tbody>
            </table>
            
          </div>
          
        </div>
       
      </div>
      
    </div>
    
  );
}

export default UpgradePage;

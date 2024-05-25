import React, { useState } from 'react';
import Sidebar from '../partials/Sidebar';
import Footer from '../pages/Footer';
import Header from '../partials/Header';
function SimpleTable() {
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
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        <div>
           {/* First Table */}
           <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Simple Table</h2>
            <p className="text-gray-600 mb-4">Here is a subtitle for this table</p>
            <table className="w-full bg-white rounded shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Country</th>
                  <th className="px-4 py-2">City</th>
                  <th className="px-4 py-2">Salary</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">Dakota Rice</td>
                  <td className="px-4 py-2">Niger</td>
                  <td className="px-4 py-2">Oud-Turnhout</td>
                  <td className="px-4 py-2">$36,738</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Minerva Hooper</td>
                  <td className="px-4 py-2">Curaçao</td>
                  <td className="px-4 py-2">Sinaai-Waas</td>
                  <td className="px-4 py-2">$23,738</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Sage Rodriguez</td>
                  <td className="px-4 py-2">Netherlands</td>
                  <td className="px-4 py-2">Overland Park</td>
                  <td className="px-4 py-2">$56,142</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Philip Chaney</td>
                  <td className="px-4 py-2">Korea, South</td>
                  <td className="px-4 py-2">Gloucester</td>
                  <td className="px-4 py-2">$38,735</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Doris Greene</td>
                  <td className="px-4 py-2">Malawi</td>
                  <td className="px-4 py-2">Feldkirchen in Kārnten</td>
                  <td className="px-4 py-2">$63,542</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">Mason Porter</td>
                  <td className="px-4 py-2">Chile</td>
                  <td className="px-4 py-2">Gloucester</td>
                  <td className="px-4 py-2">$78,615</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Second Table */}
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">Table on Plain Background</h2>
            <p className="text-gray-600 mb-4">Here is a subtitle for this table</p>
            <table className="w-full bg-white rounded shadow-md">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Salary</th>
                  <th className="px-4 py-2">Country</th>
                  <th className="px-4 py-2">City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2">1</td>
                  <td className="px-4 py-2">Dakota Rice</td>
                  <td className="px-4 py-2">$36,738</td>
                  <td className="px-4 py-2">Niger</td>
                  <td className="px-4 py-2">Oud-Turnhout</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">2</td>
                  <td className="px-4 py-2">Minerva Hooper</td>
                  <td className="px-4 py-2">$23,738</td>
                  <td className="px-4 py-2">Curaçao</td>
                  <td className="px-4 py-2">Sinaai-Waas</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">3</td>
                  <td className="px-4 py-2">Sage Rodriguez</td>
                  <td className="px-4 py-2">$56,142</td>
                  <td className="px-4 py-2">Netherlands</td>
                  <td className="px-4 py-2">Overland Park</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">4</td>
                  <td className="px-4 py-2">Philip Chaney</td>
                  <td className="px-4 py-2">$38,735</td>
                  <td className="px-4 py-2">Korea, South</td>
                  <td className="px-4 py-2">Gloucester</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default SimpleTable;

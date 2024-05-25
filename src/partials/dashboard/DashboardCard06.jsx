import React, { useState } from 'react';

const tasksData = {
  bugs: [
    'Sign contract for "What are conference organizers afraid of?"',
    'Lines From Great Russian Literature? Or E-mails From My Boss?',
    'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
    'Sign contract for "What are conference organizers afraid of?"',
    'Lines From Great Russian Literature? Or E-mails From My Boss?',
  ],
  website: [
    'Sign contract for "What are conference organizers afraid of?"',
    'Lines From Great Russian Literature? Or E-mails From My Boss?',
  ],
  server: [
    'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
    'Sign contract for "What are conference organizers afraid of?"',
    'Lines From Great Russian Literature? Or E-mails From My Boss?',
    'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
  ],
};

function DashboardCard06() {
  const [currentTab, setCurrentTab] = useState('website');

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Tasks</h2>
        <div className="flex space-x-2">
          <button onClick={() => handleTabClick('bugs')} className="text-indigo-500 hover:text-indigo-600">
            Bugs
          </button>
          <button onClick={() => handleTabClick('website')} className="text-indigo-500 hover:text-indigo-600">
            Website
          </button>
          <button onClick={() => handleTabClick('server')} className="text-indigo-500 hover:text-indigo-600">
            Server
          </button>
        </div>
      </header>
      <div className="p-3 flex flex-col overflow-x-auto">
        <table className="w-full lg:w-auto divide-y divide-slate-200 dark:divide-slate-700">
          <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
            {tasksData[currentTab].map((task, index) => (
              <tr key={index}>
                <td className="px-4 py-2">
                  <input type="checkbox" className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out" />
                </td>
                <td className="px-4 py-2 text-slate-800 dark:text-slate-100">{task}</td>
                <td className="px-4 py-2 flex justify-end space-x-2">
                  <button className="text-slate-400 hover:text-slate-500">Edit</button>
                  <button className="text-slate-400 hover:text-slate-500">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardCard06;

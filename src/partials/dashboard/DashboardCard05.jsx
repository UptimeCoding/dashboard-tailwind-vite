import React from 'react';

function DashboardCard05() {
  const employees = [
    { id: 1, name: 'Dakota Rice', salary: '$36,738', country: 'Niger', city: 'Oud-Turnhout' },
    { id: 2, name: 'Minerva Hooper', salary: '$23,738', country: 'Curaçao', city: 'Sinaai-Waas' },
    { id: 3, name: 'Sage Rodriguez', salary: '$56,142', country: 'Netherlands', city: 'Overland Park' },
    { id: 4, name: 'Philip Chaney', salary: '$38,735', country: 'Korea, South', city: 'Gloucester' },
  ];

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
       <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Employees Stats</h2>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">New employees on 15th September, 2016</p>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead className="bg-slate-50 dark:bg-slate-700">
              <tr>
                <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase dark:text-slate-300">ID</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase dark:text-slate-300">Name</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase dark:text-slate-300">Salary</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase dark:text-slate-300">Country</th>
                <th className="px-4 py-2 text-left text-xs font-medium text-slate-500 uppercase dark:text-slate-300">City</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-800 divide-y divide-slate-200 dark:divide-slate-700">
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td className="px-4 py-2 text-slate-800 dark:text-slate-100">{employee.id}</td>
                  <td className="px-4 py-2 text-slate-800 dark:text-slate-100">{employee.name}</td>
                  <td className="px-4 py-2 text-slate-800 dark:text-slate-100">{employee.salary}</td>
                  <td className="px-4 py-2 text-slate-800 dark:text-slate-100">{employee.country}</td>
                  <td className="px-4 py-2 text-slate-800 dark:text-slate-100">{employee.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard05;

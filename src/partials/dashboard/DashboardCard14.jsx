import React from 'react';

function DashboardCard14() {
  return (
    <div className="flex flex-col col-span-6 sm:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <svg className="w-8 h-8 fill-current text-blue-500" viewBox="0 0 24 24">
            <path d="M13 2H11V13H2V11H11V2H13M20.84 22.73L18.74 20.63C17.64 21.45 16.34 22 15 22C11.69 22 9 19.31 9 16C9 14.66 9.55 13.36 10.37 12.26L8.27 10.16C6.9 11.7 6 13.72 6 16C6 20.42 9.58 24 14 24C16.28 24 18.3 23.1 19.84 21.73L22 24V20H20L20.84 22.73M18 13V11H15V8H13V11H10V13H13V16H15V13H18Z" />
          </svg>
          <div className="text-right">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Revenue</h2>
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">$34,245</div>
            <div className="text-sm font-semibold text-slate-400 dark:text-slate-500">Last 24 Hours</div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default DashboardCard14;

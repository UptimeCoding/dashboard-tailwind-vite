import React from 'react';

function DashboardCard15() {
  return (
    <div className="flex flex-col col-span-6 sm:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <svg className="w-8 h-8 fill-current text-orange-500" viewBox="0 0 24 24">
            <path d="M14,2H6C4.9,2 4,2.9 4,4V20C4,21.1 4.9,22 6,22H18C19.1,22 20,21.1 20,20V8L14,2M16,14H8V12H16V14M16,18H8V16H16V18Z" />
          </svg>
          <div className="text-right">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Used Space</h2>
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">49/50 GB</div>
            <div className="text-sm font-semibold text-slate-400 dark:text-slate-500">Get More Space...</div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default DashboardCard15;

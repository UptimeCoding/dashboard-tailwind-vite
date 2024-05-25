import React from 'react';

function DashboardCard16() {
  return (
    <div className="flex flex-col col-span-6 sm:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <svg className="w-8 h-8 fill-current text-green-500" viewBox="0 0 24 24">
            <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.59L19 8L10 17Z" />
          </svg>
          <div className="text-right">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Fixed Issues</h2>
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">75</div>
            <div className="text-sm font-semibold text-slate-400 dark:text-slate-500">Tracked from Github</div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default DashboardCard16;

import React from 'react';

function DashboardCard17() {
  return (
    <div className="flex flex-col col-span-6 sm:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <svg className="w-8 h-8 fill-current text-purple-500" viewBox="0 0 24 24">
            <path d="M12,2A10,10 0 1,0 22,12A10,10 0 0,0 12,2M7.07,10.41C7.5,10.84 8.08,11.14 8.7,11.14H10V15.73L8.67,17.05A1,1 0 0,0 9.05,18.77L11,16.82L12.95,18.77A1,1 0 0,0 14.33,17.05L13,15.73V11.14H14.3C14.92,11.14 15.5,10.84 15.93,10.41C16.36,9.98 16.66,9.4 16.66,8.78C16.66,8.16 16.36,7.58 15.93,7.15C15.5,6.72 14.92,6.42 14.3,6.42H8.7C8.08,6.42 7.5,6.72 7.07,7.15C6.64,7.58 6.34,8.16 6.34,8.78C6.34,9.4 6.64,9.98 7.07,10.41M12,4.5A1.5,1.5 0 1,1 10.5,6A1.5,1.5 0 0,1 12,4.5Z" />
          </svg>
          <div className="text-right">
            <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100">Followers</h2>
            <div className="text-3xl font-bold text-slate-800 dark:text-slate-100">+245</div>
            <div className="text-sm font-semibold text-slate-400 dark:text-slate-500">Just Updated</div>
          </div>
        </header>
      </div>
    </div>
  );
}

export default DashboardCard17;

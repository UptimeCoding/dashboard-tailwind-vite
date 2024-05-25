import React from 'react';

function Card({ icon, title, value, description }) {
  return (
    <div className="flex items-center bg-white dark:bg-slate-800 shadow-lg rounded-md p-6 mb-6">
      <div className="flex-shrink-0 mr-6">
        <img src={icon} className="w-8 h-8" alt="Icon" />
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h2>
        <p className="text-2xl font-bold text-gray-900 dark:text-gray-300">{value}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 bg-gray-100 dark:bg-gray-900">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card
          icon="/revenue-icon.svg"
          title="Revenue"
          value="$34,245"
          description="Last 24 Hours"
        />
        <Card
          icon="/storage-icon.svg"
          title="Used Space"
          value="49/50 GB"
          description="Get More Space..."
        />
        <Card
          icon="/issues-icon.svg"
          title="Fixed Issues"
          value="75"
          description="Tracked from Github"
        />
        <Card
          icon="/followers-icon.svg"
          title="Followers"
          value="+245"
          description="Just Updated"
        />
      </div>
    </div>
  );
}

export default Test1;

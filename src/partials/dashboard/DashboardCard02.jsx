// DashboardCard02.js
import React from 'react';
import BarChart from '../../charts/BarChart01';
import Icon from '../../images/icon-02.svg';

// Import utilities
import { tailwindConfig, hexToRGB } from '../../utils/Utils';

function DashboardCard02() {
  const chartData = {
    labels: [
      '12-01-2020', '01-01-2021', '02-01-2021',
      '03-01-2021', '04-01-2021', '05-01-2021',
      '06-01-2021', '07-01-2021', '08-01-2021',
      '09-01-2021', '10-01-2021', '11-01-2021',
      '12-01-2021', '01-01-2022', '02-01-2022',
      '03-01-2022', '04-01-2022', '05-01-2022',
      '06-01-2022', '07-01-2022', '08-01-2022',
      '09-01-2022', '10-01-2022', '11-01-2022',
      '12-01-2022', '01-01-2023',
    ],
    datasets: [
      {
        data: [
          622, 622, 426, 471, 365, 365, 238,
          324, 288, 206, 324, 324, 500, 409,
          409, 273, 232, 273, 500, 570, 767,
          808, 685, 767, 685, 685,
        ],
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.blue[500])}, 0.8)`,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        borderWidth: 1,
      },
      {
        data: [
          732, 610, 610, 504, 504, 504, 349,
          349, 504, 342, 504, 610, 391, 192,
          154, 273, 191, 191, 126, 263, 349,
          252, 423, 622, 470, 532,
        ],
        backgroundColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.5)`,
        borderColor: `rgba(${hexToRGB(tailwindConfig().theme.colors.slate[500])}, 0.8)`,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
    <div className="px-5 pt-5">
     
      <h2 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-2">Email Subscription</h2>
      <div className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase mb-1">Sales</div>
     
      <div className="text-sm font-semibold text-slate-400 dark:text-slate-500">updated 4 minutes ago</div>
    </div>
      <div className="grow max-sm:max-h-[128px] max-h-[128px]">
        <BarChart data={chartData} width={389} height={128} />
      </div>
    </div>
  );
}

export default DashboardCard02;

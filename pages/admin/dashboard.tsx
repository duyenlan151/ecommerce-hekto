import LayoutAdmin from '@components/Shared/LayoutAdmin';
import React from 'react';

// components
import {
  CardBarChart,
  CardLineChart,
  CardPageVisits,
  CardSocialTraffic,
} from '@components/Shared/Cards';

export default function DashboardPage() {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <CardPageVisits />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <CardSocialTraffic />
        </div>
      </div>
    </>
  );
}

DashboardPage.layout = LayoutAdmin;

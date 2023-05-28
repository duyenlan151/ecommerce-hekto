import DashboardPage from './dashboard';

import React from 'react';
import LayoutAdmin from '@components/Shared/LayoutAdmin';

// components

// import CardLineChart from "components/Cards/CardLineChart.js";
// import CardBarChart from "components/Cards/CardBarChart.js";
// import CardPageVisits from "components/Cards/CardPageVisits.js";
// import CardSocialTraffic from "components/Cards/CardSocialTraffic.js";

// layout for page

// import Admin from 'layouts/Admin.js';

export default function AdminPage() {
  console.log('🚀 ~ file: index.tsx:18 ~ AdminPage ~ AdminPage:', AdminPage);
  return (
    <div className="font-lato">
      AdminPage
      <DashboardPage />
    </div>
  );
}

AdminPage.layout = LayoutAdmin;

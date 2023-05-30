import React from 'react';
import AdminNavbar from './Admin/AdminNavbar';
import HeaderStats from './HeaderStats';
import Sidebar from './Sidebar';

export interface LayoutAdminProps {
  children: React.ReactNode;
}

export default function LayoutAdmin({ children }: LayoutAdminProps) {
  return (
    <div className="bg-white font-lato">
      <Sidebar />
      <div className="relative md:ml-64 min-h-screen">
        {/* <AdminNavbar /> */}
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="px-4 md:px-10 mx-auto w-full pt-24 pb-16">
          {children}
          {/* <FooterAdmin /> */}
        </div>
      </div>
    </div>
  );
}

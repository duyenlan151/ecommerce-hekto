import * as React from 'react';

export default function DashboardSkeleton() {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-white p-4 max-w-sm w-full mx-auto relative shadow-sm">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 max-w-sm w-full mx-auto relative shadow-sm">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-4 max-w-sm w-full mx-auto relative shadow-sm">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-4 bg-slate-200 rounded col-span-2"></div>
                  <div className="h-4 bg-slate-200 rounded col-span-1"></div>
                </div>
                <div className="h-4 bg-slate-200 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 w-full mx-auto mt-4 relative shadow-sm">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-15 bg-slate-200 rounded"></div>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-10 bg-slate-200 rounded col-span-2"></div>
                <div className="h-10 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="h-10 bg-slate-200 rounded col-span-1"></div>
                <div className="h-10 bg-slate-200 rounded col-span-2"></div>
              </div>
              <div className="h-12 bg-slate-200 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

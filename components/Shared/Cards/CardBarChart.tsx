import React, { useEffect } from 'react';
import { Chart, ChartDataset, ChartType, DefaultDataPoint } from 'chart.js/auto';
import dynamic from 'next/dynamic';

// const { Chart } = dynamic(() => import('chart.js'), {
//   loading: () => <p>Loading...</p>,
// });

interface CardBarChartProps {
  datasets: ChartDataset<ChartType, DefaultDataPoint<ChartType>>[];
}

export function CardBarChart({ datasets }: CardBarChartProps) {
  useEffect(() => {
    let chartStatus = Chart.getChart('bar-chart'); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }

    let myChart;
    const canvas: any = document.getElementById('bar-chart');
    if (canvas) {
      const ctx = canvas.getContext('2d');
      myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'Sepember',
            'October',
            'December',
          ],
          datasets,
          // datasets: [
          //   {
          //     label: String(new Date().getFullYear()),
          //     backgroundColor: '#ed64a6',
          //     borderColor: '#ed64a6',
          //     data: [380, 708, 516, 364, 100, 465, 137],
          //     // fill: false,
          //     barThickness: 8,
          //   },
          //   {
          //     label: String(new Date().getFullYear() - 1),
          //     // fill: false,
          //     backgroundColor: '#4c51bf',
          //     borderColor: '#4c51bf',
          //     data: [27, 68, 86, 74, 10, 4, 87],
          //     barThickness: 8,
          //   },
          // ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          hover: {
            mode: 'nearest',
            intersect: true,
          },
        },
      });
    }

    return () => {
      myChart.destroy();
    };
  }, []);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Performance
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">Total orders</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect } from 'react';
import { Chart, ChartDataset, ChartType, DefaultDataPoint } from 'chart.js';
interface CardLineChartProps {
  datasets: ChartDataset<ChartType, DefaultDataPoint<ChartType>>[];
}

export function CardLineChart({ datasets }: CardLineChartProps) {
  useEffect(() => {
    let chartStatus = Chart.getChart('line-chart'); // <canvas> id
    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    var canvas: any = document.getElementById('line-chart');
    if (canvas) {
      var ctx = canvas.getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
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
          //     backgroundColor: '#4c51bf',
          //     borderColor: '#4c51bf',
          //     data: [645, 0, 616, 0, 596, 657, 705, 0, 0, 0],
          //     fill: false,
          //   },
          //   {
          //     label: String(new Date().getFullYear() - 1),
          //     fill: false,
          //     backgroundColor: '#ccc',
          //     borderColor: '#ccc',
          //     data: [406, 68, 865, 543, 164, 300, 187],
          //   },
          // ],
        },
        options: {
          maintainAspectRatio: false,
          responsive: true,
          // title: {
          //   display: false,
          //   text: 'Sales Charts',
          //   fontColor: 'white',
          // },
          // legend: {
          //   labels: {
          //     fontColor: 'white',
          //   },
          //   align: 'end',
          //   position: 'bottom',
          // },
          // tooltips: {
          //   mode: 'index',
          //   intersect: false,
          // },
          hover: {
            mode: 'nearest',
            intersect: true,
          },
          scales: {
            // xAxes: [
            //   {
            //     ticks: {
            //       fontColor: 'rgba(255,255,255,.7)',
            //     },
            //     display: true,
            //     scaleLabel: {
            //       display: false,
            //       labelString: 'Month',
            //       fontColor: 'white',
            //     },
            //     gridLines: {
            //       display: false,
            //       borderDash: [2],
            //       borderDashOffset: [2],
            //       color: 'rgba(33, 37, 41, 0.3)',
            //       zeroLineColor: 'rgba(0, 0, 0, 0)',
            //       zeroLineBorderDash: [2],
            //       zeroLineBorderDashOffset: [2],
            //     },
            //   },
            // ],
            // yAxes: [
            //   {
            //     ticks: {
            //       fontColor: 'rgba(255,255,255,.7)',
            //     },
            //     display: true,
            //     scaleLabel: {
            //       display: false,
            //       labelString: 'Value',
            //       fontColor: 'white',
            //     },
            //     gridLines: {
            //       borderDash: [3],
            //       borderDashOffset: [3],
            //       drawBorder: false,
            //       color: 'rgba(255, 255, 255, 0.15)',
            //       zeroLineColor: 'rgba(33, 37, 41, 0)',
            //       zeroLineBorderDash: [2],
            //       zeroLineBorderDashOffset: [2],
            //     },
            //   },
            // ],
          },
        },
      });
    }
  }, [datasets]);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">Overview</h6>
              <h2 className="text-white text-xl font-semibold">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

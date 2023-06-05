import { useRouter } from 'next/router';
import React, { ReactElement, ReactNode } from 'react';
import { AiOutlineBarChart, AiOutlineDoubleRight } from 'react-icons/ai';

interface CardStats {
  statSubtitle: string;
  statTitle: number | string;

  statArrow: 'up' | 'down';
  statPercent: string;

  statPercentColor: string;
  statDescripiron: string;
  statIconName: ReactNode;

  statIconColor: string;

  statPath: string;
}

export function CardStats({
  statSubtitle,
  statTitle,
  statArrow = 'up',
  statPercent = '3.48',
  statPercentColor = 'text-emerald-500',
  statDescripiron = 'Since last month',
  statIconName = <></>,
  statIconColor = 'bg-red-500',
  statPath = '',
}: CardStats) {
  const router = useRouter();
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-4">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-blueGray-400 uppercase font-bold text-xs">{statSubtitle}</h5>
              <span className="font-semibold text-xl text-blueGray-700">{statTitle}</span>
            </div>
            <div className="relative w-auto pl-4 flex-initial">
              <div
                className={
                  'text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full ' +
                  statIconColor
                }
              >
                {statIconName}
              </div>
            </div>
          </div>
          <div className="text-sm text-blueGray-400 mt-8 flex justify-end items-end">
            {/* <div className="">
              <span className={statPercentColor + ' mr-2'}>
                <i
                  className={
                    statArrow === 'up'
                      ? 'fas fa-arrow-up'
                      : statArrow === 'down'
                      ? 'fas fa-arrow-down'
                      : ''
                  }
                ></i>{' '}
                {statPercent}%
              </span>
              <span className="whitespace-nowrap">{statDescripiron}</span>
            </div> */}
            <div className="cursor-pointer" onClick={() => router.push(statPath)}>
              <AiOutlineDoubleRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import LayoutAdmin from '@components/Shared/Layout/LayoutAdmin';
import { useMemo } from 'react';

// components
import {
  CardBarChart,
  CardLineChart,
  CardPageVisits,
  CardSocialTraffic,
  CardStats,
} from '@components/Shared/Cards';
import HeaderStats from '@components/Shared/HeaderStats';
import { useSummary } from '@hooks/useSummary';
import { getSymbolCurrency } from '@utils/common';
import {
  AiOutlineBarChart,
  AiOutlineDollarCircle,
  AiOutlinePieChart,
  AiOutlineTeam,
} from 'react-icons/ai';
import DashboardSkeleton from '@components/Admin/Dashboard/DashboardSkeleton';

const commonCardChart = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

export default function DashboardPage() {
  const { loading, summary } = useSummary();

  const datasetsBarCahrt = useMemo(() => {
    let dataCurrent = [...commonCardChart];
    let dataPrevious = [...commonCardChart];
    if (summary.ordersData) {
      const {
        ordersData: { orderCurrentYear, orderPreviousYear },
      } = summary;

      orderCurrentYear.forEach((data) => {
        dataCurrent.splice(data?._id?.month - 1, 1, data.count);
      });

      orderPreviousYear.forEach((data) => {
        dataPrevious.splice(data?._id?.month - 1, 1, data.count);
      });
    }
    const data = [
      {
        label: String(new Date().getFullYear()),
        backgroundColor: '#ed64a6',
        borderColor: '#ed64a6',
        data: dataCurrent,
        fill: false,
      },
      {
        label: String(new Date().getFullYear() - 1),
        fill: false,
        backgroundColor: '#ccc',
        borderColor: '#ccc',
        data: dataPrevious,
      },
    ];
    return data;
  }, [summary?.salesData]);

  const datasetsLineCahrt = useMemo(() => {
    let dataCurrent = [...commonCardChart];
    let dataPrevious = [...commonCardChart];
    if (summary.salesData) {
      const {
        salesData: { currentYear, previousYear },
      } = summary;

      currentYear.forEach((data) => {
        dataCurrent.splice(data._id.month - 1, 1, data.total);
      });

      previousYear.forEach((data) => {
        dataPrevious.splice(data._id.month - 1, 1, data.total);
      });
    }
    const data = [
      {
        label: String(new Date().getFullYear()),
        backgroundColor: '#4c51bf',
        borderColor: '#4c51bf',
        data: dataCurrent,
        fill: false,
      },
      {
        label: String(new Date().getFullYear() - 1),
        fill: false,
        backgroundColor: '#ccc',
        borderColor: '#ccc',
        data: dataPrevious,
      },
    ];
    return data;
  }, [summary?.salesData]);

  const dataSales = useMemo(() => {
    const saleCurrentYear = summary?.salesData?.currentYear?.reduce(
      (sum, data) => (sum += data?.total || 0),
      0
    );

    const salePeviousYear = summary?.salesData?.previousYear?.reduce(
      (sum, data) => (sum += data?.total || 0),
      0
    );
    return {
      saleCurrentYear,
      salePeviousYear,
      percent: Number(saleCurrentYear) / Number(salePeviousYear),
    };
  }, [summary?.salesData]);

  return (
    <>
      <HeaderStats />
      {loading ? (
        <DashboardSkeleton />
      ) : (
        <>
          <div className="flex flex-wrap  pb-10">
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle="ALL PRODUCTS"
                statTitle={summary?.productsCount || 0}
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName={<AiOutlineBarChart size={22} />}
                statIconColor="bg-red-500"
                statPath="/admin/products"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle="ALL USERS"
                statTitle={summary?.usersCount || 0}
                statPercentColor="text-red-500"
                statDescripiron="Since last week"
                statIconName={<AiOutlineTeam size={22} />}
                statIconColor="bg-orange-500"
                statPath="/admin/users"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle="ALL SALES"
                statTitle={getSymbolCurrency(dataSales.saleCurrentYear || 0)}
                statArrow={dataSales.percent > 0 ? 'up' : 'down'}
                statPercent={(dataSales.percent * 100).toFixed(2).toString()}
                statPercentColor="text-orange-500"
                statDescripiron="Since yesterday"
                statIconName={<AiOutlineDollarCircle size={22} />}
                statIconColor="bg-pink-600"
                statPath="/admin/orders"
              />
            </div>
            <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              <CardStats
                statSubtitle="ALL ORDERS"
                statTitle={summary?.ordersCount || 0}
                statPercentColor="text-emerald-500"
                statDescripiron="Since last month"
                statIconName={<AiOutlinePieChart size={22} />}
                statIconColor="bg-blue-400"
                statPath="/admin/orders"
              />
            </div>
          </div>
          <div className="px-4">
            <CardLineChart datasets={datasetsLineCahrt} />
            <CardBarChart datasets={datasetsBarCahrt} />
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
      )}
    </>
  );
}

DashboardPage.layout = LayoutAdmin;
DashboardPage.isAdmin = true;

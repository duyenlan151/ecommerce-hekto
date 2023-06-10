import OrdersList from '@components/Admin/Orders/OrdersList';
import LayoutAdmin from '@components/Shared/Layout/LayoutAdmin';
import { Pagination } from '@components/Shared/Pagination';
import { TabsListAdmin } from '@components/Shared/Tabs/TabsListAdmin';
import { useOrders } from '@hooks/useOrders';
import { DataOrdersModel, OrderModel } from 'models';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface OrderPagesProps {
  data: DataOrdersModel;
}

const tabs = [
  { id: 1, title: 'All', value: 'all' },
  { id: 2, title: 'Paid', value: 'paid' },
  { id: 3, title: 'Unpaid', value: 'unpaid' },
  { id: 4, title: 'Delivered', value: 'delivered' },
  { id: 5, title: 'Cancelled', value: 'cancelled' },
];
export default function OrderPages() {
  const [activeTab, setActiveTab] = useState('all');
  const router = useRouter();
  const {
    query: { page, status },
  } = router;

  const [orders, setOrders] = useState<DataOrdersModel>();
  const { loading, handleOrder } = useOrders();

  useEffect(() => {
    (async () => {
      const result = await handleOrder('getAllOrders', {}, { page, status });
      setOrders(result);
    })();
  }, [status, page]);

  useEffect(() => {
    router.push({
      pathname: router.pathname,
      query: {
        status: activeTab,
      },
    });
  }, [activeTab]);

  const handleSetActiveTab = (value) => {
    setActiveTab(value);
  };

  return (
    <>
      <h4 className="font-josefinsans-bold text-5xl text-black font-bold pb-5 mb-8 border-b">
        Order Pages
      </h4>
      <TabsListAdmin tabs={tabs} activeTab={activeTab} setActiveTab={handleSetActiveTab} />
      <OrdersList data={orders?.data as OrderModel[]} loadingPage={loading} />
      <Pagination
        totalCount={orders?.totalDocs || 0}
        currentPage={Number(page) || 1}
        pageSize={orders?.limit || 10}
      />
    </>
  );
}

OrderPages.layout = LayoutAdmin;
OrderPages.isAdmin = true;

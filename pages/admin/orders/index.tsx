import OrdersList from '@components/Admin/Orders/OrdersList';
import LayoutAdmin from '@components/Shared/LayoutAdmin';
import { Pagination } from '@components/Shared/Pagination';
import { useOrders } from '@hooks/useOrders';
import { DataOrdersModel, OrderModel } from 'models';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export interface OrderPagesProps {
  data: DataOrdersModel;
}

export default function OrderPages() {
  const {
    query: { page },
  } = useRouter();

  const [orders, setOrders] = useState<DataOrdersModel>();
  const { loading, handleOrder } = useOrders();

  useEffect(() => {
    (async () => {
      const result = await handleOrder('getAllOrders');
      setOrders(result);
    })();
  }, []);
  return (
    <>
      <h4 className="font-josefinsans-bold text-5xl text-black font-bold pb-5 mb-8 border-b">
        Order Pages
      </h4>
      {/* <TabsListAdmin tabs={tabs} activeTab={activeTab} setActiveTab={handleSetActiveTab} /> */}
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

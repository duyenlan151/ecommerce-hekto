import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import React from 'react';

export interface UserCartInfoProps {}

const dataOrders = [
  { id: 1, title: 'order.status.all-orders', value: 'all' },
  { id: 2, title: 'order.status.waiting-for-payment', value: 'unpaid' },
  { id: 3, title: 'order.status.in-progress', value: 'inprogress' },
  { id: 4, title: 'order.status.delivered', value: 'delivered' },
  { id: 5, title: 'order.status.cancelled', value: 'cancelled' },
];

export function UserCartInfo(props: UserCartInfoProps) {
  const { t } = useTranslation('user');
  const router = useRouter();
  const {
    query: { typeOrder },
  } = router;

  const changeTypeOrder = (type) => {
    if (type !== typeOrder) {
      router.push({
        path: router.pathname,
        query: {
          ...router.query,
          typeOrder: type,
        },
      });
    }
  };

  return (
    <div className="bg-white">
      <div>
        <ul className="flex overflow-x-auto items-center border-b border-primary">
          {dataOrders.map((order) => (
            <li
              key={order.value}
              onClick={() => changeTypeOrder(order.value)}
              className={`px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-neutral-100 ${
                typeOrder === order.value && 'bg-gray-100'
              }`}
            >
              {t(order.title)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

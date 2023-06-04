import { useRouter } from 'next/router';
import React from 'react';

export interface UserCartInfoProps {}

const dataOrders = [
  { id: 1, title: 'All orders', value: 'all' },
  { id: 2, title: 'Waiting for payment', value: 'unpaid' },
  { id: 3, title: 'In progress', value: 'inprogress' },
  { id: 4, title: 'Delivered', value: 'delivered' },
  { id: 5, title: 'Cancelled', value: 'cancelled' },
];

export function UserCartInfo(props: UserCartInfoProps) {
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
              {order.title}
            </li>
          ))}

          {/* <li
            onClick={() => changeTypeOrder('unpaid')}
            className={`px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-gray-100 ${
              typeOrder === 'unpaid' && 'bg-gray-100'
            }`}
          >
            Waiting for payment
          </li>
          <li
            onClick={() => changeTypeOrder('inprogress')}
            className={`px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-gray-100 ${
              typeOrder === 'inprogress' && 'bg-gray-100'
            }`}
          >
            In progress
          </li>
          <li
            onClick={() => changeTypeOrder('delivered')}
            className={`px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-gray-100 ${
              typeOrder === 'delivered' && 'bg-gray-100'
            }`}
          >
            Delivered
          </li>
          <li
            onClick={() => changeTypeOrder('cancelled')}
            className={`px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-gray-100 ${
              typeOrder === 'cancelled' && 'bg-gray-100'
            }`}
          >
            Cancelled
          </li> */}
        </ul>
      </div>
    </div>
  );
}

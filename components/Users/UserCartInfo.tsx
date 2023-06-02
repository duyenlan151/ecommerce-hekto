import { useRouter } from 'next/router';
import * as React from 'react';

export interface UserCartInfoProps {}

export function UserCartInfo(props: UserCartInfoProps) {
  const router = useRouter();
  const {
    query: { typeOrder },
  } = router;

  const changeTypeOrder = (typeOrder) => {
    router.push({
      path: router.pathname,
      query: {
        ...router.query,
        typeOrder,
      },
    });
  };

  return (
    <div>
      <div>
        <ul className="flex overflow-x-auto items-center border-b border-primary">
          <li
            onClick={() => changeTypeOrder('All')}
            className={`px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-gray-100 ${
              !!typeOrder || (typeOrder === 'All' && 'bg-gray-100')
            }`}
          >
            All orders
          </li>
          <li
            onClick={() => changeTypeOrder('wait')}
            className={`px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-gray-100 ${
              typeOrder === 'wait' && 'bg-gray-100'
            }`}
          >
            Waiting for payment
          </li>
          <li
            onClick={() => changeTypeOrder('delivering')}
            className={`px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-gray-100 ${
              typeOrder === 'delivering' && 'bg-gray-100'
            }`}
          >
            Delivering
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
            onClick={() => changeTypeOrder('cancel')}
            className={`px-5 py-3 whitespace-nowrap cursor-pointer hover:bg-gray-100 ${
              typeOrder === 'cancel' && 'bg-gray-100'
            }`}
          >
            Cancel
          </li>
        </ul>
      </div>
    </div>
  );
}

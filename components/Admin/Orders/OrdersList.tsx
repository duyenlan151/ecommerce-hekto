import { Table } from '@components/Shared/Table';
import { OrderModel } from 'models';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { columns } from './OrdersList.props';

export interface OrdersListProps {
  data: OrderModel[];
  loadingPage: boolean;
}

export default function OrdersList({ data, loadingPage }: OrdersListProps) {
  const router = useRouter();
  const [isShowModal, setShowModal] = useState(false);
  const refItem = useRef({ _id: null, name: '', title: '' });

  const onClickRow = (_id: string) => {
    router.push({
      pathname: `${router.asPath}/${_id}`,
    });
  };

  return (
    <div className="mt-10">
      {/* <div className="flex justify-end">
        <button
          onClick={onAddNew}
          className="bg-green-1 text-white py-2 px-10 mb-4 text-center capitalize border focus:outline-none"
        >
          Add New
        </button>
      </div> */}
      <Table
        isLoading={loadingPage}
        onClickRow={onClickRow}
        onSelectOption={() => {}}
        data={data}
        title="Orders"
        showAction={false}
        columns={columns}
      />
    </div>
  );
}

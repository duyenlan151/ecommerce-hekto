import { ModalConfirm } from '@components/Shared/Modal';
import { Table } from '@components/Shared/Table';
import { useCategories, useTimeout } from '@hooks/index';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { categoryService } from 'services/Admin';
import { columns } from './Category.props';

export interface CategoryListProps {
  data: [];
}

export default function CategoryList({ data }: CategoryListProps) {
  const router = useRouter();
  const { loading, handleCategory } = useCategories();

  const [isShowModal, setShowModal] = useState(false);
  const refItem = useRef({ _id: null, name: '' });

  const onSelectOption = async (action, item) => {
    if (action === 'edit') {
      router.push({
        pathname: `${router.asPath}/${action}/${item._id}`,
      });
      return;
    }

    refItem.current = item;
    setShowModal(true);
  };

  const onAddNew = () => {
    router.push({
      pathname: `${router.asPath}/add`,
    });
  };

  const onDeleteCategory = async () => {
    const status = await handleCategory({ _id: refItem.current._id }, 'delete');

    if (status) {
      setTimeout(() => {
        setShowModal(false);
        router.replace(router.asPath);
      }, 2000);
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={onAddNew}
          className="bg-green-1 text-white py-2 px-10 mb-4 text-center capitalize border focus:outline-none"
        >
          Add New
        </button>
      </div>
      <Table
        onSelectOption={onSelectOption}
        data={data}
        title="Categories"
        columns={columns}
        onDelete={() => {}}
      />
      <ModalConfirm
        title={'Delete Category'}
        description={
          <>
            Are you sure want to delete category <strong>{refItem.current.name}</strong>?
          </>
        }
        loading={loading}
        isShow={isShowModal}
        onClose={() => setShowModal((prev) => !prev)}
        onConfirm={onDeleteCategory}
      />
    </div>
  );
}
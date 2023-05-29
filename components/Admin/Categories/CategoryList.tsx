import { ModalConfirm } from '@components/Shared/Modal';
import { Table } from '@components/Shared/Table';
import { useCategories, useTimeout } from '@hooks/index';
import { useRouter } from 'next/router';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { categoryService } from 'services/Admin';

export interface CategoryListProps {
  data: [];
}

const columns = [
  {
    key: '_id',
    title: 'Id',
  },
  {
    key: 'name',
    title: 'Category Name',
  },
  {
    key: 'slug',
    title: 'Slug',
  },
];

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
      <Table
        onSelectOption={onSelectOption}
        data={data}
        title="Categories"
        columns={columns}
        onDelete={() => {}}
      />
      <a onClick={onAddNew}>Add New</a>
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

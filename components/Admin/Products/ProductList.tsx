import { ModalConfirm } from '@components/Shared/Modal';
import { Table } from '@components/Shared/Table';
import { useProducts } from '@hooks/index';
import { ProductModel } from 'models';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { columns } from './ProductForm.props';

export interface ProductListProps {
  data: ProductModel[];
}

export default function ProductList({ data }: ProductListProps) {
  const router = useRouter();
  const { loading, handleProduct } = useProducts();
  const [isShowModal, setShowModal] = useState(false);
  const refItem = useRef({ _id: null, name: '', title: '' });

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
    if (refItem.current._id) {
      const status = await handleProduct({ _id: refItem.current._id }, 'delete');
      if (status) {
        setTimeout(() => {
          setShowModal(false);
          router.replace(router.asPath);
        }, 2000);
      }
    }
  };

  return (
    <div className="mt-10">
      <div className="flex justify-end">
        <button
          onClick={onAddNew}
          className="bg-green-1 text-white py-2 px-10 mb-4 text-center capitalize border focus:outline-none"
        >
          Add New
        </button>
      </div>
      <Table onSelectOption={onSelectOption} data={data} title="Products" columns={columns} />

      <ModalConfirm
        title={'Delete Product'}
        description={
          <>
            Are you sure want to delete product <strong>{refItem.current?.title}</strong>?
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

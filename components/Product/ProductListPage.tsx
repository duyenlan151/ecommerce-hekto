import { IoFilterOutline } from 'react-icons/io5';
import ProductFilters from './ProductFilters';
import ProductList from './ProductList';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Pagination } from '@components/Shared/Pagination';
import { Dropdown } from '@components/Shared/Dropdowns';
import { itemsList } from './Products.props';
import { FilterViewer } from './Filters';

export interface ProductListPageProps {
  products: any;
  itemsPerPage?: number;
}

export default function ProductListPage({ products }: ProductListPageProps) {
  console.log('🚀 ~ file: ProductListPage.tsx:17 ~ ProductListPage ~ products:', products);
  const router = useRouter();
  const {
    query: { page },
  } = router;

  const handleFilterBySort = ({ value }) => {
    router.push({
      path: router.pathname,
      query: {
        ...router.query,
        sort: value,
      },
    });
  };
  return (
    <section className="bg-bg-color">
      <div className="container mx-auto py-10 lg:px-0 px-4">
        <h4 className="text-blue-1 text-3xl">Ecommerce Acceories & Fashion item </h4>
        <div className="text-primary font-lato-light leading-7">
          About {products?.totalDocs || 0} results
        </div>
        <div className="ml-auto flex justify-end items-center py-2">
          {/* Sort */}
          <Dropdown listItems={itemsList} onSelectItem={handleFilterBySort} />
          <div className="cursor-pointer px-2 lg:hidden">
            <IoFilterOutline size={25} />
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="max-w-[250px] basis-full lg:block hidden">
            {/* Filter */}
            <ProductFilters />
          </div>
          <div className="flex-1 basis-full lg:ml-3 w-full justify-self-end">
            {/* Filter Viewer */}
            <FilterViewer />
            {/* Product List */}
            <ProductList products={products?.data} />
            {/* Pagination */}
            <Pagination
              totalCount={products?.totalDocs || 0}
              currentPage={Number(page) || 1}
              pageSize={products?.limit}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { Dropdown } from '@components/Shared/Dropdowns';
import { Pagination } from '@components/Shared/Pagination';
import { useRouterPush } from '@hooks/useRouterPush';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { BsGrid, BsListTask } from 'react-icons/bs';
import { IoFilterOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { FilterViewer } from './Filters';
import { ProductFilters } from './ProductFilters';
import ProductList from './ProductList';
import { itemsList } from './Products.props';

export interface ProductListPageProps {
  products: any;
  itemsPerPage?: number;
  isLoading: boolean;
}

// type typeView = 'col' | 'view';

export enum ETypeView {
  COL = 'col',
  ROW = 'row',
}

export const ProductViewType: Record<ETypeView, string | number> = {
  [ETypeView.COL]: 'lg:grid-cols-2',
  [ETypeView.ROW]: 'lg:grid-cols-1',
};

export default function ProductListPage({ products, isLoading }: ProductListPageProps) {
  const { t } = useTranslation('products');
  const router = useRouter();
  const {
    query: { page, view, search },
  } = router;
  const { routerPushQuery } = useRouterPush();

  const [showOverlayFilter, setShowOverlayFilter] = useState(false);
  const [typeView, setTypeView] = useState(
    [ETypeView.COL, ETypeView.ROW].includes(String(view) as ETypeView) ? view : ETypeView.COL
  );

  useEffect(() => {
    routerPushQuery({
      query: {
        ...router.query,
        view: typeView,
      },
    });
  }, [typeView]);

  // useEffect(() => {
  //   setShowOverlayFilter((prev) => !prev);
  // }, [query]);

  const handleFilterBySort = useCallback(({ value }) => {
    routerPushQuery({
      query: {
        ...router.query,
        sort: value,
      },
    });
  }, []);

  const onChangeViewType = (type) => setTypeView(type);

  const handleOverlayFilter = () => {
    setShowOverlayFilter((prev) => !prev);
  };

  const LabelDropdown = useCallback(() => {
    return (
      <div className="flex items-center py-2 bg-white px-4 border border-gray-10">
        <div className="pr-3">{t('sort-by')}</div>
        <MdKeyboardArrowDown size={20} />
      </div>
    );
  }, []);

  return (
    <section className="bg-bg-color">
      <div className="container mx-auto py-10 lg:px-0 px-4">
        <h4 className="text-blue-1 text-3xl">{t('title')}</h4>
        <div className="text-primary font-lato-light leading-7">
          {t('result').replace('{number}', products?.totalDocs || 0)}
        </div>
        <div className="ml-auto flex justify-end items-center py-2 mt-4">
          <div className="flex items-center px-4">
            <p className="pr-3">{t('view')}:</p>
            <span
              className={`pr-2 cursor-pointer opacity-50 ${
                typeView === ETypeView.COL && '!opacity-100'
              }`}
              onClick={() => onChangeViewType(ETypeView.COL)}
            >
              <BsGrid size={18} />
            </span>
            <span
              className={`pr-2 cursor-pointer opacity-50 ${
                typeView === ETypeView.ROW && '!opacity-100'
              }`}
              onClick={() => onChangeViewType(ETypeView.ROW)}
            >
              <BsListTask size={23} />
            </span>
          </div>
          {/* Sort */}
          <Dropdown
            label={<LabelDropdown />}
            listItems={itemsList}
            onSelectItem={handleFilterBySort}
          />
          <div className="cursor-pointer pl-5 lg:hidden" onClick={handleOverlayFilter}>
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
            <ProductList
              isLoading={isLoading}
              products={products?.data}
              viewCol={ProductViewType[String(typeView)] as ETypeView}
            />
            {/* Pagination */}
            <Pagination
              totalCount={products?.totalDocs || 0}
              currentPage={Number(page) || 1}
              pageSize={products?.limit}
            />
          </div>
        </div>
      </div>
      <div
        className={`trasform translate-x-full ${
          showOverlayFilter && '!-translate-x-full'
        } w-[280px] lg:hidden bg-white h-full max-w-full overflow-x-hidden fixed z-[999] top-0 left-full transition-transform duration-300 ease-out outline-none focus:outline-none`}
      >
        <ProductFilters />
      </div>
      {showOverlayFilter && (
        <div
          onClick={handleOverlayFilter}
          className="lg:hidden animate-fadeEntering fixed inset-0 z-[666] bg-black/60 transition-transform ease-in-out duration-500 opacity-100"
        ></div>
      )}
    </section>
  );
}

import { IoFilterOutline } from 'react-icons/io5';
import ProductFilters from './ProductFilters';
import ProductList from './ProductList';

export interface ProductListPageProps {
  // products: [];
  products: any;
}

const itemsList = [
  { id: 1, label: 'Default', value: 'default' },
  { id: 2, label: 'Price: High to Low', value: 'price:desc' },
  { id: 3, label: 'Price: Low to High', value: 'price:asc' },
];

const perPage = [
  { id: 1, label: '5', value: 5 },
  { id: 2, label: '10', value: 10 },
  { id: 3, label: '15', value: 15 },
];

const dropdowns = [
  { id: 1, data: itemsList },
  { id: 2, data: perPage },
];

export default function ProductListPage({ products }: ProductListPageProps) {
  console.log('🚀 ~ file: ProductListPage.tsx:31 ~ ProductListPage ~ products:', products);
  return (
    <section className="bg-bg-color">
      <div className="container mx-auto py-10 lg:px-0 px-4">
        <h4 className="text-blue-1 text-3xl">Ecommerce Acceories & Fashion item </h4>
        <div className="text-sub-title font-lato-light leading-7">
          About 9,620 results (0.62 seconds)
        </div>
        <div className="ml-auto flex justify-end items-center py-2">
          {/* <Dropdown className="mr-3" listItems={perPage} label="Per page" />
          <Dropdown className="mr-3" listItems={itemsList} /> */}
          {/* {dropdowns.map((item) => (
            <Dropdown key={item.id} listItems={item.data} className="mr-3" />
          ))} */}
          <div className="cursor-pointer px-2 lg:hidden">
            <IoFilterOutline size={25} />
          </div>
        </div>
        <div className="flex justify-between mt-2">
          <div className="max-w-[250px] basis-full lg:block hidden">
            <ProductFilters />
          </div>
          <div className="flex-1 basis-full lg:ml-3 w-full justify-self-end">
            <ProductList products={products?.data} />
          </div>
        </div>
      </div>
    </section>
  );
}

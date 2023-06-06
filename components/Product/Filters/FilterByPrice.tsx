import { useRouter } from 'next/router';
import { filterPrice } from './Filter.props';

export interface FilterByPriceProps {}

export function FilterByPrice(props: FilterByPriceProps) {
  const router = useRouter();
  const {
    query: { price },
  } = router;

  const handleFilterByPrice = (price) => {
    router.push({
      path: router.pathname,
      query: {
        ...router.query,
        price,
      },
    });
  };
  return (
    <div className="my-2 border-b">
      <p className="text-blue-1 text-xl px-3 py-2">Price</p>
      <div className="flex flex-col px-3 pt-0 mb-4">
        {filterPrice.map((item) => (
          <a
            key={item.id}
            onClick={() => handleFilterByPrice(item.value)}
            className={`${
              price === item.value && 'text-pink-1'
            } my-2 font-lato text-sm hover:text-pink-1 cursor-pointer transition ease-in-out duration-300`}
          >
            {item.label}
          </a>
        ))}
      </div>
      {/* <form className="px-3 mb-3">
        <div className="flex items-center gap-3">
          <InputField className="h-10 !px-2 border-grey-1" placeholder="€ Min" />
          <InputField className="h-10 !px-2 border-grey-1" placeholder="€ Max" />
        </div>
        <button
          type="submit"
          className="rounded-sm bg-transparent w-full flex-none px-10 py-2 text-sm border border-pink-500 font-semibold text-pink-1 shadow-sm hover:backdrop-opacity-60"
        >
          Go
        </button>
      </form> */}
    </div>
  );
}

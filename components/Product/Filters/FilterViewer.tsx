import { isAllObjectEmptyValue } from 'constants/index';
import { useRouter } from 'next/router';
import React, { useMemo } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { FILTER_LIST } from './Filter.props';

export interface FilterViewerProps {}

export function FilterViewer(props: FilterViewerProps) {
  const router = useRouter();
  const { price, rating, sort, category } = router.query;

  const filters = useMemo(() => {
    return { price, rating, sort, category };
  }, [router.query]);

  if (isAllObjectEmptyValue(filters)) {
    return <></>;
  }

  return (
    <>
      <div className="bg-white py-4 px-2 mb-2 flex border-b border-primary">
        {FILTER_LIST.map((elm) => (
          <div key={elm.id}>
            {!!elm.isShow(filters) && (
              <div
                onClick={() => {
                  const newFilters = elm.onRemove(filters);
                  router.push({
                    pathname: router.pathname,
                    query: {
                      ...newFilters,
                    },
                  });
                }}
                className="cursor-pointer flex items-center ml-4 border border-primary py-1 px-5 rounded-3xl hover:bg-gray-100 transition delay-100 ease-in-out duration-500"
              >
                {elm.getLabel(filters)}
                <span className="ml-2 -mr-2 cursor-pointer">
                  <AiOutlineCloseCircle size={16} />
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

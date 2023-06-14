import { DOTS, usePagination } from '@hooks/usePagination';
import router from 'next/router';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

interface PaginationProps {
  // onPageChange
  totalCount: number;
  currentPage: number;
  pageSize: number;
  [key: string]: any;
}

export const Pagination = (props: PaginationProps) => {
  const { totalCount, siblingCount = 1, currentPage, pageSize, className } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  let lastPage = paginationRange && paginationRange[paginationRange?.length - 1];

  // If there are less than 2 times in pagination range we shall not render the component
  if (currentPage === 0 || paginationRange?.length < 2) {
    return (
      <div className="py-4">
        <div>
          {currentPage * pageSize - pageSize + 1} -{' '}
          {currentPage * pageSize + pageSize - pageSize > totalCount
            ? totalCount
            : currentPage * pageSize + pageSize - pageSize}{' '}
          in {totalCount}
        </div>
      </div>
    );
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const onPageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= lastPage) {
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query, page: pageNumber },
        },
        undefined,
        { scroll: false }
      );
    }
  };

  return (
    <div className="flex items-center justify-between py-4 mt-10">
      <div>
        {currentPage * pageSize - pageSize + 1} -{' '}
        {currentPage * pageSize + pageSize - pageSize > totalCount
          ? totalCount
          : currentPage * pageSize + pageSize - pageSize}{' '}
        in {totalCount}
      </div>
      <ul className="flex items-strentch">
        {/* Left navigation arrow */}
        <li
          onClick={onPrevious}
          className={`flex items-center bg-white justify-center cursor-pointer border border-primary border-r-0 p-2 min-w-[35px] ${
            currentPage === 1 && 'opacity-40 pointer-events-none'
          }`}
        >
          <MdKeyboardArrowLeft />
          <div />
        </li>
        {paginationRange?.map((pageNumber, idx) => {
          // If the pageItem is a DOT, render the DOTS unicode character
          if (pageNumber === DOTS) {
            return (
              <li
                key={`${pageNumber}- ${idx}`}
                className="cursor-pointer bg-white text-center border border-primary border-r-0 p-2 min-w-[35px]"
              >
                &#8230;
              </li>
            );
          }

          // Render our Page Pills
          return (
            <li
              key={pageNumber}
              className={`cursor-pointer bg-white text-center border border-primary border-r-0 p-2 min-w-[35px] ${
                pageNumber === currentPage && '!bg-gray-100'
              }`}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        })}
        {/*  Right Navigation arrow */}
        <li
          onClick={onNext}
          className={`flex items-center bg-white justify-center cursor-pointer border border-primary p-2 ${
            currentPage === lastPage && 'opacity-40 pointer-events-none'
          }`}
        >
          <MdKeyboardArrowRight />
          <div />
        </li>
      </ul>
    </div>
  );
};

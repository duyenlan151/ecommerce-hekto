import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import { IColumnType } from './Table';

interface Props<T> {
  columns: IColumnType<T>[];
  color?: 'light' | 'dark';
  showAction?: boolean;
}

export function TableHeader<T>({ columns, color = 'light', showAction }: Props<T>): JSX.Element {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <th
          key={`table-head-cell-${columnIndex}`}
          className={
            'cursor-pointer px-4 align-middle text-black py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left '
          }
        >
          <div className="flex items-center">
            {column.title}
            {/* {column.isSort !== false && (
              <div className="flex items-center flex-col ml-1 -m-10">
                <AiFillCaretUp size={12} color={'#818181'} />
                <span className="-m-[5px]">
                  <AiFillCaretDown size={12} color={'#818181'} />
                </span>
              </div>
            )} */}
          </div>
        </th>
      ))}
      {showAction && (
        <th
          className={
            'px-4 align-middle py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-right'
          }
        ></th>
      )}
    </tr>
  );
}

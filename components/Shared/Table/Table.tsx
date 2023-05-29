import { CartModel } from 'models';
import { ReactNode } from 'react';
import TableDropdown from '../Dropdowns/TableDropdown';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (
    column: IColumnType<T>,
    item: T,
    onDelete: (item: number | string) => void
  ) => ReactNode;
  onDelete?: (item: number | string) => void;
  [key: string]: any;
}

interface Props<T> {
  title: string;
  data: T[];
  columns: IColumnType<T>[];
  onDelete: (item: number | string) => void;
  onSelectOption: (action, item) => void;
  color?: 'light' | 'dark';
}

export function Table<T>({
  color = 'light',
  title = '',
  data,
  columns,
  onDelete,
  onSelectOption,
}: Props<T>) {
  return (
    <div
      className={
        'relative flex flex-col min-w-0 break-words w-full mb-6 shadow-md rounded ' +
        (color === 'light' ? 'bg-white' : 'bg-blueGray-700 text-white')
      }
    >
      {title && (
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3
                className={
                  'font-semibold text-lg ' +
                  (color === 'light' ? 'text-blueGray-700' : 'text-white')
                }
              >
                {title}
              </h3>
            </div>
          </div>
        </div>
      )}
      <div className="block w-full overflow-x-auto">
        {/* Projects table */}
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <TableHeader columns={columns} />
          </thead>
          <tbody>
            <TableRow
              data={data}
              columns={columns}
              onDelete={onDelete}
              onSelectOption={onSelectOption}
            />
            {data && !data.length && (
              <tr>
                <td
                  className="py-4 border-t-0 mx-auto w-full align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center"
                  colSpan={columns.length + 1}
                >
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

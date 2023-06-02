import { ReactNode } from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (
    column: IColumnType<T>,
    item: T,
    onDelete: (item: number | string) => void,
    index?: string | number
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
  showHeader?: boolean;
  showAction?: boolean;
  color?: 'light' | 'dark';
}

export function Table<T>({
  color = 'light',
  title = '',
  data,
  columns,
  onDelete,
  onSelectOption,
  showHeader = true,
  showAction = true,
}: Props<T>) {
  return (
    <div
      className={
        'relative flex flex-col min-w-0 break-words w-full mb-6' +
        (color === 'light' ? 'bg-white' : 'bg-blueGray-700 text-white')
      }
    >
      <div className="block w-full overflow-x-auto">
        {/* Projects table */}
        <table className="items-center w-full bg-transparent border-collapse border border-table-border-1">
          <thead className="border-b border-table-border">
            {showHeader && <TableHeader columns={columns} />}
          </thead>
          <tbody>
            <TableRow
              data={data}
              columns={columns}
              onDelete={onDelete}
              onSelectOption={onSelectOption}
              showAction={showAction}
            />
            {data && !data.length && (
              <tr>
                <td
                  className="py-4 border-b border-table-border mx-auto w-full align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center"
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

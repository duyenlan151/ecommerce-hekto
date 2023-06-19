import { ILoading } from '@components/Icons';
import { ProductModel } from 'models';
import { memo, ReactNode } from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render?: (column: IColumnType<T>, item: T, columnIndex?: string | number) => ReactNode;
  [key: string]: any;
}

interface Props<T> {
  title: string;
  data: T[] | ProductModel[];
  columns: IColumnType<T>[];
  onSelectOption: (action, item) => void;
  showHeader?: boolean;
  showAction?: boolean;
  color?: 'light' | 'dark';
  isPrimary?: boolean;
  onClickRow?: (_id: string) => void;
  isLoading?: boolean;
}

export const Table = memo(function TableMain<T>({
  color = 'light',
  title = '',
  data,
  columns,
  onSelectOption,
  showHeader = true,
  showAction = true,
  isPrimary,
  onClickRow,
  isLoading,
}: Props<T>) {
  console.log('🚀 ~ file: Table.tsx:89 ~ columns:', columns);

  return (
    <div
      className={
        'relative flex flex-col min-w-0 break-words w-full mb-6' +
        (color === 'light' ? 'bg-white' : 'bg-blueGray-700 text-white')
      }
    >
      <div className="block w-full overflow-x-auto">
        {/* Projects table */}
        <table className="items-center w-full bg-white border-collapse border border-table-border-1">
          <thead className="border-b border-table-border">
            {showHeader && <TableHeader columns={columns} showAction={showAction} />}
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td
                  className="py-4 border-b border-table-border mx-auto w-full align-middle border-l-0 border-r-0 text-sm whitespace-nowrap text-center"
                  colSpan={columns.length + 1}
                >
                  <ILoading />
                </td>
              </tr>
            ) : (
              <TableRow
                isPrimary={isPrimary}
                data={data}
                columns={columns}
                onSelectOption={onSelectOption}
                showAction={showAction}
                onClickRow={onClickRow}
              />
            )}
            {!isLoading && data && !data.length && (
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
});

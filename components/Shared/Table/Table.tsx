import { CartModel } from 'models';
import { ReactNode } from 'react';
import { TableHeader } from './TableHeader';
import { TableRow } from './TableRow';

export interface IColumnType<T> {
  key: string;
  title: string;
  width?: number;
  render: (column: IColumnType<T>, item: T, onDelete: (item: number | string) => void) => ReactNode;
  onDelete?: (item: number | string) => void;
}

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
  onDelete: (item: number | string) => void;
}

export function Table<T>({ data, columns, onDelete }: Props<T>): JSX.Element {
  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full overflow-hidden">
        <table className="min-w-full">
          <thead>
            <TableHeader columns={columns} />
          </thead>
          <tbody>
            <TableRow data={data} columns={columns} onDelete={onDelete} />
          </tbody>
        </table>
      </div>
    </div>
  );
}

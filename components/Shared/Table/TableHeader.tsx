import { IColumnType } from './Table';

interface Props<T> {
  columns: IColumnType<T>[];
}

export function TableHeader<T>({ columns }: Props<T>): JSX.Element {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <th
          key={`table-head-cell-${columnIndex}`}
          className="bg-white lg:text-xl text-sm py-3 text-left text-blue-1 leading-4 tracking-wider"
        >
          {column.title}
        </th>
      ))}
    </tr>
  );
}

import { IColumnType } from './Table';

interface Props<T> {
  columns: IColumnType<T>[];
  color?: 'light' | 'dark';
}

export function TableHeader<T>({ columns, color = 'light' }: Props<T>): JSX.Element {
  return (
    <tr>
      {columns.map((column, columnIndex) => (
        <th
          key={`table-head-cell-${columnIndex}`}
          className={
            'px-6 align-middle border border-solid py-3 text-sm border-l-0 border-r-0 whitespace-nowrap font-semibold text-left ' +
            (color === 'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
          }
        >
          {column.title}
        </th>
      ))}
      <th
        className={
          'px-6 align-middle border border-solid py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-semibold text-right ' +
          (color === 'light'
            ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
            : 'bg-blueGray-600 text-blueGray-200 border-blueGray-500')
        }
      ></th>
    </tr>
  );
}

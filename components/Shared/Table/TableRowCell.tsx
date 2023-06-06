import { IColumnType } from './Table';

interface Props<T> {
  item: T;
  column: IColumnType<T>;
  columnIndex?: number | string;
}

export function TableRowCell<T>({ item, column, columnIndex }: Props<T>) {
  return (
    <td className="max-w-[250px] h-[50px] overflow-hidden text-ellipsis border-t-0 px-3 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
      {/* {item[column.key]} */}
      {column?.render ? column.render(column, item, columnIndex) : item[column.key]}
    </td>
  );
}

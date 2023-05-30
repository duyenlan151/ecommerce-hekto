import { IColumnType } from './Table';

interface Props<T> {
  item: T;
  column: IColumnType<T>;
  onDelete: (item: number | string) => void;
  columnIndex?: number | string;
}

export function TableRowCell<T>({ item, column, onDelete, columnIndex }: Props<T>) {
  // console.log('🚀 ~ file: TableRowCell.tsx:11 ~ index:', index);
  return (
    <td className="max-w-[250px] overflow-hidden text-ellipsis border-t-0 px-3 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap">
      {/* {item[column.key]} */}
      {column?.render ? column.render(column, item, onDelete, columnIndex) : item[column.key]}
    </td>
  );
}

import { IColumnType } from './Table';

interface Props<T> {
  item: T;
  column: IColumnType<T>;
  onDelete: (item: number | string) => void;
}

export function TableRowCell<T>({ item, column, onDelete }: Props<T>) {
  console.log('🚀 ~ file: TableRowCell.tsx:10 ~ column:', column);
  console.log('🚀 ~ file: TableRowCell.tsx:10 ~ item:', item);
  return (
    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
      {item[column.key]}
      {/* {column?.render ? column.render(column, item, onDelete) : item[column.key]} */}
    </td>
  );
}

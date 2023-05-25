import { IColumnType } from './Table';

interface Props<T> {
  item: T;
  column: IColumnType<T>;
  onDelete?: (item: number | string) => void;
}

export function TableRowCell<T>({ item, column, onDelete }: Props<T>) {
  return (
    <td className="py-4 whitespace-no-wrap border-b border-gray-200">
      {column.render(column, item, onDelete)}
    </td>
  );
}

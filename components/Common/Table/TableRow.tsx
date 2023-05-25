import { IColumnType } from './Table';
import { TableRowCell } from './TableRowCell';

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
  onDelete?: (item: number | string) => void;
}

export function TableRow<T>({ data, columns, onDelete }: Props<T>) {
  return (
    <>
      {data.map((item, itemIndex) => (
        <tr key={`table-body-${itemIndex}`}>
          {columns.map((column, columnIndex) => (
            <TableRowCell
              key={`table-row-cell-${columnIndex}`}
              item={item}
              column={column}
              onDelete={onDelete}
            />
          ))}
        </tr>
      ))}
    </>
  );
}

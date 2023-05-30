import { AiOutlineDelete, AiTwotoneEdit } from 'react-icons/ai';
import { Dropdown } from '../Common';
import { IColumnType } from './Table';
import { TableRowCell } from './TableRowCell';

interface Props<T> {
  data: T[];
  columns: IColumnType<T>[];
  onDelete: (item: number | string) => void;
  color?: 'light' | 'dark';
  onSelectOption: (action, item) => void;
}

const itemsList = [
  { id: 1, label: 'Edit', value: 'edit', icon: <AiTwotoneEdit /> },
  { id: 2, label: 'Delete', value: 'delete', icon: <AiOutlineDelete /> },
  // { id: 3, label: 'Price: Low to High', value: 'price:asc' },
];

export function TableRow<T>({
  data,
  columns,
  onDelete,
  color = 'light',
  onSelectOption,
}: Props<T>) {
  return (
    <>
      {data &&
        data.map((item, itemIndex) => (
          <tr
            key={`table-body-${itemIndex}`}
            className="even:bg-table-odd odd:bg-white border-b border-table-border cursor-pointer transition-all duration-200 ease-in-out hover:bg-gray-100"
          >
            <>
              {columns.map((column, columnIndex) => (
                <TableRowCell
                  onDelete={onDelete}
                  column={column}
                  item={item}
                  columnIndex={itemIndex}
                  key={`table-row-cell-${columnIndex}`}
                />
              ))}
              <td className="relative border-t-0 align-middle text-right border-l-0 border-r-0 text-xs whitespace-nowrap text-right">
                <Dropdown
                  className="mr-3"
                  listItems={itemsList}
                  onSelectOption={(action) => onSelectOption(action.value, item)}
                />
              </td>
            </>
          </tr>
        ))}
    </>
  );
}

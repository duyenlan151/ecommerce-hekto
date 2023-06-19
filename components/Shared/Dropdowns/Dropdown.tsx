import { useOnClickOutside } from '@hooks/index';
import { memo, ReactNode, useRef, useState } from 'react';

export interface DropdownProps {
  label?: string | ReactNode;
  listItems?: Array<{ id: string | number; label: string; value?: string | number }>;
  children?: ReactNode;
  onSelectItem?: (item) => void;
  [key: string]: any;
}

export const Dropdown = memo(function DropdownMain({
  label = 'Sort by',
  children,
  listItems,
  onSelectItem,
  ...rest
}: DropdownProps) {
  const [showDropdown, setShowDropDown] = useState(false);
  const refContainer = useRef(null);

  const onClickItem = (item) => {
    onSelectItem && onSelectItem(item);
    setShowDropDown((prev) => !prev);
  };

  const handleClickOutside = () => {
    setShowDropDown(false);
  };

  const handleClickInside = () => {
    setShowDropDown(true);
  };

  // const getMap = () => {
  //   if (!refContainer.current) {
  //     // Initialize the Map on first usage.
  //     refContainer.current = new Map();
  //   }
  //   return refContainer.current;
  // }

  useOnClickOutside(refContainer, handleClickOutside);

  return (
    <div {...rest}>
      <div ref={refContainer} className="dropdown inline-block relative">
        <button
          type="button"
          onClick={handleClickInside}
          className="text-gray-700 font-semibold flex items-center focus:outline-none"
        >
          {label}
          {/* <AiOutlineDown /> */}
        </button>
        {showDropdown && (
          <>
            <ul className="dropdown-menu min-w-[150px] absolute text-gray-700 right-0 bg-white top-[110%] shadow-xl z-[333]">
              {children
                ? children
                : listItems &&
                  listItems.map((item) => (
                    <li
                      key={item.id}
                      className="bg-white cursor-pointer"
                      onClick={() => onClickItem(item)}
                    >
                      <span className="whitespace-nowrap hover:bg-grey-1 py-2 px-4 block whitespace-no-wrap">
                        {item.label}
                      </span>
                    </li>
                  ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
});

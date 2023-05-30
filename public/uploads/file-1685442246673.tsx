import { useOnClickOutside } from '@hooks/index';
import React, { RefObject, useRef, useState } from 'react';
import { AiOutlineDown } from 'react-icons/ai';

export interface DropdownProps {
  label?: string;
  listItems: Array<{ id: string | number; label: string; value: string | number }>;
  [key: string]: any;
}

export function Dropdown({ label = 'Sort by', listItems, ...rest }: DropdownProps) {
  const [showDropdown, setShowDropDown] = useState(false);
  const refContainer = useRef(null);

  const toggleDropDown = () => {
    setShowDropDown((prev) => !prev);
  };

  const onSelectItem = (item: { id: string | number; label: string; value: string | number }) => {
    console.log('🚀 ~ file: Dropdown.tsx:20 ~ onSelectItem ~ item:', item);
    toggleDropDown();
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
          onClick={handleClickInside}
          className="text-gray-700 font-semibold py-2 px-4 inline-flex items-center border border-grey-3"
        >
          <span className="mr-4">{label}</span>
          <AiOutlineDown />
        </button>
        {showDropdown && (
          <ul className="dropdown-menu min-w-[150px] absolute text-gray-700 right-0 bg-white top-[110%] shadow-xl">
            {listItems.map((item) => (
              <li key={item.id} className="bg-white" onClick={() => onSelectItem(item)}>
                <a
                  className="whitespace-nowrap hover:bg-grey-1 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

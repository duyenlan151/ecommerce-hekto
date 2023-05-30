import { useOnClickOutside } from '@hooks/index';
import { createPopper } from '@popperjs/core';
import { ReactNode, useRef, useState } from 'react';
import { AiOutlineMore } from 'react-icons/ai';

export interface DropdownProps {
  label?: string;
  listItems: Array<{ id: string | number; label: string; value: string | number; icon: ReactNode }>;
  onSelectOption: (item) => void;
  [key: string]: any;
}

export function Dropdown({ label = 'Sort by', listItems, onSelectOption, ...rest }: DropdownProps) {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef(null);
  const popoverDropdownRef = useRef(null);
  const refContainer = useRef(null);

  const openDropdownPopover = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      setDropdownPopoverShow(true);
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: 'left-start',
      });
    }
  };

  const onSelectItem = (item: { id: string | number; label: string; value: string | number }) => {
    onSelectOption(item);
    setDropdownPopoverShow(false);
  };

  // const getMap = () => {
  //   if (!refContainer.current) {
  //     // Initialize the Map on first usage.
  //     refContainer.current = new Map();
  //   }
  //   return refContainer.current;
  // }

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  useOnClickOutside(refContainer, closeDropdownPopover);

  return (
    <div {...rest}>
      <div ref={refContainer} className="dropdown inline-block relative">
        <a
          className="text-blueGray-500 py-1 px-3"
          href="#pablo"
          ref={btnDropdownRef}
          onClick={(e) => {
            e.preventDefault();
            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
          }}
        >
          <AiOutlineMore size={22} />
        </a>
        <div
          ref={popoverDropdownRef}
          className={
            (dropdownPopoverShow ? 'inline-block ' : 'hidden ') +
            'bg-white text-base z-10 float-leftlist-none text-left rounded shadow-lg min-w-48'
          }
        >
          {listItems.map((item) => (
            <a
              key={item.id}
              onClick={() => onSelectItem(item)}
              className="cursor-pointer whitespace-nowrap hover:bg-grey-1 py-3 px-4 block whitespace-no-wrap text-sm flex items-center"
              // href="#!"
            >
              {item.icon}
              <span className="ml-3">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

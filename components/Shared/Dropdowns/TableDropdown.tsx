import React, { useEffect, useRef, useState } from 'react';
import { createPopper } from '@popperjs/core';
import { AiOutlineMore } from 'react-icons/ai';
import { useOnClickOutside } from '@hooks/useOnClickOutside';

const NotificationDropdown = () => {
  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
  const btnDropdownRef = useRef();
  const popoverDropdownRef = useRef();
  const refContainer = useRef(null);

  const openDropdownPopover = () => {
    if (btnDropdownRef.current && popoverDropdownRef.current) {
      setDropdownPopoverShow(true);
      createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
        placement: 'left-start',
      });
    }
  };

  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  useOnClickOutside(refContainer, closeDropdownPopover);

  return (
    <div ref={refContainer}>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        // @ts-ignore
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        {/* <i className="fas fa-ellipsis-v"></i> */}
        <AiOutlineMore size={22} />
      </a>
      <div
        // @ts-ignore
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? 'inline-block ' : 'hidden ') +
          'bg-white text-base z-10 float-left py-2 list-none text-left rounded shadow-lg min-w-48'
        }
      >
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700 '
          }
          onClick={(e) => e.preventDefault()}
        >
          Action
        </a>
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Another action
        </a>
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
        <a
          href="#pablo"
          className={
            'text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700'
          }
          onClick={(e) => e.preventDefault()}
        >
          Something else here
        </a>
      </div>
    </div>
  );
};

export default NotificationDropdown;

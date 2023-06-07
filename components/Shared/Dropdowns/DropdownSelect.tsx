import { useOnClickOutside } from '@hooks/useOnClickOutside';
import React from 'react';
import { useController } from 'react-hook-form';

export interface DropdownSelectProps {
  name: string;
  label?: string;
  control?: any;
  onChange?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  value?: string;
  className?: string;
  items: Array<{ _id: string | number; title: string; value: string }>;
  [name: string]: any;
}

export function DropdownSelect({
  name,
  label,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  placeholder = 'Please enter',
  value: externaValue,
  className,
  items,
  ...rest
}: DropdownSelectProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });
  const [show, setShow] = React.useState(false);
  const refContainer = React.useRef(null);

  useOnClickOutside(refContainer, () => setShow(false));

  return (
    <div className="group w-full mx-auto py-3" {...rest}>
      <label
        htmlFor={name}
        className="w-full block pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        {label || 'Select'}
      </label>

      <div className="relative" ref={refContainer}>
        <div
          onClick={() => setShow(true)}
          className="h-[50px] bg-white flex border border-gray-200 items-center cursor-pointer"
        >
          <span className="px-4 capitalize appearance-none outline-none text-gray-800 w-full">
            {value?.title ? value?.title : <span className="text-gray-400">{placeholder}</span>}
          </span>
          {value && (
            <button
              onClick={() => onChange('')}
              type="button"
              className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-gray-600"
            >
              <svg
                className="w-4 h-4 mx-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          )}
          <label
            htmlFor="show_more"
            className={`cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-gray-600`}
          >
            <svg
              className={`w-4 h-4 mx-2 fill-current transition-all duration-200 ease-in-out transform rotate-180 ${
                show && '-rotate-180'
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </label>
        </div>

        <div
          className={`absolute shadow bg-white overflow-hidden ${
            show ? 'flex ' : 'hidden '
          } flex-col w-full mt-1 border border-gray-200 z-[999]`}
        >
          {items.map((item) => (
            <div key={item._id} className="cursor-pointer group">
              <a
                onClick={() => {
                  onChange(item);
                  setShow(false);
                }}
                className={`block p-2 py-3 border-transparent transition-all duration-200 ease-in-out border-l-4 hover:border-gray-300 hover:bg-gray-100 ${
                  item?.value === value?.value && '!border-gray-300 bg-gray-100'
                }`}
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* @ts-ignore */}
      {error?.value?.message && (
        <span className="text-red-500 text-xs font-bold tracking-wide">
          {/* @ts-ignore */}
          {error?.value?.message}
        </span>
      )}
      {error?.message && (
        <span className="text-red-500 text-xs font-bold tracking-wide">{error?.message}</span>
      )}
    </div>
  );
}

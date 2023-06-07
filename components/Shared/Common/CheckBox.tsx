import React from 'react';
import { useController } from 'react-hook-form';

export interface CheckBoxProps {
  label: string;
  name: string;
  control: any;
  onChange?: (value) => void;
  onBlur?: () => void;
  placeholder?: string;
  value?: string;
  className?: string;
  [name: string]: any;
}

export function CheckBox({
  name,
  label,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  externaValue,
  className,
  ...rest
}: CheckBoxProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  return (
    <>
      <div className="flex relative items-center">
        <input
          id={name}
          name={name}
          ref={ref}
          defaultValue={value || ''}
          onChange={externalOnChange}
          type="checkbox"
          {...rest}
          className={`border-green-1 mr-2 mt-[2px] !text-green-1 focus:border-green-1 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 ${className}`}
        />
        <label htmlFor={name} className="cursor-pointer text-sm font-lato">
          {label}
        </label>
      </div>
      {error?.message && (
        <span className="text-red-500 text-xs font-bold tracking-wide">{error?.message}</span>
      )}
    </>
  );
}

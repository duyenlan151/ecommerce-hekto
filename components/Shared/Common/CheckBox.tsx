import * as React from 'react';

export interface CheckBoxProps {
  label: string;
  name?: string;
  [name: string]: any;
}

export function CheckBox({ label, name, ...rest }: CheckBoxProps) {
  return (
    <div className="flex relative items-center">
      <input
        id={name}
        name={name}
        type="checkbox"
        className={`border-green-1 mr-2 mt-[2px] text-green-1 focus:border-green-1 focus:ring-0 focus:ring-offset-0 focus:ring-indigo-200 ${rest?.className}`}
      />
      <label htmlFor={name} className="cursor-pointer text-sm text-sub-title font-lato-light">
        {label}
      </label>
    </div>
  );
}

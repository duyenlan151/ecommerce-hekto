import * as React from 'react';

export interface CheckBoxProps {
  label: string;
  [name: string]: any;
}

export function CheckBox({ label, ...rest }: CheckBoxProps) {
  return (
    <div className="flex relative">
      <input
        type="checkbox"
        className="absolute top-2/4 transform -translate-y-1/2 h-3 w-3 accent-green-1 bg-green-1 text-red-500 rounded cursor-pointer"
        {...rest}
      />
      <span className="ml-5 text-sm text-sub-title font-lato-light">{label}</span>
    </div>
  );
}

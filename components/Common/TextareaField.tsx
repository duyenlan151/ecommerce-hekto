import React from 'react';
import { useController } from 'react-hook-form';

interface TextareaFieldProps {
  name?: string;
  control?: any;
  onChange?: () => void;
  onBlur?: () => void;
  value?: string | number | null | undefined;
  label?: string;
  className?: string;
  [name: string]: any;
}

export function TextareaField({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  value,
  label,
  className,
  ...rest
}: TextareaFieldProps) {
  // const {
  //   field: { onChange, onBlur, value, ref },
  //   fieldState: { error },
  // } = useController({
  //   name,
  //   control,
  // });

  // render whatever you want: MUI, Ant Design, Bootstrap, Custom UI
  return (
    <div className="group relative w-full py-3">
      {!!label && (
        <label
          htmlFor="1"
          className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
        >
          {label}
        </label>
      )}
      <textarea
        className={`placeholder:text-sub-title placeholder:font-lato-light peer border border-border-1 relative w-full bg-white p-4 font-thin outline-none ${className}`}
        rows={6}
        {...rest}
      />
    </div>
  );
}

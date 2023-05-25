import React from 'react';
import { useController } from 'react-hook-form';

export type TypeInput = 'text' | 'number';

interface InputFieldProps {
  name?: string;
  control?: any;
  onChange?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  value?: string | number | null | undefined;
  className?: string;
  [name: string]: any;
}

export function InputField({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  placeholder = 'Please enter',
  value,
  className,
  ...rest
}: InputFieldProps) {
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
      {/* <label
        htmlFor="1"
        className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
      >
        Focus outline
      </label> */}
      <input
        id="1"
        value={value}
        placeholder={placeholder}
        className={`placeholder:text-sub-title placeholder:font-lato-light peer border border-border-1 relative h-3.125 w-full bg-white px-4 font-thin outline-none transition-all duration-200 ease-in-out ${className}`}
        {...rest}
      />
    </div>
    // <TextField
    //   fullWidth
    //   size="small"
    //   margin="normal"
    //   name={name}
    //   value={value}
    //   onChange={(event) => {
    //     onChange(event);
    //     externalOnChange?.(event);
    //   }}
    //   onBlur={onBlur}
    //   inputRef={ref}
    //   error={!!error}
    //   helperText={error?.message}
    //   {...rest}
    // />
  );
}

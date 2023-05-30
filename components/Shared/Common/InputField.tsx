import React from 'react';
import { useController } from 'react-hook-form';

export type TypeInput = 'text' | 'number';

interface InputFieldProps {
  name: string;
  label?: string;
  control?: any;
  onChange?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  value?: string;
  className?: string;
  [name: string]: any;
}

export function InputField({
  name,
  label,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  placeholder = 'Please enter',
  value: externaValue,
  className,
  ...rest
}: InputFieldProps) {
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  // render whatever you want: MUI, Ant Design, Bootstrap, Custom UI
  return (
    <div className="group relative w-full py-3">
      {label && (
        <label
          htmlFor={name}
          className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        defaultValue={externaValue}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`placeholder:text-sub-title placeholder:font-lato-light peer border border-gray-200 relative h-3.125 w-full bg-white px-4 font-thin outline-none transition-all duration-200 ease-in-out ${className}`}
        {...rest}
      />
      {error?.message && (
        <span className="text-red-500 text-xs font-bold tracking-wide">{error?.message}</span>
      )}
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

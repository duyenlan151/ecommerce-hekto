import React, { memo, ReactNode } from 'react';
import { useController } from 'react-hook-form';

interface TextareaFieldProps {
  name: string;
  control?: any;
  onChange?: () => void;
  onBlur?: () => void;
  value?: string | number | null | undefined;
  label?: string | ReactNode;
  className?: string;
  [name: string]: any;
}

export const TextareaField = memo(function TextareaFieldMain({
  name,
  control,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  value: externalName,
  label,
  className,
  ...rest
}: TextareaFieldProps) {
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
      {!!label && (
        <label
          htmlFor="1"
          className="block w-full pb-1 text-sm font-medium text-gray-500 transition-all duration-200 ease-in-out group-focus-within:text-blue-400"
        >
          {label}
        </label>
      )}
      <textarea
        defaultValue={value ?? ''}
        name={name}
        onChange={onChange}
        className={`border border-gray-200 focus:border-gray-200 focus:ring-0 placeholder:text-sub-title placeholder:font-lato-light peer border border-border-1 relative w-full bg-white p-4 font-thin outline-none ${className}`}
        rows={6}
        {...rest}
      />
      {error?.message && (
        <span className="text-red-500 text-xs font-bold tracking-wide">{error?.message}</span>
      )}
    </div>
  );
});

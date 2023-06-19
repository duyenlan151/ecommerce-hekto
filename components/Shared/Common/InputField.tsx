import useTranslation from 'next-translate/useTranslation';
import { memo, useState } from 'react';
import { useController } from 'react-hook-form';
import {
  AiOutlineClose,
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineSearch,
} from 'react-icons/ai';

export type TypeInput = 'text' | 'number';

interface InputFieldProps {
  name: string;
  label?: string;
  control?: any;
  onChange?: (value) => void;
  onBlur?: () => void;
  placeholder?: string;
  value?: string;
  className?: string;
  [name: string]: any;
}

export const InputField = memo(function InputFieldMain({
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
  const { t } = useTranslation('form');
  const [typeInput, setTypeInput] = useState(rest?.type || 'text');
  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
  });

  const changeTypeInput = () => {
    const newType = typeInput === 'password' ? 'text' : 'password';
    setTypeInput(newType);
  };

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
      <div className={`border border-gray-200 flex items-center h-3.125 ${className}`}>
        <input
          ref={ref}
          id={name}
          value={value ?? ''}
          // defaultValue={value ?? ''}
          name={name ?? ''}
          placeholder={placeholder}
          // onChange={onChange}
          type={typeInput}
          onChange={(event) => {
            onChange(event.target.value);
            externalOnChange && externalOnChange?.(event);
          }}
          className={`border-transparent bg-white focus:border-transparent focus:ring-0 placeholder:text-sub-title placeholder:font-lato-light peer border-0 relative w-full h-full bg-white px-4 font-thin outline-none transition-all duration-200 ease-in-out `}
          // {...rest}
        />
        {rest?.isSearch && (
          <div
            onClick={() => {
              onChange('');
              externalOnChange && externalOnChange?.(null);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer outline-none focus:outline-none transition-all text-gray-400 hover:text-gray-600"
          >
            {value ? <AiOutlineClose /> : <AiOutlineSearch />}
          </div>
        )}
        {rest.type === 'password' && (
          <span className="px-4 cursor-pointer" onClick={changeTypeInput}>
            {typeInput !== 'password' ? (
              <AiOutlineEye size={20} />
            ) : (
              <AiOutlineEyeInvisible size={20} />
            )}
          </span>
        )}
      </div>
      {error?.message && (
        <span className="text-red-500 text-xs font-bold tracking-wide">{t(error?.message)}</span>
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
});

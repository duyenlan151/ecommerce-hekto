import { useDebounce } from '@hooks/index';
import { memo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../Common';

export interface SearchInputProps {
  label?: string;
  value: string;
  debounceTime?: number;
  handleChange: (value) => void;
}

export const SearchInput = memo(function SearchInput({
  label,
  value,
  debounceTime = 400,
  handleChange,
  ...rest
}: SearchInputProps) {
  const [query, setQuery] = useState('');

  const { control, getValues, setValue, reset } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      search: value !== 'undefined' ? value : '',
    },
  });

  useEffect(() => {
    setValue('search', value !== 'undefined' ? value : '');
  }, [value]);

  const searchQuery = useDebounce(query, debounceTime);

  useEffect(() => {
    const { search } = getValues();
    handleChange(search);
  }, [searchQuery]);

  return (
    <div>
      {label && (
        <h1 className="text-2xl font-bold tracking-tight lg:leading-tight text-brand-primary dark:text-white">
          {label || `Search results for "${value !== 'undefined' ? value : ''}"`}
        </h1>
      )}
      <div className="max-w-md mx-auto">
        <div className="relative">
          <InputField
            isSearch={true}
            control={control}
            name="search"
            placeholder="Search"
            onChange={setQuery}
          />
        </div>
      </div>
    </div>
  );
});

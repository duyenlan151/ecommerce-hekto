import { useDebounce } from '@hooks/index';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputField } from '../Common';

export interface SearchInputProps {
  label?: string;
  value: string;
  handleChange: (value) => void;
}

export function SearchInput({ label, value, handleChange, ...rest }: SearchInputProps) {
  const [query, setQuery] = useState('');

  const { control, getValues, setValue } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      search: value !== 'undefined' ? value : '',
    },
  });

  useEffect(() => {
    setValue('search', value !== 'undefined' ? value : '');
  }, [value]);

  const searchQuery = useDebounce(query, 400);

  useEffect(() => {
    const { search } = getValues();
    handleChange(search);
  }, [searchQuery]);

  return (
    <div>
      <h1 className="text-2xl font-bold tracking-tight lg:leading-tight text-brand-primary dark:text-white">
        {label || `Search results for "life"`}
      </h1>
      <div className="max-w-md mx-auto">
        <div className="relative">
          <InputField control={control} name="search" placeholder="Search" onChange={setQuery} />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              className="w-4 h-4 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

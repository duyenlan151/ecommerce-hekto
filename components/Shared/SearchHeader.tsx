import { useDebounce, useKeypress, useRouterPush } from '@hooks/index';
import { formatQueryString } from '@utils/index';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { InputField } from './Common';

export interface SearchHeaderProps {}

export function SearchHeader(props: SearchHeaderProps) {
  const router = useRouter();
  const {
    query: { search },
  } = router;
  const { routerPushQuery } = useRouterPush();

  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      search,
    },
  });

  const { control, getValues, setValue, reset } = form;

  const handleSearch = () => {
    const { search } = getValues();

    routerPushQuery({
      pathname: '/products',
      query: {
        ...router.query,
        search,
      },
    });
  };

  const onChangeValue = ({ target: { value } }) => {
    setValue('search', value);
    if (!value && search) {
      delete router.query.search;
      routerPushQuery({
        pathname: '/products',
        query: formatQueryString(router.query),
      });
    }
  };

  const onClear = () => {
    setValue('search', '');
    delete router.query.search;

    routerPushQuery({
      pathname: '/products',
      query: formatQueryString(router.query),
    });
  };

  useKeypress('Enter', handleSearch);

  useEffect(() => {
    return () => {
      reset({ search: '' });
    };
  }, []);

  return (
    <div className="flex items-center relative">
      <InputField
        control={control}
        name="search"
        placeholder="Search..."
        className="!p-0 h-[45px] lg:min-w-[380px]"
        onChange={onChangeValue}
      />
      <button
        type="submit"
        className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer button flex-none h-[45px] px-3.5 py-2.5 text-lg font-semibold text-gray-400"
      >
        {getValues().search ? (
          <AiOutlineClose onClick={onClear} />
        ) : (
          <AiOutlineSearch onClick={handleSearch} />
        )}
      </button>
    </div>
  );
}

import { useDebounce, useKeypress, useRouterPush } from '@hooks/index';
import { formatQueryString } from '@utils/index';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai';
import { InputField } from './Common';
interface HeaderProps {}

const items = [
  { id: 1, title: 'home', path: '/' },
  { id: 2, title: 'products', path: '/products' },
  { id: 3, title: 'blog', path: '/blog' },
  { id: 4, title: 'contact', path: '/contact' },
];

export function Header({}: HeaderProps) {
  const router = useRouter();
  const {
    query: { search },
  } = router;
  const { t } = useTranslation('header');
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
    <div className="md:flex hidden items-center justify-between bg-white py-4 lg:px-0 px-2 border border-b border-primary">
      <div className="flex items-center justify-between container mx-auto">
        <div className="md:flex items-center ">
          <h1 className="text-4xl font-bold mr-20">
            <Link href="/">Hekto</Link>
          </h1>
          <nav className="flex">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item?.path}
                className={
                  'mx-3 text-base ' +
                  (router.pathname === item.path
                    ? 'text-pink-600 hover:text-lightBlue-600'
                    : 'text-gray-500 hover:text-blueGray-500')
                }
              >
                {t(item.title)}
              </Link>
            ))}
          </nav>
        </div>

        {/* Input */}
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
      </div>
    </div>
  );
}

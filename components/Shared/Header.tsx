import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SearchHeader } from './SearchHeader';
interface HeaderProps {}

const items = [
  { id: 1, title: 'home', path: '/' },
  { id: 2, title: 'products', path: '/products' },
  { id: 3, title: 'blog', path: '/blog' },
  { id: 4, title: 'contact', path: '/contact' },
];

export function Header({}: HeaderProps) {
  const router = useRouter();
  const { t } = useTranslation('header');
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

        {/* Search */}
        <SearchHeader />
      </div>
    </div>
  );
}

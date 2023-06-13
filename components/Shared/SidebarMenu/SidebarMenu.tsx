import { cleanAllCart } from '@app/Cart/cartSlice';
import { signOut, useSession } from 'next-auth/react';
import useTranslation from 'next-translate/useTranslation';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { MdLogin, MdLogout } from 'react-icons/md';
import { useDispatch } from 'react-redux';

export interface SidebarMenuProps {
  show: boolean;
  onClose: () => void;
}

const links = [
  { id: 1, name: 'home', path: '/' },
  { id: 2, name: 'products', path: '/products' },
  { id: 3, name: 'blog', path: '/blog' },
  { id: 4, name: 'contact', path: '/contact' },
];

export function SidebarMenu({ show = false, onClose }: SidebarMenuProps) {
  const { t } = useTranslation('header');
  const { data: session } = useSession();
  const dispatch = useDispatch();
  return (
    <div
      className={`md:hidden max-w-[380px] w-[90%] h-screen fixed top-0 left-0 z-50 bg-white shadow-md z-[1000] bg-palette-card origin-left overflow-y-auto  transition-transform duration-300 ease-out ${
        show ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="">
        <div className="flex items-center justify-between p-3 border border-b border-primary">
          <h1 className="text-3xl font-bold mr-20">Hekto</h1>
          <span onClick={onClose}>
            <AiOutlineClose size={25} />
          </span>
        </div>
        <div className="p-3">
          {session?.user?.name && (
            <Link
              className="py-3 text-base block text-ellipsis max-w-full overflow-hidden whitespace-nowrap"
              href={'/user/profile'}
              onClick={onClose}
            >
              {t('hello')}, {session?.user?.name}
            </Link>
          )}
          {links.map((link) => (
            <Link key={link.id} className="py-3 text-base block" href={link.path} onClick={onClose}>
              {t(link.name)}
            </Link>
          ))}

          <Link
            className="py-3 text-base block flex items-center"
            href={session?.user?.name ? '/#' : '/login'}
            onClick={() =>
              session?.user?.name
                ? (signOut({ callbackUrl: '/' }), dispatch(cleanAllCart()))
                : onClose()
            }
          >
            {session?.user?.name ? <MdLogin size={20} /> : <MdLogout size={20} />}
            <span className="ml-2">{t(session?.user?.name ? 'logout' : 'login')}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

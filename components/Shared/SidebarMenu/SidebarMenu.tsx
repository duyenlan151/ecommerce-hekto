import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { AiOutlineClose } from 'react-icons/ai';
import { MdLogin, MdLogout } from 'react-icons/md';

export interface SidebarMenuProps {
  show: boolean;
  onClose: () => void;
}

const links = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'Products', path: '/products' },
  { id: 3, name: 'Blog', path: '/blog' },
  { id: 4, name: 'Contact', path: '/contact' },
];

export function SidebarMenu({ show = false, onClose }: SidebarMenuProps) {
  const { data: session } = useSession();
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
              href={'/#'}
              onClick={onClose}
            >
              Hello, {session?.user?.name}
            </Link>
          )}
          {links.map((link) => (
            <Link className="py-3 text-base block" href={link.path} onClick={onClose}>
              {link.name}
            </Link>
          ))}

          <Link
            className="py-3 text-base block flex items-center"
            href={session?.user?.name ? '/#' : '/login'}
            onClick={() => (session?.user?.name ? signOut({ callbackUrl: '/' }) : onClose())}
          >
            {session?.user?.name ? <MdLogin size={20} /> : <MdLogout size={20} />}
            <span className="ml-2">{session?.user?.name ? 'Logout' : 'Login'}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

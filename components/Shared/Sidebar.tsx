import { cleanAllCart } from '@app/Cart/cartSlice';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  AiOutlineAppstore,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineSetting,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import { SlMap } from 'react-icons/sl';
import { useDispatch } from 'react-redux';

export interface SideBarProps {}

const items = [
  { id: 1, title: 'Dashboard', icon: <AiOutlineHome size={20} />, path: '/admin/dashboard' },
  { id: 2, title: 'Products', icon: <AiOutlineMenu size={20} />, path: '/admin/products' },
  { id: 3, title: 'Categories', icon: <AiOutlineAppstore size={20} />, path: '/admin/categories' },
  { id: 5, title: 'Users group', icon: <AiOutlineUsergroupAdd size={20} />, path: '/admin/users' },
  { id: 4, title: 'Maps', icon: <SlMap size={20} />, path: '/admin/maps' },
  { id: 6, title: 'Settings', icon: <AiOutlineSetting size={20} />, path: '/admin/settings' },
  {
    id: 7,
    title: 'Logout',
    icon: <AiOutlineLogout size={20} />,
    path: '#',
    action: () => signOut({ callbackUrl: '/' }),
  },
];

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState('hidden');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(cleanAllCart());
    signOut({ callbackUrl: '/' });
  };
  return (
    <div className="font-lato md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10">
      <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* Brand */}
        <Link
          href={`/admin/dashboard`}
          className="md:block text-center text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-2"
        >
          Notus NextJS
        </Link>
        {/* User */}
        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">{/* <NotificationDropdown /> */}</li>
          <li className="inline-block relative">{/* <UserDropdown /> */}</li>
        </ul>
        {/* Collapse */}
        <div
          className={
            'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative lg:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
            collapseShow
          }
        >
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
            <div className="flex flex-wrap">
              <div className="w-6/12">
                <Link
                  href="#pablo"
                  className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                >
                  Notus NextJS
                </Link>
              </div>
              <div className="w-6/12 flex justify-end">
                <button
                  type="button"
                  className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                  onClick={() => setCollapseShow('hidden')}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="md:min-w-full" />

          <ul className="mt-2 md:flex-col md:min-w-full flex flex-col list-none px-4">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item?.path}
                onClick={() => item.action && handleLogout()}
                className={
                  'items-center flex items-center py-4 ' +
                  (router.pathname.indexOf(item.path) !== -1
                    ? 'text-lightBlue-500 hover:text-lightBlue-600'
                    : 'text-blueGray-700 hover:text-blueGray-500')
                }
              >
                {item.icon}
                <p className={'lg:text-base text-sm font-bold block ml-3'}>{item.title}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

import { cleanAllCart } from '@app/Cart/cartSlice';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {
  AiOutlineAppstore,
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineSetting,
  AiOutlineShoppingCart,
  AiOutlineUsergroupAdd,
} from 'react-icons/ai';
import { SiApache } from 'react-icons/si';
import { SlMap } from 'react-icons/sl';
import { useDispatch } from 'react-redux';

export interface SideBarProps {}

const items = [
  { id: 1, title: 'Dashboard', icon: <AiOutlineHome size={20} />, path: '/admin/dashboard' },
  { id: 2, title: 'Products', icon: <AiOutlineMenu size={20} />, path: '/admin/products' },
  { id: 3, title: 'Categories', icon: <AiOutlineAppstore size={20} />, path: '/admin/categories' },
  { id: 5, title: 'Users group', icon: <AiOutlineUsergroupAdd size={20} />, path: '/admin/users' },
  { id: 9, title: 'Orders', icon: <AiOutlineShoppingCart size={20} />, path: '/admin/orders' },
  { id: 10, title: 'Blogs', icon: <SiApache size={20} />, path: '/admin/blogs' },
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
  const router = useRouter();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(cleanAllCart());
    signOut({ callbackUrl: '/' });
  };
  return (
    <div className="font-lato relative md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10">
      <div className="w-full relative md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-center w-full mx-auto">
        {/* Toggler */}
        <button
          className="cursor-pointer absolute left-0 text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
          type="button"
          onClick={() => setShow(true)}
        >
          <AiOutlineMenu />
        </button>
        {/* Brand */}
        <Link
          href={`/admin/dashboard`}
          className="md:block text-center text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-2"
        >
          Hekto | Ecommerce
        </Link>
        {/* User */}
        <ul className="md:hidden items-center flex flex-wrap list-none">
          <li className="inline-block relative">{/* <NotificationDropdown /> */}</li>
          <li className="inline-block relative">{/* <UserDropdown /> */}</li>
        </ul>
        {/* Collapse */}
        <div
          className={`max-w-[380px] w-[90%] bg-white min-h-screen md:z-50 fixed top-0 transition-transform duration-300 ease-out md:flex md:flex-col md:items-stretch md:opacity-100 md:relative lg:mt-4 md:shadow-none shadow top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden items-center flex-1 rounded ${
            show ? 'translate-x-0' : 'md:-translate-x-0 -translate-x-full'
          }`}
        >
          {/* Collapse header */}
          <div className="md:min-w-full md:hidden ">
            <div className="flex flex-wrap">
              <div className="w-6/12 px-4">
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
                  onClick={() => setShow(false)}
                >
                  <AiOutlineClose />
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className="w-full" />

          <ul className="mt-2 md:flex-col w-full flex flex-col list-none px-4 bg-white">
            {items.map((item) => (
              <Link
                key={item.id}
                href={item?.path}
                onClick={() => item.action && handleLogout()}
                className={
                  'items-center flex items-center py-4 ' +
                  (router.pathname.includes(item.path)
                    ? 'text-blue-700 hover:text-lightBlue-600'
                    : 'text-gray-500 hover:text-blueGray-500')
                }
              >
                {item.icon}
                <p className={'lg:text-base text-sm font-bold block ml-3'}>{item.title}</p>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {show && (
        <div
          onClick={() => setShow(false)}
          className="md:hidden visible animate-fadeEntering fixed w-screen inset-0 h-screen z-20 bg-black/60 transition-transform ease-in-out duration-500 opacity-100"
        ></div>
      )}
    </div>
  );
}

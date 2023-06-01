import { cartItemsCountSelector } from 'app/Cart/cartSelector';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Dropdown } from './Dropdowns';
import { SidebarMenu } from './SidebarMenu';

type TopNavbarProps = {
  // item: User
};

function TopNavbar({}: TopNavbarProps) {
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const { data: session } = useSession();
  const [show, setShow] = useState(false);

  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <div className="">
      <div className="container mx-auto">
        <div className="md:flex justify-between py-3 text-sm text-black-500 lg:px-0 px-2 hidden">
          <div className="flex-1 w-50">
            <span className="mr-5">mhhasanul@gmail.com</span>
            <span>(12345)67890</span>
          </div>
          <div className="flex items-center w-50">
            <span className="ml-4">English</span>
            <span className="ml-4">USD</span>
            <Link href="/whislist" className="ml-4 flex items-center">
              Whislist
              <span className="ml-1">
                <AiOutlineHeart />
              </span>
            </Link>
            {session?.user?.name ? (
              <a href="#" className="ml-4 flex items-center">
                <Dropdown
                  label={
                    <p className="mt-[1px] flex flex-cols items-center text-ellipsis">
                      <span className="flex-1 mr-1">
                        <AiOutlineUser />
                      </span>
                      <span className="text-ellipsis max-w-[100px] overflow-hidden whitespace-nowrap">
                        {session?.user?.name}
                      </span>
                    </p>
                  }
                  onSelectOption={() => {}}
                >
                  <Link
                    className="whitespace-nowrap hover:bg-grey-1 py-2 px-4 block"
                    href="/profile"
                  >
                    Profile
                  </Link>
                  <li
                    onClick={logoutClickHandler}
                    className="bg-white hover:bg-grey-1 py-2 px-4 block whitespace-no-wrap"
                  >
                    Logout
                  </li>
                </Dropdown>
              </a>
            ) : (
              <Link href="/login" className="ml-4 flex items-center">
                Login
                <span className="ml-1">
                  <AiOutlineUser />
                </span>
              </Link>
            )}

            <Link href="/cart/checkout" className="relative ml-4 inline-block">
              <AiOutlineShoppingCart size={20} />
              <span className="absolute -top-2 -right-5 px-2 py-1 text-xs text-red-100 transform bg-red-600 rounded-full">
                {cartItemsCount}
              </span>
            </Link>
          </div>
        </div>

        <SidebarMenu show={show} onClose={() => setShow(false)} />

        {show && (
          <div
            onClick={() => setShow(false)}
            className="md:hidden animate-fadeEntering fixed inset-0 z-40 bg-black/60 transition ease-in-out duration-500 opacity-100"
          ></div>
        )}

        <div className="md:hidden text-center justify-between py-2 px-3 flex items-center border border-b border-primary">
          <span onClick={() => setShow(true)}>
            <AiOutlineMenu size={25} />
          </span>
          <h1 className="text-3xl font-bold">Hekto</h1>
          <Link href="/cart/checkout" className="relative mr-2 inline-block">
            <AiOutlineShoppingCart size={20} />
            <span className="absolute -top-2 -right-3 px-[6px] py-[2px] text-xs text-red-100 transform bg-red-600 rounded-full">
              {cartItemsCount}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;

import { cleanAllCart, toggleMiniCart } from '@app/Cart/cartSlice';
import { cartItemsCountSelector } from 'app/Cart/cartSelector';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  AiOutlineHeart,
  AiOutlineMenu,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown } from './Dropdowns';
import { SidebarMenu } from './SidebarMenu';

import setLanguage from 'next-translate/setLanguage';
import { MdKeyboardArrowDown } from 'react-icons/md';
import useTranslation from 'next-translate/useTranslation';
import { useWindowSize } from '@hooks/index';
import { BREAKPOINT_DEFAULT } from 'constants/index';

type TopNavbarProps = {
  // item: User
};

const locales = [
  { id: 1, label: 'English', value: 'en' },
  { id: 2, label: 'France', value: 'fr' },
];

function TopNavbar({}: TopNavbarProps) {
  const { t, lang } = useTranslation('header');
  const cartItemsCount = useSelector(cartItemsCountSelector);
  const { data: session } = useSession();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const [mounted, setMounted] = useState(false);

  const { width } = useWindowSize();

  useEffect(() => {
    setMounted(true);
  }, []);

  const logoutClickHandler = () => {
    signOut({ callbackUrl: '/' });
    dispatch(cleanAllCart());
  };

  const handleToggleCart = () => {
    dispatch(toggleMiniCart());
  };

  const handleChangeLang = useCallback(async ({ value }: { value: string }) => {
    await setLanguage(value);
  }, []);

  return (
    <>
      {mounted && (
        <div className="bg-white">
          <div className="container mx-auto">
            <div className="md:flex justify-between items-center py-3 text-sm text-black-500 lg:px-0 px-2 hidden">
              <div className="flex-1 w-50">
                <Link href="mailto:loanduyen151@gmail.com" className="mr-5">
                  loanduyen151@gmail.com
                </Link>
                <Link href="tel:12345)67890">(12345)67890</Link>
              </div>
              <div className="flex items-center w-50">
                <Dropdown
                  label={
                    <p className="mt-[1px] flex flex-cols items-center text-ellipsis">
                      <span className="ml-4 font-normal">
                        {lang === 'en' ? 'English' : 'France'}
                      </span>
                      <MdKeyboardArrowDown size={20} />
                    </p>
                  }
                  onSelectItem={handleChangeLang}
                  listItems={locales}
                />
                <span className="ml-4">USD</span>
                <Link href="/whislist" className="ml-4 flex items-center">
                  {t('whislist')}
                  <span className="ml-1">
                    <AiOutlineHeart />
                  </span>
                </Link>
                {session?.user?.name ? (
                  <div className="ml-4 flex items-center cursor-pointer">
                    <Dropdown
                      label={
                        <p className="mt-[1px] flex flex-cols items-center text-ellipsis">
                          <span className="flex-1 mr-1">
                            <AiOutlineUser />
                          </span>
                          <span className="text-ellipsis max-w-[100px] overflow-hidden whitespace-nowrap mt-[2px]">
                            {session?.user?.name}
                          </span>
                        </p>
                      }
                    >
                      <Link
                        className="whitespace-nowrap hover:bg-grey-1 py-2 px-4 block"
                        href="/user/profile"
                      >
                        {t('profile')}
                      </Link>
                      <li
                        onClick={logoutClickHandler}
                        className="bg-white hover:bg-grey-1 py-2 px-4 block whitespace-no-wrap"
                      >
                        {t('logout')}
                      </li>
                    </Dropdown>
                  </div>
                ) : (
                  <Link href="/login" className="ml-4 flex items-center">
                    {t('login')}
                    <span className="ml-1">
                      <AiOutlineUser />
                    </span>
                  </Link>
                )}
                <div
                  onClick={handleToggleCart}
                  className="cursor-pointer relative ml-2 inline-block"
                >
                  <AiOutlineShoppingCart size={20} />
                  <span className="absolute -top-2 -right-3 px-[6px] py-[2px] text-xs text-red-100 transform bg-red-600 rounded-full">
                    {cartItemsCount}
                  </span>
                </div>

                {/* <Link href="/cart/checkout" className="relative ml-4 inline-block">
            <AiOutlineShoppingCart size={20} />
            <span className="absolute -top-2 -right-5 px-2 py-1 text-xs text-red-100 transform bg-red-600 rounded-full">
              {cartItemsCount}
            </span>
          </Link> */}
              </div>
            </div>

            {width <= BREAKPOINT_DEFAULT.md && (
              <SidebarMenu show={show} onClose={() => setShow(false)} />
            )}

            {show && (
              <div
                onClick={() => setShow(false)}
                className="md:hidden animate-fadeEntering fixed inset-0 z-[666] bg-black/60 transition-transform ease-in-out duration-500 opacity-100"
              ></div>
            )}

            <div className="md:hidden text-center justify-between py-2 px-3 flex items-center border-b border-primary">
              <span onClick={() => setShow(true)}>
                <AiOutlineMenu size={25} />
              </span>
              <h1 className="text-3xl font-bold">
                <Link href="/">Hekto</Link>
              </h1>
              <div onClick={handleToggleCart} className="cursor-pointer relative ml-2 inline-block">
                <AiOutlineShoppingCart size={20} />
                <span className="absolute -top-2 -right-3 px-[6px] py-[2px] text-xs text-red-100 transform bg-red-600 rounded-full">
                  {cartItemsCount}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TopNavbar;

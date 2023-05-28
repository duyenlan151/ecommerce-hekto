import { cartItemsCountSelector } from 'app/Cart/cartSelector';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { useSelector } from 'react-redux';

type TopNavbarProps = {
  // item: User
};

function TopNavbar({}: TopNavbarProps) {
  const cartItemsCount = useSelector(cartItemsCountSelector);

  return (
    <div className="bg-violet-1 min-h-[50px]">
      <div className="container mx-auto">
        <div className="lg:flex justify-between py-3 text-sm text-white lg:px-0 px-2 hidden">
          <div className="flex-1 w-50">
            <span className="mr-5">mhhasanul@gmail.com</span>
            <span>(12345)67890</span>
          </div>
          <div className="flex items-center w-50">
            <span className="ml-8">English</span>
            <span className="ml-8">USD</span>
            <Link href="/login" className="ml-8 flex items-center">
              Login
              <span className="ml-1">
                <AiOutlineUser />
              </span>
            </Link>
            <Link href="/whislist" className="ml-8 flex items-center">
              Whislist
              <span className="ml-1">
                <AiOutlineHeart />
              </span>
            </Link>
            <Link href="/cart/checkout" className="relative ml-8 inline-block">
              <AiOutlineShoppingCart size={20} />
              <span className="absolute -top-2 -right-5 px-2 py-1 text-xs text-red-100 transform bg-red-600 rounded-full">
                {cartItemsCount}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;

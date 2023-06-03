import { cartItemsSelector, showMiniCartSelector } from '@app/Cart/cartSelector';
import { toggleMiniCart } from '@app/Cart/cartSlice';
import { useRouter } from 'next/router';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import CartItemList from './CartItemList';

export interface CartMiniProps {}

export default function CartMini(props: CartMiniProps) {
  const router = useRouter();

  const cartItems = useSelector(cartItemsSelector);
  const showMiniCart = useSelector(showMiniCartSelector);
  const dispatch = useDispatch();

  const handleToggleCart = () => {
    dispatch(toggleMiniCart());
  };

  const onViewBag = () => {
    router.push('/cart/checkout');
    handleToggleCart();
  };

  return (
    <>
      <div
        className={`trasform translate-x-full ${
          showMiniCart && '!-translate-x-full'
        } w-[350px] bg-white h-full max-w-full overflow-x-hidden fixed z-50 top-0 left-full transition ease-in-out duration-1000 opacity-100 outline-none focus:outline-none`}
      >
        <div
          className="cursor-pointer p-4 flex justify-end border-b border-primary"
          onClick={handleToggleCart}
        >
          <AiOutlineClose color="black" size={20} />
        </div>
        <div className="mt-4 px-4">
          {cartItems.length <= 0 ? (
            'Your Cart is empty'
          ) : (
            <>
              <CartItemList data={cartItems} />
              <button
                type="submit"
                onClick={onViewBag}
                className="block text-center mt-10 bg-gray-200 w-full rounded-sm py-3 text-base font-lato text-primary shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
              >
                View Bag
              </button>
            </>
          )}
        </div>
      </div>
      <div
        onClick={handleToggleCart}
        className={` opacity-60 fixed h-full w-full top-0 left-0 z-40 bg-black ${
          !showMiniCart && '!opacity-0 !z-[-1]'
        }`}
      ></div>
    </>
  );
}

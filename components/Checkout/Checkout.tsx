import CartCheckout from '@components/Cart/CartCheckout';
import { QuantityField } from '@components/Common/QuantityField';
import { IColumnType, Table } from '@components/Common/Table';
import { yupResolver } from '@hookform/resolvers/yup';
import { getSymbolCurrency } from '@utils/common';
import { cartItemsSelector, cartTotalSelector } from 'app/Cart/cartSelector';
import { removeFromCart, updateQuantity } from 'app/Cart/cartSlice';
import { CartModel } from 'models';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import * as yup from 'yup';

export interface CheckoutProps {}

const schema = yup
  .object({
    quantity: yup
      .number()
      .required('Vui lòng nhập số lượng')
      .min(1, 'Vui lòng nhập số tối thiểu là 1')
      .typeError('Vui lòng nhập số'),
  })
  .required();

export default function Checkout({}: CheckoutProps) {
  const cartItems = useSelector(cartItemsSelector);
  const cartTotal = useSelector(cartTotalSelector);

  const router = useRouter();

  const dispatch = useDispatch();
  const form = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      quantity: 1,
    },
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;
  const handleDeleteItem = (id: string | number) => {
    dispatch(removeFromCart(id));
  };

  const handleUpdateQuantity = ({ id, quantity }: { id: string | number; quantity: number }) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const columns: IColumnType<CartModel>[] = useMemo(
    () => [
      {
        key: 'product',
        title: 'Product',
        render: (_, { id, product, color, size }, onDelete) => (
          <>
            <div className="flex">
              <div className="relative mr-3 h-[83px] w-[83px]">
                <span
                  className="absolute cursor-pointer -top-1 -right-1"
                  onClick={() => {
                    {
                      if (!onDelete) return;
                      onDelete(id);
                    }
                  }}
                >
                  <AiFillCloseCircle />
                </span>
                <Link href={`/product/${product.id}`} className="mr-3 h-[83px] w-[83px]">
                  <img
                    className="max-w-full max-h-full mx-auto"
                    src={product.thumbnail[0]}
                    alt=""
                  />
                </Link>
              </div>
              <div>
                <Link
                  href={`/product/${product.id}`}
                  className="hover:text-pink-1 transition ease-in-out duration-300"
                >
                  {product.name}
                </Link>
                <p className="text-sub-title text-sm">Color: {color}</p>
                <p className="text-sub-title text-sm">Size: {size}</p>
              </div>
            </div>
          </>
        ),
      },
      {
        key: 'price',
        title: 'Price',
        render: (_, { product }) => <>{getSymbolCurrency('EUR', Number(product.price))}</>,
      },
      {
        key: 'quantity',
        title: 'Quantity',
        render: (_, { id, quantity }) => (
          <QuantityField
            onChange={(value: number) => handleUpdateQuantity({ id, quantity: value })}
            value={quantity}
            form={form}
            name="quantity"
            // label="Quantity"
            disabled={false}
          />
        ),
      },
      {
        key: 'total',
        title: 'Total',
        render: (_, { product, quantity }) => (
          <>{getSymbolCurrency('EUR', quantity * Number(product.price))}</>
        ),
      },
    ],
    []
  );

  const onSubmit = (values) => {
    console.log('🚀 ~ file: Checkout.tsx:166 ~ onSubmit ~ values:', values);
  };

  const handleNavigate = () => {
    router.push('/cart/payment');
  };

  return (
    <section className="container mx-auto lg:py-32 py-10 lg:px-0 px-4">
      <h4 className="text-blue-1 text-3xl">Hekto Checkout</h4>
      <div className="text-sub-title font-lato-light leading-7 mt-3">
        Cart/ Information/ Shipping/ Checkout
      </div>
      <div className="flex lg:flex-nowrap flex-wrap justify-between mt-6">
        <div className="lg:basis-8/12 basis-full overflow-x-auto">
          <div className="inline-block min-w-full">
            <Table data={cartItems} columns={columns} onDelete={handleDeleteItem} />
          </div>
          <Link
            href="/"
            className="block text-center mt-10 bg-pink-1 lg:w-fit w-full rounded-sm px-10 py-3 text-base font-lato text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
          >
            Continue Shopping
          </Link>
        </div>
        <div className="lg:basis-4/12 basis-full lg:ml-10 lg:mt-0 mt-5 w-full justify-self-end">
          <h4 className="text-blue-1 text-xl text-center mb-5">Cart Totals</h4>
          <CartCheckout
            onClick={handleNavigate}
            price={cartTotal}
            totalPrice={cartTotal + (cartTotal * 3) / 100}
          />
        </div>
      </div>
    </section>
  );
}

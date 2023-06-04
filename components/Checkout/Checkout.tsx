import CartCheckout from '@components/Cart/CartCheckout';
import { QuantityField } from '@components/Shared/Common/QuantityField';
import { IColumnType, Table } from '@components/Shared/Table';
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
import Image from 'next/image';
import * as yup from 'yup';
import { useSession } from 'next-auth/react';

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
  const { data: session } = useSession();

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
  const handleDeleteItem = (_id: string | number) => {
    dispatch(removeFromCart(_id));
  };

  const handleUpdateQuantity = ({ _id, quantity }: { _id: string | number; quantity: number }) => {
    dispatch(updateQuantity({ _id, quantity }));
  };

  const columns: IColumnType<CartModel>[] = useMemo(
    () => [
      {
        key: 'product',
        title: 'Product',
        render: (_, { _id, product, color, size }, columnIndex) => (
          <>
            <div className="flex py-4">
              <div className="relative mr-3 h-[83px] w-[83px]">
                <span
                  className="absolute cursor-pointer -top-1 -right-1 z-50"
                  onClick={() => handleDeleteItem(_id)}
                >
                  <AiFillCloseCircle />
                </span>
                <Link href={`/product/${product?._id}`} className="mr-3 h-[83px] w-[83px] py-4">
                  <Image
                    className="max-w-[64px] min-w-[83px] h-full z overflow-hidden object-cover relative shadow-sm h-full"
                    width={83}
                    height={83}
                    sizes="(max-width: 83px) 100vw, (max-width: 83px)"
                    src={product?.images[0]?.path}
                    alt={product?.images[0]?.name}
                    layout="responsive"
                    loading="lazy"
                  />
                </Link>
              </div>
            </div>
          </>
        ),
      },
      {
        key: 'title',
        title: 'Title',
        render: (_, { product }) => (
          <>
            <div className="line-clamp-3">
              <Link
                href={`/products/${product?._id}/${product?.slug}`}
                className="flex hover:text-pink-1 transition ease-in-out duration-300 whitespace-pre-wrap max-h-[80px]"
              >
                {product?.title}
              </Link>
            </div>
          </>
        ),
      },
      {
        key: 'price',
        title: 'Price',
        render: (_, { product }) => <>{getSymbolCurrency(Number(product.price))}</>,
      },
      {
        key: 'quantity',
        title: 'Quantity',
        render: (_, { _id, quantity }) => (
          <QuantityField
            onChange={(value: number) => handleUpdateQuantity({ _id, quantity: value })}
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
          <>{getSymbolCurrency(quantity * Number(product.price))}</>
        ),
      },
    ],
    []
  );

  const onSubmit = (values) => {};

  const handleNavigate = () => {
    if (!session) {
      router.push('/login/?redirect=/cart/payment');
      return;
    }
    cartTotal > 0 && router.push('/cart/payment');
  };

  return (
    <section className="container mx-auto lg:py-32 py-10 lg:px-0 px-4">
      <h4 className="text-blue-1 text-3xl">Hekto Checkout</h4>
      <div className="text-sub-title font-lato-light leading-7 mt-3">
        Cart/ Information/ Shipping/ Checkout
      </div>
      <div className="flex lg:flex-row flex-col justify-between mt-6">
        <div className="lg:basis-8/12 basis-full overflow-x-auto">
          <div className="inline-block min-w-full">
            <Table
              showHeader={false}
              showAction={false}
              title={''}
              data={cartItems}
              columns={columns}
              onSelectOption={() => {}}
            />
          </div>
          <div className="mt-10">
            <Link
              href="/products"
              className="text-center mt-20 bg-pink-1 lg:w-fit w-full rounded-sm px-10 py-3 text-base font-lato text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
        <div className="lg:basis-4/12 basis-full lg:ml-4 lg:mt-0 mt-5 w-full justify-self-end">
          <h4 className="text-blue-1 text-xl text-center mb-5">Cart Totals</h4>
          <CartCheckout onClick={handleNavigate} />
        </div>
      </div>
    </section>
  );
}

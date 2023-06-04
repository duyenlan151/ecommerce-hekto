import { getSymbolCurrency } from '@utils/common';
import { CartModel } from 'models';
import Link from 'next/link';
import Image from 'next/image';

export interface CartItemProps {
  item: CartModel;
}

export default function CartItem({ item: { product, size, color, quantity } }: CartItemProps) {
  return (
    <div className="py-4 px-2 rounded overflow-hidden border-b flex items-center justify-between">
      <div className="flex">
        <Link href={`/products/${product.id}`} className="mr-3 h-[83px] w-[83px] min-w-[83px]">
          <Image
            height={83}
            width={83}
            sizes="(max-width: 83px) 100vw, (max-width: 83px)"
            src={product?.images[0]?.path}
            alt={product?.images[0]?.name}
          />
        </Link>
        <div>
          <Link
            href={`/products/${product._id}`}
            className="hover:text-pink-1 text-sm line-clamp-2 transition ease-in-out duration-300"
          >
            {product.title}
          </Link>
          <p className="text-sub-title text-xs">{quantity}</p>
        </div>
      </div>
      <div>{getSymbolCurrency(Number(quantity * Number(product.price)))}</div>
    </div>
  );
}

import { QuantityField } from '@components/Shared/Common/QuantityField';
import { getSymbolCurrency } from '@utils/common';
import { addToCart } from 'app/Cart/cartSlice';
import { ProductItem } from 'models';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

export interface ProductInfoProps {
  product: ProductItem;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const { name, price, shortDescription, salePrice } = product;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(addToCart({ id: product?.id, product, quantity }));
  };

  return (
    <div>
      <h4 className="text-blue-1 text-3xl">{name}</h4>

      <div className="my-4">
        <span className="text-pink-1 text-2xl">{getSymbolCurrency('EUR', price)}</span>
        {salePrice && (
          <span className="ml-2 text-sub-title text-xs line-through">
            {getSymbolCurrency('EUR', salePrice)}
          </span>
        )}
      </div>
      <div className="text-sub-title font-lato-light leading-7">{shortDescription}</div>
      <div className="mt-4">
        <span className="text-blue-1">Color</span>
      </div>
      <div className="mt-4">
        <span className="text-blue-1">Categories:</span>
      </div>
      <div className="mt-4">
        <span className="text-blue-1">Share:</span>
      </div>
      <div className="mt-4">
        <span className="text-blue-1">Quantity</span>
        <QuantityField
          onChange={setQuantity}
          value={quantity}
          name="quantity"
          // label="Quantity"
          disabled={false}
        />
      </div>
      <div className="flex items-center mt-2">
        <button
          onClick={onAddToCart}
          className="bg-pink-1 w-fit rounded px-12 py-2.5 text-base font-lato text-white hover:shadow-xl transition delay-100 ease-in-out duration-300"
        >
          Add To Cart
        </button>
        <span className="ml-4 cursor-pointer">
          <AiOutlineHeart size={22} />
        </span>
      </div>
    </div>
  );
}

import { QuantityField } from '@components/Shared/Common/QuantityField';
import { getSymbolCurrency } from '@utils/common';
import { addToCart } from 'app/Cart/cartSlice';
import { ProductModel } from 'models';
import useTranslation from 'next-translate/useTranslation';
import { memo, useState } from 'react';
import { AiFillStar, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai';
import { useDispatch } from 'react-redux';

export interface ProductInfoProps {
  product: ProductModel;
}
export const ProductInfo = memo(function ProductInfoMain({ product }: ProductInfoProps) {
  const { t } = useTranslation('products');
  const { _id, title, price, rating, images, slug, shortDescription, salePrice } = product;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const onAddToCart = () => {
    dispatch(
      addToCart({
        _id: product?._id,
        product: {
          _id,
          title,
          price,
          images,
        },
        quantity,
      })
    );
  };

  return (
    <div>
      <h4 className="text-gray-700 text-3xl">{title}</h4>

      <div className="flex mt-4 items-center">
        {new Array(5).fill('').map((_, index) =>
          Math.round(rating) <= index ? (
            <span key={`${rating}- ${index}`}>
              <AiOutlineStar size={20} color={'#b8b8b8'} />
            </span>
          ) : (
            <AiFillStar key={`${rating}- ${index}`} size={20} color={'#FDDA43'} />
          )
        )}
        <span className="ml-2 mt-[3px]">({rating}/5)</span>
      </div>
      <div className="my-4">
        <span className="text-pink-1 text-2xl">{getSymbolCurrency(price)}</span>
        {salePrice && (
          <span className="ml-2 text-xs line-through">{getSymbolCurrency(salePrice)}</span>
        )}
      </div>
      <div className="text-sub-title font-lato-light leading-7">{shortDescription}</div>
      {/* <div className="mt-4">
        <span className="text-blue-1">Color</span>
      </div>
      <div className="mt-4">
        <span className="text-blue-1">Categories:</span>
      </div> */}
      <div className="mt-4">
        <span className="text-blue-1">{t('share')}:</span>
      </div>
      <div className="mt-4">
        <span className="text-blue-1">{t('quantity')}</span>
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
          {t('add-to-cart')}
        </button>
        <span className="ml-4 cursor-pointer">
          <AiOutlineHeart size={22} />
        </span>
      </div>
    </div>
  );
});

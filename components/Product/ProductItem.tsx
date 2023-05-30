import { ISale } from '@components/Icons';
import { opacityVariant } from '@content/FramerMotionVariants';
import { getSymbolCurrency } from '@utils/index';
import { motion } from 'framer-motion';
import { ProductModel } from 'models';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineZoomIn } from 'react-icons/ai';
import Image from 'next/image';
import { EProductItemType } from './ProductItem.props';

export interface ProductItemProps {
  product: ProductModel;
  styleProductItem?: EProductItemType;
  className?: string;
}

const classProductItem = {
  [EProductItemType.PRIMARY]: {
    'group-icons': 'top-2',
    'bg-color': 'bg-pink-3',
    shadow: 'shadow-md hover:shadow-sm',
    img: '',
  },

  [EProductItemType.SECONDARY]: {
    'group-icons': 'bottom-2 flex-col',
    'bg-color': 'bg-grey-2',
    shadow: 'shadow-none hover:shadow-xl',
    img: '',
  },
  [EProductItemType.TRENDING]: {
    'group-icons': 'top-2',
    'bg-color': 'bg-pink-3',
    shadow: 'shadow-xl hover:shadow-none',
    img: 'm-2.5',
  },
};

export function ProductModel({
  product: { id, name, price, code, currency, thumbnail, colors, isSale },
  styleProductItem = EProductItemType.PRIMARY,
  className = '',
}: ProductItemProps) {
  return (
    <motion.div
      variants={opacityVariant}
      viewport={{ once: true }}
      className={`${classProductItem[styleProductItem].shadow} ${className} group transition delay-100 ease-in-out duration-500`}
    >
      <div
        className={`flex relative justify-center items-center h-72 ${classProductItem[styleProductItem]['bg-color']} ${classProductItem[styleProductItem]?.img}`}
      >
        {/* Image product */}
        <Link href={`/products/${id}`}>
          {/* <img
            className="mx-auto scale-9 max-h-full group-hover:scale-110 delay-100 transition-transform duration-4000 ease-in-out"
            src={thumbnail[0]}
            alt="profile picture"
          /> */}
          <Image
            src={thumbnail[0]}
            fill
            alt={name}
            className="scale-[80%] drop-shadow-xl object-contain group-hover:scale-[90%] transition-transform duration-300 ease-in-out !py-2 "
          />
        </Link>

        {/* Image sale */}
        {isSale && (
          <div className="absolute top-1 left-1">
            <div className="relative">
              <ISale />

              <p className="text-white text-sm -rotate-[18deg] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Sale
              </p>
            </div>
          </div>
        )}

        {/* Group icons: cart, heart and zoom */}
        <div
          className={`${classProductItem[styleProductItem]['group-icons']} absolute z-20 left-2 flex items-center opacity-0 group-hover:opacity-100 transition delay-100 ease-in-out duration-300`}
        >
          <div className="flex justify-center mr-1 items-center rounded-full cursor-pointer h-8 w-8 hover:bg-grey-1">
            <AiOutlineShoppingCart color={'#2F1AC4'} size={17} />
          </div>
          <div className="flex justify-center items-center rounded-full cursor-pointer h-8 w-8 hover:bg-grey-1">
            <AiOutlineHeart color={'#1389FF'} size={17} />
          </div>
          <div className="flex justify-center items-center rounded-full cursor-pointer h-8 w-8 hover:bg-grey-1">
            <AiOutlineZoomIn color={'#1389FF'} size={17} />
          </div>
        </div>

        {/* Button view detail */}
        {styleProductItem === EProductItemType.PRIMARY && (
          <Link
            href={`/product/${id}`}
            className="absolute bottom-1 right-1/2 transform translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition delay-100 ease-in-out duration-500 rounded-sm bg-green-1 flex-none px-4 py-2 text-lg font-semibold text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
          >
            View Details
          </Link>
        )}
      </div>
      {/** Content of Product: 2 style
       *  1. style Primary
       *  2. style Secondary
       */}
      {styleProductItem === EProductItemType.PRIMARY && (
        <div className="text-center p-4 transition delay-100 ease-in-out duration-500">
          <Link
            href={`/products/${id}`}
            className="transition delay-100 ease-in-out duration-500 text-pink-1 font-lato font-bold"
          >
            {name}
          </Link>
          <div className="flex items-center justify-center my-2">
            {colors.map((color, i) => (
              <div
                key={`${color}-${i}`}
                className={`bg-[${color}] h-[4px] w-[14px] rounded-sm mx-[2px]`}
              ></div>
            ))}
          </div>
          <div className="transition delay-100 ease-in-out duration-500 pt-1 text-blue-1 text-sm">
            {code}
          </div>
          <div className="transition delay-100 ease-in-out duration-500 mt-1 text-blue-1 text-sm font-lato">
            {getSymbolCurrency(currency, price)}
          </div>
        </div>
      )}

      {styleProductItem === EProductItemType.SECONDARY && (
        <div className="py-3 px-1 flex relative justify-between">
          <div className="tracking-wide transition delay-100 ease-in-out duration-500 text-blue-1">
            {name}
          </div>
          <div>
            <span className="text-sm text-blue-1">{getSymbolCurrency(currency, price)}</span>
            <span className="mx-2 text-xs text-red-1 line-through">
              {getSymbolCurrency(currency, price)}
            </span>
          </div>
        </div>
      )}

      {styleProductItem === EProductItemType.TRENDING && (
        <div className="mt-[19px] mb-8 text-center">
          <div className="tracking-wide text-blue-1 font-lato font-bold">{name}</div>
          <div className="mt-2">
            <span className="text-sm text-blue-1">{getSymbolCurrency(currency, price)}</span>
            <span className="mx-2 text-xs text-blue-1 line-through opacity-30">
              {getSymbolCurrency(currency, price)}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function ProductItemSecondary({
  product: {
    _id,
    name,
    price,
    code,
    currency,
    colors,
    isSale,
    shortDescription,
    description,
    salePrice,
    images,
    title,
    discount_percentage,
    thumbnail,
    rating,
    slug,
  },
  styleProductItem = EProductItemType.PRIMARY,
  className = '',
}: ProductItemProps) {
  return (
    <motion.div
      variants={opacityVariant}
      viewport={{ once: true }}
      className={`min-h-[230px] max-h-[230px] flex bg-white group transition delay-100 ease-in-out duration-500 flex justify-center items-center mb-3 p-2`}
    >
      {/* Image product */}
      <Link
        href={`/products/${_id}/${slug}`}
        className="relative block max-w-[214px] min-w-[214px] h-[214px]"
      >
        {/* <img
          className="mx-auto scale-9 max-h-full max-w-full max-h-[214px]"
          src={thumbnail}
          alt="profile picture"
        /> */}
        <Image
          src={`${process.env.HOST_URL}${images[0].path}`}
          fill
          alt={name}
          className="scale-[80%] object-contain group-hover:scale-[90%] transition-transform duration-300 ease-in-out !py-2 "
        />
      </Link>
      <div className="flex-1 px-2 ml-7 transition delay-100 ease-in-out duration-500">
        {/* Name Product */}
        <Link
          href={`/products/${_id}/${slug}`}
          className="transition delay-100 ease-in-out duration-500 text-pink-1 font-lato font-bold"
        >
          {name || title}
        </Link>
        {/* Colors */}
        <div>
          {colors?.map((color, i) => (
            <span
              key={`${color}-${i}`}
              className={`inline-block bg-[${color}] h-[11px] w-[11px] rounded-full mr-2`}
            ></span>
          ))}
        </div>
        {/* Price */}
        <div className="transition delay-100 ease-in-out duration-500 mt-1 text-blue-1 text-sm font-lato">
          <span className="text-sub-title-1 text-sm">
            {getSymbolCurrency(
              'EUR',
              Number(price) - Number(price) * Number(discount_percentage / 100)
            )}
          </span>
          {/* {(salePrice || discountPercentage) && ( */}
          <span className="ml-2 text-sub-title text-xs line-through">
            {getSymbolCurrency('EUR', price)}
          </span>
        </div>
        <div className="text-sm text-sub-title mt-2">{rating}/5</div>
        {/* ShortDescription */}
        <div className="line-clamp-2 transition delay-100 ease-in-out duration-500 mt-2 text-sub-title-3 text-sm">
          {shortDescription || description}
        </div>

        <div className="flex items-center mt-4">
          <div className="flex justify-center mr-1 items-center rounded-full cursor-pointer mr-5">
            <AiOutlineShoppingCart color={'#2F1AC4'} size={17} />
          </div>
          <div className="flex justify-center items-center rounded-full cursor-pointer mr-5">
            <AiOutlineHeart color={'#1389FF'} size={17} />
          </div>
          <div className="flex justify-center items-center rounded-full cursor-pointer mr-5">
            <AiOutlineZoomIn color={'#1389FF'} size={17} />
          </div>
        </div>
      </div>

      {/* Image sale */}
      {/* {isSale && (
          <div className="absolute top-1 left-1">
            <div className="relative">
              <ISale />

              <p className="text-white text-sm -rotate-[18deg] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Sale
              </p>
            </div>
          </div>
        )} */}

      {/* Group icons: cart, heart and zoom */}
      {/* <div
          className={`${classProductItem[styleProductItem]['group-icons']} absolute z-20 left-2 flex items-center opacity-0 group-hover:opacity-100 transition delay-100 ease-in-out duration-300`}
        >
          <div className="flex justify-center mr-1 items-center rounded-full cursor-pointer h-8 w-8 hover:bg-grey-1">
            <AiOutlineShoppingCart color={'#2F1AC4'} size={17} />
          </div>
          <div className="flex justify-center items-center rounded-full cursor-pointer h-8 w-8 hover:bg-grey-1">
            <AiOutlineHeart color={'#1389FF'} size={17} />
          </div>
          <div className="flex justify-center items-center rounded-full cursor-pointer h-8 w-8 hover:bg-grey-1">
            <AiOutlineZoomIn color={'#1389FF'} size={17} />
          </div>
        </div> */}
      {/** Content of Product: 2 style
       *  1. style Primary
       *  2. style Secondary
       */}
      {/* {styleProductItem === EProductItemType.PRIMARY && (
        <div className="text-center p-4 group-hover:bg-blue-3 transition delay-100 ease-in-out duration-500">
          <Link
            href={`/product/${id}`}
            className="transition delay-100 ease-in-out duration-500 text-pink-1 font-lato font-bold group-hover:text-white"
          >
            {name}
          </Link>
          <div className="flex items-center justify-center my-2">
            {colors.map((color, i) => (
              <div
                key={`${color}-${i}`}
                className={`bg-[${color}] h-[4px] w-[14px] rounded-sm mx-[2px]`}
              ></div>
            ))}
          </div>
          <div className="transition delay-100 ease-in-out duration-500 pt-1 text-blue-1 group-hover:text-white text-sm">
            {code}
          </div>
          <div className="transition delay-100 ease-in-out duration-500 mt-1 text-blue-1 group-hover:text-white text-sm font-lato">
            {getSymbolCurrency(currency, price)}
          </div>
        </div>
      )}

      {styleProductItem === EProductItemType.SECONDARY && (
        <div className="py-3 px-1 flex relative justify-between">
          <div className="tracking-wide transition delay-100 ease-in-out duration-500 text-blue-1">
            {name}
          </div>
          <div>
            <span className="text-sm text-blue-1">{getSymbolCurrency(currency, price)}</span>
            <span className="mx-2 text-xs text-red-1 line-through">
              {getSymbolCurrency(currency, price)}
            </span>
          </div>
        </div>
      )}

      {styleProductItem === EProductItemType.TRENDING && (
        <div className="mt-[19px] mb-8 text-center">
          <div className="tracking-wide text-blue-1 font-lato font-bold">{name}</div>
          <div className="mt-2">
            <span className="text-sm text-blue-1">{getSymbolCurrency(currency, price)}</span>
            <span className="mx-2 text-xs text-blue-1 line-through opacity-30">
              {getSymbolCurrency(currency, price)}
            </span>
          </div>
        </div>
      )} */}
    </motion.div>
  );
}

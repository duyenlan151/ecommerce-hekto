import { ISale } from '@components/Icons';
import { opacityVariant } from '@content/FramerMotionVariants';
import { getSymbolCurrency } from '@utils/index';
import { motion } from 'framer-motion';
import { ProductModel } from 'models';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineHeart, AiOutlineShoppingCart, AiOutlineZoomIn } from 'react-icons/ai';
import { EProductItemType } from '../ProductItem.props';

export interface ProductItemProps {
  product: ProductModel;
  styleProductItem?: EProductItemType;
  className?: string;
}

const classProductItem = {
  [EProductItemType.PRIMARY]: {
    'group-icons': 'top-2',
    'bg-color': 'bg-pink-3',
    shadow: 'shadow',
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

export function ProductItem({
  product: { _id, title, price, code, images, isSale, slug },
  styleProductItem = EProductItemType.PRIMARY,
  className = '',
}: ProductItemProps) {
  const router = useRouter();
  return (
    <motion.div
      variants={opacityVariant}
      viewport={{ once: true }}
      className={`${classProductItem[styleProductItem].shadow} ${className} group transition delay-100 ease-in-out duration-500`}
    >
      <div
        className={`relative block aspect-square
        ${classProductItem[styleProductItem]?.img}`}
      >
        {/* Image product */}
        <Link href={`/products/${_id}/${slug}`} className="relative block w-full h-full">
          <Image
            src={images && images[0]?.path}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt={images && images[0]?.name}
            className="object-contain p-8 transition-transform duration-300 ease-in-out !py-2 "
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
          <div
            onClick={() => router.push(`/products/${_id}/${slug}`)}
            className="flex justify-center mr-1 items-center rounded-full cursor-pointer h-8 w-8 hover:bg-grey-1"
          >
            <AiOutlineShoppingCart color={'#2F1AC4'} size={17} />
          </div>
          <div
            onClick={() => router.push(`/products/${_id}/${slug}`)}
            className="flex justify-center items-center rounded-full cursor-pointer h-8 w-8 hover:bg-grey-1"
          >
            <AiOutlineHeart color={'#1389FF'} size={17} />
          </div>
          <div
            onClick={() => router.push(`/products/${_id}/${slug}`)}
            className="flex justify-center items-center rounded-full cursor-pointer h-8 w-8 hover:bg-grey-1"
          >
            <AiOutlineZoomIn color={'#1389FF'} size={17} />
          </div>
        </div>
      </div>
      {/** Content of Product: 2 style
       *  1. style Primary
       *  2. style Secondary
       */}
      {styleProductItem === EProductItemType.PRIMARY && (
        <div className="text-center p-4 transition delay-100 ease-in-out duration-500">
          <Link
            href={`/products/${_id}/${slug}`}
            className="transition line-clamp-1 delay-100 ease-in-out duration-500 text-gray-600 font-lato font-bold"
          >
            {title}
          </Link>
          <div className="transition delay-100 ease-in-out duration-500 pt-1 text-blue-1 text-sm">
            {code}
          </div>
          <div className="transition delay-100 ease-in-out duration-500 mt-1 text-blue-1 text-sm font-lato">
            {getSymbolCurrency(price)}
          </div>
        </div>
      )}

      {styleProductItem === EProductItemType.SECONDARY && (
        <div className="py-3 px-1 flex relative justify-between">
          <div className="tracking-wide transition delay-100 ease-in-out duration-500 text-blue-1">
            {title}
          </div>
          <div>
            <span className="text-sm text-blue-1">{getSymbolCurrency(price)}</span>
            <span className="mx-2 text-xs text-red-1 line-through">{getSymbolCurrency(price)}</span>
          </div>
        </div>
      )}

      {styleProductItem === EProductItemType.TRENDING && (
        <div className="mt-[19px] mb-8 text-center">
          <div className="tracking-wide text-blue-1 font-lato font-bold">{title}</div>
          <div className="mt-2">
            <span className="text-sm text-blue-1">{getSymbolCurrency(price)}</span>
            <span className="mx-2 text-xs text-blue-1 line-through opacity-30">
              {getSymbolCurrency(price)}
            </span>
          </div>
        </div>
      )}
    </motion.div>
  );
}

export function ProductItemSecondary({
  product: { _id, name, price, shortDescription, description, images, title, rating, slug },
}: ProductItemProps) {
  const router = useRouter();
  return (
    <div
      className={`min-h-[230px] max-h-[230px] flex bg-white group transition delay-100 ease-in-out duration-500 flex justify-center items-center p-2`}
    >
      {/* Image product */}
      <Link
        href={`/products/${_id}/${slug}`}
        className="relative block max-w-[200px] lg:min-w-[200px] min-w-[150px] h-[200px]"
      >
        <Image
          fill
          loading="lazy"
          sizes="(max-width: 200px) 100vw, (max-width: 200px)"
          src={images && images[0]?.path}
          alt={(images && images[0]?.path) || name}
          className=" object-contain  transition-transform duration-300 ease-in-out !py-2 "
        />
      </Link>
      <div className="flex-1 px-2 transition delay-100 ease-in-out duration-500">
        {/* Name Product */}
        <Link
          href={`/products/${_id}/${slug}`}
          className="line-clamp-2 transition delay-100 ease-in-out duration-500 text-gray-600 font-lato font-bold"
        >
          {name || title}
        </Link>
        {/* Price */}
        <div className="transition delay-100 ease-in-out duration-500 mt-1 text-blue-1 text-sm font-lato">
          <span className="text-sub-title-1 text-sm">{getSymbolCurrency(Number(price))}</span>
          <span className="ml-2 text-sub-title text-xs line-through"></span>
        </div>
        <div className="text-sm text-sub-title mt-2">{rating}/5</div>
        {/* ShortDescription */}
        <div className="line-clamp-1 transition delay-100 ease-in-out duration-500 mt-2 text-sub-title-3 text-sm">
          {shortDescription || description}
        </div>
        {/* Group Icons */}
        <div className="flex items-center mt-4">
          <div
            onClick={() => router.push(`/products/${_id}/${slug}`)}
            className="flex justify-center items-center rounded-full cursor-pointer mr-5"
          >
            <AiOutlineShoppingCart color={'#2F1AC4'} size={17} />
          </div>
          <div className="flex justify-center items-center rounded-full cursor-pointer mr-5">
            <AiOutlineHeart color={'#1389FF'} size={17} />
          </div>
          <div
            onClick={() => router.push(`/products/${_id}/${slug}`)}
            className="flex justify-center items-center rounded-full cursor-pointer mr-5"
          >
            <AiOutlineZoomIn color={'#1389FF'} size={17} />
          </div>
        </div>
      </div>
    </div>
  );
}

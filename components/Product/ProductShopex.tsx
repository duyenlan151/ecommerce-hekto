import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import { ICashBack, IHoursSupport, IPremium, ITruckDelivery } from '@components/Icons';
import { FadeContainer } from '@content/FramerMotionVariants';
import { ShopexModel } from 'models';
import React from 'react';
import ProductShopexItem from './ProductShopexItem';

export interface IProductShopexProps {
  data?: ShopexModel[];
}

const dataDefault: ShopexModel[] = [
  {
    id: 1,
    title: '247-support',
    desc: 'lorem',
    icon: <ITruckDelivery />,
    imageUrl: '/images/shopex/image01.png',
  },
  {
    id: 2,
    title: '247-support',
    desc: 'lorem',
    icon: <ICashBack />,
    imageUrl: '/images/shopex/image02.png',
  },
  {
    id: 3,
    title: '247-support',
    desc: 'lorem',
    icon: <IPremium />,
    imageUrl: '/images/shopex/image03.png',
  },
  {
    id: 4,
    title: '247-support',
    desc: 'lorem',
    icon: <IHoursSupport />,
    imageUrl: '/images/shopex/image04.png',
  },
];

export default function ProductShopex({ data = dataDefault }: IProductShopexProps) {
  return (
    <AnimatedDiv
      variants={FadeContainer}
      className="grid justify-center items-center mx-auto gap-6 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 grid-flow-row"
    >
      {data.map((item) => (
        <ProductShopexItem key={item.id} item={item} />
      ))}
    </AnimatedDiv>
  );
}

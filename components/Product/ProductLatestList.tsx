import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import TabsList from '@components/Tabs/TabsList';
import { FadeContainer, popUpFromBottomForText } from '@content/FramerMotionVariants';
import { useState } from 'react';
import { ProductItem } from './ProductItem';
import { EProductItemType } from './ProductItem.props';

export interface ProductLatestListProps {}

export enum valueTabs {
  NEW_ARRIAL = 'new-arrial',
  BEST_SELLER = 'best-seller',
  FEATURED = 'featured',
  SPECIAL_OFFER = 'special-offer',
}

const tabs = [
  { id: 1, component: 'content of tab 1', title: 'New  Arrial', value: valueTabs.NEW_ARRIAL },
  { id: 2, component: 'content of tab 2', title: 'Best Seller', value: valueTabs.BEST_SELLER },
  { id: 3, component: 'content of tab 3', title: 'Featured', value: valueTabs.FEATURED },
  { id: 4, component: 'content of tab 4', title: 'Special Offer', value: valueTabs.SPECIAL_OFFER },
];

const dataProducts = {
  [valueTabs.NEW_ARRIAL]: [
    {
      id: 1,
      name: 'Comfort Handy Craft',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: [
        'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      ],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 2,
      name: 'Comfort Handy Craft 2',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/latest/image02.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
      isSale: true,
    },
    {
      id: 3,
      name: 'Comfort Handy Craft',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 4,
      name: 'Comfort Handy Craft',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/latest/image03.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 5,
      name: 'Comfort Handy Craft 6',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/latest/image04.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 6,
      name: 'Comfort Handy Craft 6',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/latest/image05.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
  ],
  [valueTabs.BEST_SELLER]: [
    {
      id: 1,
      name: 'Cantilever chair BEST_SELLER',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 2,
      name: 'Cantilever chair 2BEST_SELLER',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 3,
      name: 'Cantilever chair BEST_SELLER',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 4,
      name: 'Cantilever chair BEST_SELLER',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 5,
      name: 'Cantilever chair 6 BEST_SELLER',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 6,
      name: 'Cantilever chair 6',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
  ],
  [valueTabs.FEATURED]: [
    {
      id: 1,
      name: 'Cantilever chair',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 2,
      name: 'Cantilever chair 2',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 3,
      name: 'Cantilever chair',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 4,
      name: 'Cantilever chair',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 5,
      name: 'Cantilever chair 6',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 6,
      name: 'Cantilever chair 6',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
  ],
  [valueTabs.SPECIAL_OFFER]: [
    {
      id: 1,
      name: 'Cantilever chair',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 2,
      name: 'Cantilever chair 2',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 3,
      name: 'Cantilever chair',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 4,
      name: 'Cantilever chair',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 5,
      name: 'Cantilever chair 6',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
    {
      id: 6,
      name: 'Cantilever chair 6',
      price: '42',
      code: 'Code - Y523201',
      currency: 'EUR',
      thumbnail: ['/images/featured/image01.png'],
      colors: ['#05E6B7', '#F701A8', '#00009D'],
    },
  ],
};

export function ProductLatestList({}: ProductLatestListProps) {
  const [activeTab, setActiveTab] = useState(valueTabs.NEW_ARRIAL as string | number);

  const handleSetActivetab = (value: string | number) => {
    setActiveTab(value);
  };

  return (
    <AnimatedDiv variants={FadeContainer}>
      <TabsList activeTab={activeTab} tabs={tabs} setActiveTab={handleSetActivetab} />
      <AnimatedDiv
        variants={popUpFromBottomForText}
        className="grid justify-center items-center mx-auto gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row"
      >
        {dataProducts[activeTab].map((product) => (
          <ProductItem
            key={product.id}
            className="mb-20"
            product={product}
            styleProductItem={EProductItemType.SECONDARY}
          />
        ))}
      </AnimatedDiv>
    </AnimatedDiv>
  );
}

import ImagesGallary from '@components/Shared/ImagesGallary/ImagesGallary';
import { ProductItem } from 'models';
import React, { useState } from 'react';
import ProductDescription from './ProductDescription';
import ProductInfo from './ProductInfo';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export interface ProductDetailProps {
  product: ProductItem;
}

const images = {
  imageSmall: [
    'https://salt.tikicdn.com/cache/100x100/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg.webp',
    'https://salt.tikicdn.com/cache/200x280/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/100x100/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg.webp',
    'https://salt.tikicdn.com/cache/200x280/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/200x280/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
    'https://salt.tikicdn.com/cache/100x100/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg.webp',
    'https://salt.tikicdn.com/cache/200x280/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
    'https://salt.tikicdn.com/cache/200x280/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/200x280/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
    'https://salt.tikicdn.com/cache/100x100/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg.webp',
    'https://salt.tikicdn.com/cache/200x280/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/100x100/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg.webp',
    'https://salt.tikicdn.com/cache/200x280/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/200x280/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
    'https://salt.tikicdn.com/cache/100x100/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg.webp',
    'https://salt.tikicdn.com/cache/200x280/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
    'https://salt.tikicdn.com/cache/200x280/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/200x280/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
  ],
  imageLarge: [
    'https://salt.tikicdn.com/cache/w1200/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/ba/ce/09/c371c48a9200ecd015bac0a28b6e7c13.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/dd/73/6b/c1ad23cc3ebba0491653b7694ac1bdc2.jpg',
    'https://salt.tikicdn.com/cache/w1200/ts/product/fd/a0/48/06897ac57caa0723a41bf29236e443e3.jpg',
  ],
};

export default function ProductDetail({ product }: ProductDetailProps) {
  console.log('🚀 ~ file: ProductDetail.tsx:58 ~ ProductDetail ~ product:', product);
  return (
    <div className="container mx-auto lg:py-4 py-10 px-4">
      <div className="text-sub-title font-lato-light leading-7 mt-3">
        Cart/ Information/ Shipping/ Payment
      </div>
      <div className="flex lg:flex-nowrap flex-wrap justify-center mt-6 pb-12 border-b">
        <div className="lg:basis-1/2 basis-full max-w-full">
          <ImagesGallary images={product.images} />
        </div>
        <div className="lg:basis-1/2 basis-full lg:ml-20 lg:mt-0 mt-5 w-full justify-self-end">
          <ProductInfo product={product} />
        </div>
      </div>
      <div className="mt-12">
        <ProductDescription product={product} />
      </div>
    </div>
  );
}

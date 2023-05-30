import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import { FadeContainer } from '@content/FramerMotionVariants';
import { useState } from 'react';

export interface ProductLatestListProps {}

export enum valueTabs {
  NEW_ARRIAL = 'new-arrial',
  BEST_SELLER = 'best-seller',
  FEATURED = 'featured',
  SPECIAL_OFFER = 'special-offer',
}

export function ProductLatestList({}: ProductLatestListProps) {
  const [activeTab, setActiveTab] = useState(valueTabs.NEW_ARRIAL as string | number);

  const handleSetActivetab = (value: string | number) => {
    setActiveTab(value);
  };

  return (
    <AnimatedDiv variants={FadeContainer}>
      {/* <TabsList activeTab={activeTab} tabs={tabs} setActiveTab={handleSetActivetab} /> */}
      {/* <AnimatedDiv
        variants={popUpFromBottomForText}
        className="grid justify-center items-center mx-auto gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-flow-row"
      >
        {dataProducts[activeTab].map((product) => (
          <ProductModel
            key={product.id}
            className="mb-20"
            product={product}
            styleProductItem={EProductItemType.SECONDARY}
          />
        ))}
      </AnimatedDiv> */}
    </AnimatedDiv>
  );
}

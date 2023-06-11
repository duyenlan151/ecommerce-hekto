import { BoxSection } from '@components/Shared/Box';
import { ProductFeaturedList } from '@components/Product/ProductFeaturedList';
import ProductShopex from '@components/Product/ProductShopex';
import { ProductModel } from 'models';

export interface SectionProductsProps {
  data: ProductModel[];
}

export function SectionProducts({ data }: SectionProductsProps) {
  return (
    <section className="py-[110px] bg-white">
      <BoxSection title={'Featured Products'}>
        <ProductFeaturedList data={data} />
      </BoxSection>
      <BoxSection title={'What Shopex Offer!'}>
        <ProductShopex />
      </BoxSection>
    </section>
  );
}

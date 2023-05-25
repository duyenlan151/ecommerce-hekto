import { BoxSection } from '@components/Box';
import { ProductFeaturedList } from '@components/Product/ProductFeaturedList';
import { ProductLatestList } from '@components/Product/ProductLatestList';
import ProductShopex from '@components/Product/ProductShopex';

export interface SectionProductsProps {}

export default function SectionProducts({}: SectionProductsProps) {
  return (
    <section className="my-[129px]">
      <BoxSection title={'Featured Products'}>
        <ProductFeaturedList />
      </BoxSection>
      <BoxSection className="container mx-auto mt-10 lg:px-0 px-2" title={'Leatest Products'}>
        <ProductLatestList />
      </BoxSection>
      <BoxSection title={'What Shopex Offer!'}>
        <ProductShopex />
      </BoxSection>
    </section>
  );
}

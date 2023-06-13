import { BoxSection } from '@components/Shared/Box';
import { ProductFeaturedList } from '@components/Product/ProductFeaturedList';
import ProductShopex from '@components/Product/ProductShopex';
import { ProductModel } from 'models';
import useTranslation from 'next-translate/useTranslation';

export interface SectionProductsProps {
  data: ProductModel[];
}

export function SectionProducts({ data }: SectionProductsProps) {
  const { t } = useTranslation('header');
  return (
    <section className="py-[110px] bg-white">
      <BoxSection title={t('featured-products')}>
        <ProductFeaturedList data={data} />
      </BoxSection>
      <BoxSection title={t('shopex-products')}>
        <ProductShopex />
      </BoxSection>
    </section>
  );
}

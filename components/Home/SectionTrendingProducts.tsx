import { BoxSection, BoxTrending } from '@components/Shared/Box';
import { ProductTredingList } from '@components/Product/ProductTrendingList';

export interface SectionTrendingProps {}

export function SectionTrending(props: SectionTrendingProps) {
  return (
    <section className="py-[129px] bg-white">
      <BoxSection className="container mx-auto mt-10 lg:px-0 px-2" title={'Trending Products'}>
        <ProductTredingList />
        <div className="flex gap-6">
          <BoxTrending
            imgUrl="/images/trending/image01.png"
            className="flex-1"
            title="23% off in all products"
            bgColor="pink-200"
            buttonText="Shop Now"
          />
          <BoxTrending
            imgUrl="/images/trending/image02.png"
            className="flex-1"
            title="23% off in all products"
            bgColor="grey-1"
            buttonText="View Collection"
          />
          <div className="w-72">01</div>
        </div>
      </BoxSection>
    </section>
  );
}

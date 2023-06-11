import { BoxSection, BoxTrending } from '@components/Shared/Box';
import { ProductTredingList } from '@components/Product/ProductTrendingList';

export interface SectionTrendingProps {}

export function SectionTrending(props: SectionTrendingProps) {
  return (
    <section className="py-[110px] bg-white">
      <BoxSection
        className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8"
        title={'Trending Products'}
      >
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

import SectionClient from '@components/About/SectionClient';
import { BoxContent, BoxSection } from '@components/Box';
import { ICashBack, IHoursSupport, IPremium, ITruckDelivery } from '@components/Icons';
import ProductShopex from '@components/Product/ProductShopex';
import { ShopexModel } from 'models';
// import { dataFetures } from 'mocks';

const dataFetures: ShopexModel[] = [
  {
    id: 1,
    title: 'Free Delivery',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    icon: <ITruckDelivery />,
    imageUrl: '/images/shopex/image01.png',
  },
  {
    id: 2,
    title: '100% Cash Back',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    icon: <ICashBack />,
    imageUrl: '/images/shopex/image02.png',
  },
  {
    id: 3,
    title: 'Quality Product',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    icon: <IPremium />,
    imageUrl: '/images/shopex/image03.png',
  },
  {
    id: 4,
    title: '24/7 Support',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    icon: <IHoursSupport />,
    imageUrl: '/images/shopex/image04.png',
  },
];

const AboutPage = () => (
  <section className="lg:py-32 py-10 lg:px-0 px-4">
    <BoxContent
      imgUrl={'/images/box/about-us.png'}
      className="container"
      title={`Know About Our Ecomerce Business, History`}
      bgColor="bg-white"
    >
      <div className="font-lato text-violet-4 leading-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
        aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis.
        Accumsan faucibus vitae lobortis quis bibendum quam.
      </div>
      <button
        type="submit"
        className="rounded-sm bg-pink-1 flex-none mt-16 px-10 py-2.5 text-lg font-lato text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
      >
        Contact Us
      </button>
    </BoxContent>
    <BoxSection className="mt-32 container mx-auto" title={'Our Features'}>
      <ProductShopex data={dataFetures} />
    </BoxSection>
    <BoxSection className="bg-grey-1 py-24 mt-32" title={'Our Client Say!'}>
      <SectionClient />
    </BoxSection>
  </section>
);

export default AboutPage;

import { ICashBack, IHoursSupport, IPremium, ITruckDelivery } from '@components/Icons';
import { ShopexModel } from 'models';

export const dataFetures: ShopexModel[] = [
  {
    id: 1,
    title: '24/7 Support',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    icon: <ITruckDelivery />,
    imageUrl: '/images/shopex/image01.png',
  },
  {
    id: 2,
    title: '24/7 Support',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.',
    icon: <ICashBack />,
    imageUrl: '/images/shopex/image02.png',
  },
  {
    id: 3,
    title: '24/7 Support',
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

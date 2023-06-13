import { popUp } from '@content/FramerMotionVariants';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { ReactNode } from 'react';

export interface IProductShopexItemProps {
  item: {
    id: string | number;
    title: string;
    icon: ReactNode;
    desc: string;
    imageUrl: string;
  };
}

export default function ProductShopexItem({
  item: { id, title, icon, desc, imageUrl },
}: IProductShopexItemProps) {
  const { t } = useTranslation('header');
  return (
    <motion.div
      variants={popUp}
      className="relative group shadow-lg min-h-[320px] p-4 flex justify-center flex-col items-center text-center"
    >
      <div className="mx-auto">{icon}</div>
      <p className="text-xl text-blue-1 pt-[20px] pb-[15px]">{t(title)}</p>
      <p className="text-blue-2 opacity-30 font-lato leading-relaxed">{t(desc)}</p>
      <div className="absolute left-0 bottom-0 h-[2px] w-full transform !scale-x-0 group-hover:!scale-x-100 transition-width  origin-center delay-100 ease-in-out duration-500 bg-orange-1"></div>
    </motion.div>
  );
}

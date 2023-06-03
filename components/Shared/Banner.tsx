import { FadeContainer, headingFromLeft, opacityVariant } from '@content/FramerMotionVariants';
import { sliderContent } from '@utils/sample-data';
import { motion } from 'framer-motion';
import SwiperCommon from './Swiper/SwiperCommon';

export interface BannerProps {}

export function Banner({}: BannerProps) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={FadeContainer}
      viewport={{ once: true }}
      className="bg-pink-2 overflow-hidden"
    >
      <SwiperCommon images={sliderContent} navigation={true} />
    </motion.section>
  );
}

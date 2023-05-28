import { FadeContainer, headingFromLeft, opacityVariant } from '@content/FramerMotionVariants';
import { motion } from 'framer-motion';

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
      <div className="container mx-auto relative py-48 lg:px-0 px-2">
        <motion.img
          src="/images/shell-shaped.png"
          width={500}
          height={500}
          variants={FadeContainer}
          viewport={{ once: true }}
          className="absolute top-1/2 -right-12 transform -translate-y-1/2"
        />
        {/* <Image
          src="/images/shell-shaped.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="absolute top-1/2 -right-12 transform -translate-y-1/2"
        /> */}
        <motion.img
          variants={FadeContainer}
          viewport={{ once: true }}
          src="/images/image-32.png"
          width={387}
          height={387}
          alt="Picture of the author"
          className="absolute -left-72 top-0"
        />
        <motion.p
          className="text-pink-1 font-bold font-lato"
          variants={opacityVariant}
          viewport={{ once: true }}
        >
          Best Furniture For Your Castle....
        </motion.p>
        <motion.h1
          variants={headingFromLeft}
          viewport={{ once: true }}
          className="mt-2 text-3xl font-bold text-5xl max-w-2xl tracking-wider leading-[4rem]"
        >
          New Furniture Collection Trends in 2020
        </motion.h1>
        <motion.p
          variants={opacityVariant}
          viewport={{ once: true }}
          className="max-w-[560px] font-lato text-sub-title mt-2 mb-5 tracking-wide leading-7"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in
          phasellus non in justo.
        </motion.p>
        <motion.button
          variants={opacityVariant}
          viewport={{ once: true }}
          type="submit"
          className="rounded-sm bg-pink-1 flex-none px-10 py-2.5 text-lg font-semibold text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          Shop Now
        </motion.button>
      </div>
    </motion.section>
  );
}

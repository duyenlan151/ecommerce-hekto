import { BoxContent } from '@components/Box/BoxContent';
import AnimatedText from '@components/FramerMotion/AnimatedText';
import { popUpFromBottomForText } from '@content/FramerMotionVariants';
import { getSymbolCurrency } from '@utils/common';

export interface SectionUniqueProps {}

export default function SectionUnique(props: SectionUniqueProps) {
  return (
    <section className="overflow-hidden">
      <BoxContent
        imgUrl={'/images/box/Home.png'}
        className="container lg:py-1 py-10 lg:px-0 px-4"
        title={`Unique Features Of leatest & Trending Poducts`}
      >
        <div className="">
          <div>
            <div className="mb-3 flex items-baseline">
              <span className="inline-flex bg-pink-6 rounded-full h-[11px] w-[11px] mr-3"></span>
              <AnimatedText variants={popUpFromBottomForText} className="font-lato text-violet-4">
                All frames constructed with hardwood solids and laminates
              </AnimatedText>
            </div>
            <div className="mb-3 flex items-baseline">
              <span className="inline-flex bg-blue-4 rounded-full h-[11px] w-[11px] mr-3"></span>
              <AnimatedText variants={popUpFromBottomForText} className="font-lato text-violet-4">
                Reinforced with double wood dowels, glue, screw - nails corner blocks and machine
                nails
              </AnimatedText>
            </div>
            <div className="mb-3 flex items-baseline">
              <span className="inline-flex bg-green-4 rounded-full h-[11px] w-[11px] mr-3"></span>
              <AnimatedText variants={popUpFromBottomForText} className="font-lato text-violet-4">
                Arms, backs and seats are structurally reinforced
              </AnimatedText>
            </div>
          </div>
          <div className="mx-auto w-fit mt-11">
            <p className="text-blue-1">B&B Italian Sofa </p>
            <p className="font-lato text-blue-1">{getSymbolCurrency('EUR', '32')}</p>
          </div>
        </div>
      </BoxContent>
    </section>
  );
}

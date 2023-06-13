import { BoxContent } from '@components/Shared/Box/BoxContent';
import AnimatedText from '@components/FramerMotion/AnimatedText';
import { popUpFromBottomForText } from '@content/FramerMotionVariants';
import { getSymbolCurrency } from '@utils/common';
import useTranslation from 'next-translate/useTranslation';

export interface SectionUniqueProps {}

export function SectionUnique(props: SectionUniqueProps) {
  const { t } = useTranslation('header');
  return (
    <section className="overflow-hidden">
      <BoxContent
        imgUrl={'/images/box/Home.png'}
        className="container mx-auto lg:px-0 px-5 max-w-screen-lg py-5 lg:py-8"
        title={t(`unique.title`)}
      >
        <div className="">
          <div>
            <div className="mb-3 flex items-baseline">
              <span className="inline-flex bg-pink-4 rounded-full h-[11px] min-w-[11px] mr-3"></span>
              <AnimatedText variants={popUpFromBottomForText} className="font-lato text-violet-4">
                {/* All frames constructed with hardwood solids and laminates */}
                {t(`unique.item-01`)}
              </AnimatedText>
            </div>
            <div className="mb-3 flex items-baseline">
              <span className="inline-flex bg-blue-4 rounded-full h-[11px] min-w-[11px] mr-3"></span>
              <AnimatedText variants={popUpFromBottomForText} className="font-lato text-violet-4">
                {/* Reinforced with double wood dowels, glue, screw - nails corner blocks and machine
                nails */}
                {t(`unique.item-02`)}
              </AnimatedText>
            </div>
            <div className="mb-3 flex items-baseline">
              <span className="inline-flex bg-green-4 rounded-full h-[11px] min-w-[11px] mr-3"></span>
              <AnimatedText variants={popUpFromBottomForText} className="font-lato text-violet-4">
                {/* Arms, backs and seats are structurally reinforced */}
                {t(`unique.item-03`)}
              </AnimatedText>
            </div>
          </div>
          <div className="mx-auto w-fit mt-11">
            <p className="text-blue-1">B&B Italian Sofa </p>
            <p className="font-lato text-blue-1">{getSymbolCurrency('32')}</p>
          </div>
        </div>
      </BoxContent>
    </section>
  );
}

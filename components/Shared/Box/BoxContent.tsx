import AnimatedDiv from '@components/FramerMotion/AnimatedDiv';
import AnimatedHeading from '@components/FramerMotion/AnimatedHeading';
import { FadeContainer, headingFromLeft } from '@content/FramerMotionVariants';
import * as React from 'react';

export interface BoxContentProps {
  title?: string;
  className?: string;
  children?: React.ReactNode;
  imgUrl?: string;
  col?: number;
  bgColor?: string;
}

export function BoxContent({
  title = 'Featured Products',
  className = 'container mx-auto lg:px-0 px-4',
  children,
  col = 6,
  imgUrl = '',
  bgColor = 'bg-violet-3',
}: BoxContentProps) {
  return (
    <AnimatedDiv variants={FadeContainer} className={bgColor}>
      <div
        className={`${className} relative grid justify-center items-center mx-auto gap-6 lg:grid-cols-2 xs:grid-cols-1 grid-flow-row`}
      >
        <div>
          {imgUrl && (
            <div className="">
              <img src={imgUrl} alt={title} />
            </div>
          )}
        </div>
        <div>
          <AnimatedHeading
            variants={headingFromLeft}
            className="text-blue-2 text-[35px] font-bold mb-[29px] tracking-wide leading-[46px]"
          >
            {title}
          </AnimatedHeading>
          {children}
        </div>
      </div>
    </AnimatedDiv>
  );
}

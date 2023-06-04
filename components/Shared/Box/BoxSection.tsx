import AnimatedHeading from '@components/FramerMotion/AnimatedHeading';
import { popUpFromBottomForText } from '@content/FramerMotionVariants';
import * as React from 'react';

export interface BoxSectionProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export function BoxSection({
  title = 'Featured Products',
  className = 'container mx-auto lg:px-0 px-4',
  children,
}: BoxSectionProps) {
  return (
    <div className={`${className} `}>
      <AnimatedHeading
        variants={popUpFromBottomForText}
        className="text-center text-blue-2 text-5xl font-bold mb-12 tracking-wide"
      >
        {title}
      </AnimatedHeading>
      {children}
    </div>
  );
}

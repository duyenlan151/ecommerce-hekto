import AnimatedHeading from '@components/FramerMotion/AnimatedHeading';
import { popUpFromBottomForText } from '@content/FramerMotionVariants';
import React from 'react';

export interface BoxSectionProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
}

export function BoxSection({
  title = 'Featured Products',
  className = 'container mx-auto lg:px-0 px-5 max-w-screen-lg py-5 lg:py-8',
  children,
}: BoxSectionProps) {
  return (
    <div className={`${className} `}>
      <AnimatedHeading
        variants={popUpFromBottomForText}
        className="text-center text-blue-2 lg:text-5xl md:lg:text-4xl text-3xl font-bold mb-12 tracking-wide"
      >
        {title}
      </AnimatedHeading>
      {children}
    </div>
  );
}

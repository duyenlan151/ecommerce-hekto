import React from 'react';

export interface ICirlceCommonProps {
  bgColor?: string;
  sizeH?: TypeHCircle;
  sizeW?: TypeWCircle;
  className?: string;
}

export type TypeHCircle = 'h-circle-md' | 'h-circle-sm';
export type TypeWCircle = 'min-w-circle-md' | 'min-w-circle-sm';

export function ICirlceCommon({
  bgColor = 'bg-[#5726DF]',
  sizeH = 'h-circle-md',
  sizeW = 'min-w-circle-md',
  className = '',
}: ICirlceCommonProps) {
  return (
    <span
      className={`${className} ${sizeH} ${sizeW} ${bgColor} inline-block rounded rounded-full`}
    ></span>
  );
}

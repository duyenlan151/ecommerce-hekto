import React from 'react';

export interface BoxTrendingProps {
  title: string;
  className?: string;
  children?: React.ReactNode;
  bgColor?: string;
  buttonText?: string;
  imgUrl: string;
}

export function BoxTrending({
  title = 'Featured Products',
  className = 'container lg:px-0 px-2',
  children,
  bgColor = '',
  buttonText = '',
  imgUrl,
}: BoxTrendingProps) {
  return (
    <div className={`${className} bg-${bgColor} p-6`}>
      <h4 className="text-blue-2 text-2xl font-bold tracking-wide">{title}</h4>
      <button className="text-pink-1 border-b border-pink-1 leading-4 mt-2.5">{buttonText}</button>
      <div>
        <img className="ml-auto text-right" src={imgUrl} alt={title} />
      </div>
      {children}
    </div>
  );
}

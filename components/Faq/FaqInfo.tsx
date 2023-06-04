import React from 'react';

export interface FAQInfoProps {}

const data = [
  {
    id: 1,
    title: 'Eu dictumst cum at sed euismood condimentum?',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
  },
  {
    id: 2,
    title: 'Magna bibendum est fermentum eros.',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
  },
  {
    id: 3,
    title: 'Odio muskana hak eris conseekin sceleton?',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
  },
  {
    id: 4,
    title: 'Elit id blandit sabara boi velit gua mara?',
    decs: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt sed tristique mollis vitae, consequat gravida sagittis.',
  },
];

export default function FAQInfo(props: FAQInfoProps) {
  return (
    <div>
      <h4 className="text-blue-1 text-4xl lg:mb-16 mb-10 font-bold">Generel Information</h4>
      {data.map((info) => (
        <div className="lg:mb-10 mb-6" key={info.id}>
          <h5 className="text-blue-1 font-[17px]">{info.title}</h5>
          <p className="lg:mt-4 mt-1 text-sub-title-2 font-lato-light leading-8">{info.decs}</p>
        </div>
      ))}
    </div>
  );
}

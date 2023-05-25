import { IDate, IPencil } from '@components/Icons';
import { BlogModel } from 'models';
import * as React from 'react';

export interface IBlogProps {
  blog: BlogModel;
}

export default function Blog({ blog: { title, desc, thumbnail, author, date } }: IBlogProps) {
  return (
    <div
      className={`shadow-xl hover:shadow-none group transition delay-100 ease-in-out duration-500`}
    >
      {/* Image blog */}
      <div
        className={`flex justify-center rounded-md overflow-hidden relative justify-center items-center`}
      >
        <img className="mx-auto scale-1 w-full" src={thumbnail[0]} alt="profile picture" />
      </div>
      {/* Body content */}
      <div className="p-3.5">
        {/* Heading */}
        <div className="flex lg:flex-none flex-wrap items-center mb-2">
          <div className="flex items-center pr-7">
            <IPencil />
            <span className="ml-2 text-blue-1 text-sm">{author}</span>
          </div>
          <div className="flex items-center">
            <IDate />
            <span className="ml-2 text-blue-1 text-sm">{date}</span>
          </div>
        </div>
        <h4 className="tracking-normal text-lg text-blue-1 py-3 font-extrabold group-hover:text-pink-1 transition delay-100 ease-in-out duration-200">
          {title}
        </h4>
        {/* Description */}
        <p className="text-grey-3 font-lato-light font-bold tracking-normal">{desc}</p>
        {/* Button read more */}
        <button className="relative mt-7 mb-3 text-blue-1 leading-4 group-hover:text-pink-1 transition delay-100 ease-in-out duration-300">
          Read More
          <span className="absolute left-0 -bottom-[2px] h-[1px] w-0 group-hover:w-full bg-pink-1 transition-width delay-100 ease-in-out duration-200"></span>
        </button>
      </div>
    </div>
  );
}

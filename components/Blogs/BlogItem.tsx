import { IDate, IPencil } from '@components/Icons';
import { BlogModel } from 'models';
import React from 'react';
import Image from 'next/image';
export interface IBlogProps {
  blog: BlogModel;
}

export default function Blog({ blog: { title, desc, thumbnail, author, date } }: IBlogProps) {
  return (
    <div
      className={`shadow-xl overflow-hidden lg:max-w-full mb-6 max-w-[90%] mx-auto hover:shadow-none group transition delay-100 ease-in-out duration-500`}
    >
      {/* Image blog */}
      <div
        className={`relative lg:w-[400px] max-w-full w-full h-[250px] flex justify-center rounded-md overflow-hidden relative justify-center items-center`}
      >
        <Image
          src={thumbnail[0]}
          sizes="(max-width: 500px) 100vw, (max-width: 500px)"
          fill
          loading="lazy"
          alt={thumbnail[0]}
          className="object-cover object-center absolute "
        />
        {/* <img className="mx-auto scale-1 w-full" src={thumbnail[0]} alt="profile picture" /> */}
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
        <p className="tracking-normal text-lg text-blue-1 py-3 font-extrabold group-hover:text-pink-1 transition delay-100 ease-in-out duration-200">
          {title}
        </p>
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

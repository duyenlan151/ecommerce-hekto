import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <div className="md:flex hidden items-center justify-between bg-white py-4 lg:px-0 px-2 border border-b border-primary">
      <div className="flex items-center justify-between container mx-auto">
        <div className="md:flex items-center ">
          <h1 className="text-4xl font-bold mr-20">Hekto</h1>
          {/* <nav className=""> */}
          <Link className="mx-3 text-base" href="/">
            Home
          </Link>
          <Link className="mx-3 text-base" href="/products">
            Products
          </Link>
          <Link className="mx-3 text-base" href="/blog">
            Blog
          </Link>
          {/* <Link className="mx-3 text-base" href="/shop">
            Shop
          </Link> */}
          <Link className="mx-3 text-base" href="/contact">
            Contact
          </Link>
          {/* </nav> */}
        </div>

        {/* Input */}
        {/* <div className="lg:flex max-w-md hidden">
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="border ouline-none border-violet-2 w-96 flex-auto bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6"
            placeholder="Search"
          />
          <button
            type="submit"
            className="bg-pink-1 flex-none px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
          >
            <AiOutlineSearch size={22} />
          </button>
        </div> */}
      </div>
    </div>
  );
}

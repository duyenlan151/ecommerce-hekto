import Link from 'next/link';
import * as React from 'react';
import { InputField } from './Common';
import { IFacebook, IInstagram, ITwitter } from '../Icons';

export interface FooterProps {}

const dataFooter = {
  Categories: [
    'Laptops & Computers',
    'Cameras & Photography',
    'Smart Phones & Tablets',
    'Video Games & Consoles',
    'Waterproof Headphones',
  ],
  'Customer Care': ['My Account', 'Discount', 'Returns', 'Orders History', 'Order Tracking'],
  Pages: [
    'Blog',
    'Browse the Shop',
    'Category',
    'Pre-Built Pages',
    'Visual Composer Elements',
    'WooCommerce Pages',
  ],
};

export function Footer({}: FooterProps) {
  return (
    <footer>
      <div className="bg-grey-1 py-24 lg:px-0 px-2">
        <div className="container mx-auto">
          <div className="flex lg:flex-nowrap flex-wrap lg:gap-4">
            <div className="lg:w-2/5 md:w-1/2 w-full lg:pr-24">
              <h4 className="text-4xl font-bold">Hekto</h4>

              {/* Input Sing up */}
              <form className="max-w-[90%] bg-white flex items-center justify-between p-[3px] h-[44px] rounded my-6">
                {/* <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="h-full border-transparent focus:border-transparent focus:ring-0 !outline-none flex-auto bg-white/5 px-3.5 py-2 text-black sm:text-sm sm:leading-6"
                  placeholder="Enter Email Address"
                /> */}
                <InputField
                  required
                  placeholder="Enter Email Address"
                  className={
                    'h-full border-transparent focus:border-transparent focus:ring-0 !outline-none flex-auto bg-white/5 px-3.5 py-2 text-black sm:text-sm sm:leading-6'
                  }
                />
                <button
                  type="submit"
                  className="font-lato bg-pink-1 flex-none px-7 h-full rounded text-sm text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
                >
                  Sign Up
                </button>
              </form>
              <div>
                <p className="font-lato-light font-bold text-sub-title">Contact Info</p>
                <p className="font-lato-light font-bold text-sub-title">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
            </div>
            {Object.keys(dataFooter).map((key, i) => (
              <div key={`key-${i}`} className="lg:w-1/5 md:w-1/2 w-full">
                <h4 className="text-xl mb-10">{key}</h4>
                {Array.from(dataFooter[key]).map((item, i) => (
                  <Link
                    key={`item-${i}`}
                    className="block font-lato-light text-sub-title mb-5"
                    href="/"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-violet-5 py-4 lg:px-0 px-2 flex justify-between">
        <div className="container mx-auto flex justify-between">
          <div className="text-grey-4 font-lato">©Webecy - All Rights Reserved</div>
          <div className="flex">
            <Link href="/">
              <IFacebook />
            </Link>
            <Link href="/" className="pl-2.5">
              <IInstagram />
            </Link>
            <Link href="/" className="pl-2.5">
              <ITwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

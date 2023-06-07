import Link from 'next/link';
import React from 'react';
import { InputField } from './Common';
import { IFacebook, IInstagram, ITwitter } from '../Icons';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { dataFooter, schemaFooter } from './Footer.props';

export interface FooterProps {}

export function Footer({}: FooterProps) {
  const form = useForm({
    resolver: yupResolver(schemaFooter),
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = form;

  const onSubmit = (values) => {
    // console.log('🚀 ~ file: Footer.tsx:25 ~ onSubmit ~ values:', values);
  };
  return (
    <footer>
      <div className="bg-white py-24 lg:px-0 px-4">
        <div className="container mx-auto">
          <div className="flex lg:flex-row flex-col lg:gap-4">
            <div className="lg:w-2/5 w-full lg:pr-1 mb-4">
              <h4 className="text-4xl font-bold">Hekto</h4>

              {/* Input Sing up */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="max-w-[90%] bg-white border flex items-center justify-between h-[44px] rounded my-6"
              >
                <InputField
                  control={control}
                  name="emailSup"
                  required
                  placeholder="Enter Email Address"
                  className={
                    'h-full min-w-[60%] max-w-[95%] border-0 bg-transparent focus:ring-0 !outline-none flex-auto bg-white/5 px-1 text-black sm:text-sm sm:leading-6'
                  }
                />
                <button
                  type="submit"
                  className="font-lato bg-pink-600 flex-none px-7 h-full rounded text-sm text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
                >
                  Sign Up
                </button>
              </form>
              <div>
                <p className="font-lato text-[15px]">Contact Info</p>
                <p className="font-lato text-[15px]">
                  17 Princess Road, London, Greater London NW1 8JR, UK
                </p>
              </div>
            </div>
            {Object.keys(dataFooter).map((key, i) => (
              <div key={`key-${i}`} className="lg:w-1/5 sm:w-1/2 w-full">
                <h4 className="text-xl lg:mb-10 mb-4">{key}</h4>
                {Array.from(dataFooter[key]).map((item, i) => (
                  <Link key={`item-${i}`} className="block font-lato mb-5" href="/">
                    {item}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-4 lg:px-0 px-2 flex justify-between">
        <div className="container mx-auto flex justify-between">
          <div className="text-grey-300 font-lato">©Webecy - All Rights Reserved</div>
          <div className="flex">
            <Link href="https://www.facebook.com/" aria-label="https://www.facebook.com/">
              <IFacebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              aria-label="https://www.instagram.com/"
              className="pl-2.5"
            >
              <IInstagram />
            </Link>
            <Link href="https://twitter.com/" aria-label="https://twitter.com/" className="pl-2.5">
              <ITwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

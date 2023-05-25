import { InputField, TextareaField } from '@components/Common';
import { CheckBox } from '@components/Common';
import * as React from 'react';

export interface PaymenFormProps {}

const classNameInput = 'border-0 border-b !bg-grey-6 !px-0 mb-5';

export default function PaymenForm(props: PaymenFormProps) {
  return (
    <div className="z-10 bg-grey-6 lg:px-8 sm:px-4 px-3 lg:py-16 py-6 w-full">
      <a
        href="/"
        className="block underline text-right text-sub-title font-lato-light leading-7 mb-3"
      >
        Already have an account?
      </a>
      <form className="mt-9">
        <div>
          <h4 className="text-blue-1 text-lg">Contact Information</h4>
          <InputField
            className={classNameInput}
            required
            placeholder="Email or mobile phone number"
          />
          <CheckBox label="Keep me up to date on news and excluive offers" />
        </div>
        <div className="mt-20">
          <h4 className="text-blue-1 text-lg">Shipping address</h4>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
            <InputField className={classNameInput} required placeholder="First name (optional)" />
            <InputField type="email" className={classNameInput} required placeholder="Last name" />
          </div>
          <InputField className={classNameInput} required placeholder="Address" />
          <InputField
            className={classNameInput}
            required
            placeholder="Appaetnentment,suit,e.t.c (optinal)"
          />
          <InputField className={classNameInput} required placeholder="City" />
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
            <InputField className={classNameInput} required placeholder="Bangladesh" />
            <InputField
              type="email"
              className={classNameInput}
              required
              placeholder="Postal Code"
            />
          </div>
        </div>
        <button
          type="submit"
          className="mt-4 bg-pink-1 w-fit rounded-sm px-8 py-2.5 text-base font-lato-light text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          Continue Shipping
        </button>
      </form>
    </div>
  );
}

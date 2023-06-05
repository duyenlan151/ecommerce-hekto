import { shippingAddressSelector } from '@app/Cart/cartSelector';
import { updateFormValid, updateShippingAddress } from '@app/Cart/cartSlice';
import { InputField, TextareaField } from '@components/Shared/Common';
import { CheckBox } from '@components/Shared/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { isObjectEmpty } from 'constants/index';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { schemaPayment } from './Payment.props';

export interface PaymenFormProps {
  isTrigger: boolean;
}

const classNameWrapprer = '!border-0 !border-b !px-0 mb-6';
const classNameInput = '!border-0 !border-b !px-0 mt-4';

export default function PaymenForm({ isTrigger }: PaymenFormProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const shippingAddress = useSelector(shippingAddressSelector);
  const form = useForm({
    resolver: yupResolver(schemaPayment),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      ...shippingAddress,
    },
  });

  const { formState, control, trigger, watch } = form;

  useEffect(() => {
    const subscription = watch((values, { name, type }) => dispatch(updateShippingAddress(values)));
    return () => subscription.unsubscribe();
  }, [watch]);

  useEffect(() => {
    if (isTrigger) {
      trigger();
    }
  }, [isTrigger]);

  const continueShipping = () => {
    router.push('/products');
  };

  return (
    <div className="z-10 bg-white lg:px-10 px-5 lg:py-16 py-6 w-full">
      {/* <a
        href="/"
        className="block underline text-right text-sub-title font-lato-light leading-7 mb-3"
      >
        Already have an account?
      </a> */}
      <form className="mt-4">
        <div>
          <h4 className="text-blue-1 text-lg  mb-4">Contact Information</h4>
          <InputField
            control={control}
            name="email"
            className={classNameInput}
            placeholder="Email"
          />
          <CheckBox
            control={control}
            name=""
            label="Keep me up to date on news and excluive offers"
            className="rounded w-2 h-2"
          />
        </div>
        <div className="mt-20">
          <h4 className="text-blue-1 text-lg mb-4">Shipping address</h4>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
            <InputField
              control={control}
              name="firstName"
              className={classNameInput}
              placeholder="First name (optional)"
            />
            <InputField
              control={control}
              name="lastName"
              type="email"
              className={classNameInput}
              placeholder="Last name"
            />
          </div>
          <InputField
            control={control}
            name="address"
            className={classNameInput}
            placeholder="Address"
          />
          <InputField control={control} name="city" className={classNameInput} placeholder="City" />
          <div className="grid lg:grid-cols-2 xs:grid-cols-1 lg:gap-6 gap-4">
            <InputField
              control={control}
              name="country"
              className={classNameInput}
              placeholder="Bangladesh"
            />
            <InputField
              control={control}
              name="postalCode"
              className={classNameInput}
              placeholder="Postal Code"
            />
          </div>
        </div>
      </form>
      <button
        onClick={continueShipping}
        type="button"
        className="mt-10 mb-4 bg-pink-1 w-fit rounded-sm px-8 py-2.5 text-base font-lato-light text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
      >
        Continue Shipping
      </button>
    </div>
  );
}

import { shippingAddressSelector } from '@app/Cart/cartSelector';
import { updateFormValid, updateShippingAddress } from '@app/Cart/cartSlice';
import { InputField, TextareaField } from '@components/Shared/Common';
import { CheckBox } from '@components/Shared/Common';
import { yupResolver } from '@hookform/resolvers/yup';
import { isObjectEmpty } from 'constants/index';
import useTranslation from 'next-translate/useTranslation';
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
  const { t } = useTranslation();
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
          <h4 className="text-blue-1 text-lg  mb-4">{t('cart:payment.contact')}</h4>
          <InputField
            control={control}
            name="email"
            className={classNameInput}
            placeholder={t('form:email.placeholder')}
          />
          <CheckBox
            control={control}
            name="checkbox"
            label={t('cart:payment.checkbox')}
            className="rounded w-2 h-2"
          />
        </div>
        <div className="mt-20">
          <h4 className="text-blue-1 text-lg mb-4">{t('cart:payment.shipping-address')}</h4>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
            <InputField
              control={control}
              name="firstName"
              className={classNameInput}
              placeholder={t('form:first-name.placeholder')}
            />
            <InputField
              control={control}
              name="lastName"
              type="email"
              className={classNameInput}
              placeholder={t('form:last-name.placeholder')}
            />
          </div>
          <InputField
            control={control}
            name="address"
            className={classNameInput}
            placeholder={t('form:address.placeholder')}
          />
          <InputField
            control={control}
            name="city"
            className={classNameInput}
            placeholder={t('form:city.placeholder')}
          />
          <div className="grid lg:grid-cols-2 xs:grid-cols-1 lg:gap-6 gap-4">
            <InputField
              control={control}
              name="country"
              placeholder={t('form:country.placeholder')}
              className={classNameInput}
            />
            <InputField
              control={control}
              name="postalCode"
              className={classNameInput}
              placeholder={t('form:postal-code.placeholder')}
            />
          </div>
        </div>
      </form>
      <button
        onClick={continueShipping}
        type="button"
        className="mt-10 mb-4 bg-pink-1 w-fit rounded-sm px-8 py-2.5 text-base font-lato-light text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
      >
        {t('cart:continue-shopping')}
      </button>
    </div>
  );
}

import React, { useState } from 'react';
import { Controller, useController } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

export type TypeInput = 'text' | 'number';

interface QuantityFieldProps {
  name?: string;
  onChange?: (quanity: number) => void;
  onBlur?: () => void;
  value: number;
  className?: string;
  [name: string]: any;
}

export function QuantityField({
  name,
  onChange: externalOnChange,
  onBlur: externalOnBlur,
  value: externalValue,
  className,
  form,
  ...rest
}: QuantityFieldProps) {
  // const {
  //   control,
  //   setValue,
  //   formState: { errors },
  // } = form;

  return (
    // <Controller
    //   name={name}
    //   control={control}
    //   render={({
    //     field: { onChange, onBlur, value, name, ref },
    //     fieldState: { invalid, isTouched, isDirty, error },
    //   }) => (
    <div className="group flex items-stretch jutify-center relative py-3">
      <div
        className="px-2 border flex items-center border-r-0"
        onClick={() => {
          externalOnChange(Number(externalValue) > 1 ? Number(externalValue) - 1 : 1);
        }}
      >
        <AiOutlineMinus />
      </div>
      <input
        value={externalValue}
        className={`w-[45px] text-center placeholder:text-sub-title placeholder:font-lato-light peer border border-border-1 relative bg-white px-[2px] font-thin outline-none transition-all duration-200 ease-in-out ${className}`}
        {...rest}
      />
      <div
        className="px-2 border flex items-center border-r-0"
        onClick={() => externalOnChange(Number(externalValue) ? Number(externalValue) + 1 : 1)}
      >
        <AiOutlinePlus />
      </div>
    </div>
    //   )}
    // />
  );
}

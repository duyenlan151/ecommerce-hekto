import React, { useState } from 'react';
import { Controller, useController } from 'react-hook-form';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

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
  return (
    <div className="group flex items-stretch jutify-center relative py-3">
      <div
        className="px-2 border flex items-center"
        onClick={() => {
          externalOnChange &&
            externalOnChange(Number(externalValue) > 1 ? Number(externalValue) - 1 : 1);
        }}
      >
        <AiOutlineMinus />
      </div>
      <span className="bg-white px-3 py-2 border-t border-b">{externalValue}</span>
      <div
        className="px-2 border flex items-center "
        onClick={() =>
          externalOnChange &&
          externalOnChange(Number(externalValue) ? Number(externalValue) + 1 : 1)
        }
      >
        <AiOutlinePlus />
      </div>
    </div>
  );
}

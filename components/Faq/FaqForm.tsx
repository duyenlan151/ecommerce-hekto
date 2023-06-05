import { InputField, TextareaField } from '@components/Shared/Common';
import React from 'react';

export interface FAQFormProps {}

export default function FAQForm(props: FAQFormProps) {
  return (
    <div className="bg-grey-5 z-10 lg:px-14 sm:px-4 px-2 lg:py-16 py-10">
      <h4 className="text-blue-1 text-2xl font-bold">Ask a Question</h4>
      <form className="mt-14">
        {/* <InputField className="lg:bg-white bg-transparent" required placeholder="Your Name*" />
        <InputField className="lg:bg-white bg-transparent" required placeholder="Subject*" /> */}
        {/* <TextareaField className="lg:bg-white bg-transparent" placeholder="Type Your Messege*" /> */}
        <button
          type="submit"
          className="mt-4 bg-pink-1 w-40 rounded-sm px-5 py-2.5 text-base font-lato text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          Send Mail
        </button>
      </form>
    </div>
  );
}

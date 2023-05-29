import { InputField, TextareaField } from '@components/Shared/Common';
import * as React from 'react';

export interface ContactFormProps {}

export default function ContactForm(props: ContactFormProps) {
  return (
    <div className="z-10">
      <h4 className="text-blue-1 text-3xl">Get In Touch</h4>
      <div className="text-sub-title font-lato-light leading-7 mt-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique
        amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
      </div>
      <form className="mt-9">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
          {/* <InputField className="lg:bg-white bg-transparent" required placeholder="Your Name*" />
          <InputField
            type="email"
            className="lg:bg-white bg-transparent"
            required
            placeholder="Your E-mail"
          /> */}
        </div>
        {/* <InputField className="lg:bg-white bg-transparent" required placeholder="Subject*" /> */}
        <TextareaField className="lg:bg-white bg-transparent" placeholder="Type Your Messege*" />
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

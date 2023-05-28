import { InputField } from '@components/Shared/Common';
import * as React from 'react';

export interface LoginFormProps {}

export default function LoginForm(props: LoginFormProps) {
  return (
    <section className="container mx-auto">
      <form className="mx-auto w-34 shadow-main p-12 text-center">
        <h4 className="text-3xl">Login</h4>
        <p className="text-sub-title mb-5 mt-2 font-lato-light tracking-wide font-bold">
          Please login using account detail bellow.
        </p>
        <InputField placeholder="Email Address" required />
        <InputField placeholder="Password" required />
        <a
          href="/#"
          className="block underline text-left font-lato-light text-sub-title tracking-wide"
        >
          Forgot password
        </a>
        <button
          type="submit"
          className="mt-5 bg-pink-1 w-full rounded-sm px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          Sign In
        </button>
        <a
          href="/#"
          className="mt-8 text-center block hover:underline font-lato-light text-sub-title tracking-wide"
        >
          Don’t have an Account? Create account
        </a>
      </form>
    </section>
  );
}

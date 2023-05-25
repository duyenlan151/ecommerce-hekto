import * as React from 'react';

export interface SectionNewLettersProps {}

export default function SectionNewLetters(props: SectionNewLettersProps) {
  return (
    <section className="pt-[184px] pb-[113px] relative bg-[url('/images/trending/news-letters.png')] bg bg-center bg-no-repeat bg-contain">
      <div className="text-center container mx-auto">
        <h4 className="text-blue-1 text-3xl max-w-[40%] mx-auto leading-10 font-extrabold tracking-wide">
          Get Leatest Update By Subscribe 0ur Newslater
        </h4>
        <button
          type="submit"
          className="mt-10 rounded-sm bg-pink-1 flex-none px-12 py-2.5 text-lg font-semibold text-white shadow-sm backdrop-opacity-10 hover:backdrop-opacity-60"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}

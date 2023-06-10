import React from 'react';
import Image from 'next/image';

export interface BlogRelatedProps {}

export function BlogRelated(props: BlogRelatedProps) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold dark:text-white">Related</h3>
      <div className="grid gap-6 mt-6">
        <a href="/post/sidebar/this-bread-pudding-will-give-you-all-the-fall-feels">
          <div className="flex gap-5">
            <div className="relative w-24 h-20 overflow-hidden rounded-md shrink-0">
              <Image
                alt=""
                src="https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                fill
              />
            </div>
            <div>
              <h3 className="font-medium dark:text-white">
                This Bread Pudding Will Give You All the Fall Feels
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                <time className="" dateTime="2022-10-19T13:34:00.000Z">
                  October 19, 2022
                </time>
              </p>
            </div>
          </div>
        </a>
        <a href="/post/sidebar/i-moved-across-the-country-and-never-looked-back">
          <div className="flex gap-5">
            <div className="relative w-24 h-20 overflow-hidden rounded-md shrink-0">
              <Image
                alt=""
                src="https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                fill
              />
            </div>
            <div>
              <h3 className="font-medium dark:text-white">
                I Moved Across the Country and Never Looked Back
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                <time className="" dateTime="2022-10-19T12:34:00.000Z">
                  October 19, 2022
                </time>
              </p>
            </div>
          </div>
        </a>
        <a href="/post/sidebar/lessons-of-happiness-i-learned-from-a-mountain-village">
          <div className="flex gap-5">
            <div className="relative w-24 h-20 overflow-hidden rounded-md shrink-0">
              <Image
                alt=""
                src="https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                fill
              />
            </div>
            <div>
              <h3 className="font-medium dark:text-white">
                Lessons Of Happiness I learned from a Mountain Village
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                <time className="" dateTime="2022-09-25T15:15:00.000Z">
                  September 25, 2022
                </time>
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

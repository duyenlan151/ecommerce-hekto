import { BlogModel } from 'models';
import Image from 'next/image';
import Link from 'next/link';
export interface IBlogProps {
  blog: BlogModel;
}

export default function BlogItem({ blog: { title, desc, thumbnail, author, date } }: IBlogProps) {
  return (
    <div className="group cursor-pointer">
      <div className=" overflow-hidden rounded-md bg-gray-100 transition-all dark:bg-gray-800">
        <Link
          className="relative block aspect-square"
          href="/blog/14-architectural-design-ideas-for-spacious-interior"
        >
          <Image
            alt="Thumbnail"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            fill
            className="object-cover transition-all"
            sizes="(max-width: 768px) 30vw, 33vw"
            src="https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F12301f301772ed723724302aef7c70c5c1c0151f-4500x8000.jpg%3Frect%3D0%2C1080%2C4500%2C5330%26w%3D2000%26auto%3Dformat&w=1080&q=75"
          />
        </Link>
      </div>

      <div className="">
        <div>
          <div className="flex gap-3">
            <Link href="/category/design">
              <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                Design
              </span>
            </Link>
            <Link href="/category/lifestyle">
              <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-purple-600">
                Lifestyle
              </span>
            </Link>
          </div>
          <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
            <Link href="/blog/14-architectural-design-ideas-for-spacious-interior">
              <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                14 Architectural Design Ideas for a Spacious Interior
              </span>
            </Link>
          </h2>
          <div className="hidden">
            <p className="mt-2 line-clamp-3 text-sm text-gray-500 dark:text-gray-400">
              <Link href="/blog/14-architectural-design-ideas-for-spacious-interior">
                It is a cliche philosophical question, but it touches on something fundamental about
                how humans relate to the world around them.{' '}
              </Link>
            </p>
          </div>
          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <div className="relative h-5 w-5 flex-shrink-0">
                <Image
                  alt=""
                  src="https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                  fill
                />
              </div>
              <span className="truncate text-sm">Mario Sanchez</span>
            </div>
            <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
            <time className="truncate text-sm" dateTime="2022-10-21T06:05:00.000Z">
              October 21, 2022
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}

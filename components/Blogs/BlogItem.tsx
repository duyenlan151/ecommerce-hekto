import { HighLightSearchText } from '@components/Shared/HighLightSearchText';
import { formatDateTime, optionsDateFormats } from '@utils/common';
import { BlogModel } from 'models';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
export interface IBlogProps {
  blog: BlogModel;
}

export default function BlogItem({ blog }: IBlogProps) {
  const { title, author, updatedAt, main_image, category, slug } = blog;

  const {
    query: { search },
  } = useRouter();
  return (
    <div className="group cursor-pointer lg:mb-0 mb-6">
      <div className=" overflow-hidden rounded-md bg-gray-100 transition-all dark:bg-gray-800">
        <Link className="relative block aspect-square" href={`/blog/${slug}`}>
          <Image
            alt="Thumbnail"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            fill
            className="object-cover transition-all"
            sizes="(max-width: 768px) 30vw, 33vw"
            src={main_image}
          />
        </Link>
      </div>

      <div className="">
        <div>
          <div className="flex gap-3">
            <Link href={`/blog/category/${category[0]?.name}`}>
              <span className="inline-block text-xs font-medium tracking-wider uppercase   mt-5 text-blue-600">
                {category[0]?.name}
              </span>
            </Link>
          </div>
          <h2 className="text-lg font-semibold leading-snug tracking-tight mt-2    dark:text-white">
            <Link href={`/blog/${slug}`}>
              <span className="line-clamp-2	bg-gradient-to-r from-gray-200 to-gray-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">
                {/* {title} */}
                <HighLightSearchText text={title} textHighlight={String(search)} />
              </span>
            </Link>
          </h2>
          <div className="mt-3 flex items-center space-x-3 text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-3">
              <div className="relative h-5 w-5 flex-shrink-0">
                <Image alt="" src={main_image} fill />
              </div>
              <span className="truncate text-sm">{author}</span>
            </div>
            <span className="text-xs text-gray-300 dark:text-gray-600">•</span>
            <time className="truncate text-sm" dateTime={String(updatedAt)}>
              {formatDateTime(new Date(updatedAt), optionsDateFormats.primary)}
            </time>
          </div>
        </div>
      </div>
    </div>
  );
}

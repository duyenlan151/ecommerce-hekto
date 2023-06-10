import * as React from 'react';

export interface BlogCategoriesProps {}

export default function BlogCategories(props: BlogCategoriesProps) {
  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold dark:text-white">Categories</h3>
      <ul className="grid mt-4">
        <li>
          <a className="flex items-center justify-between py-2" href="/category/personal-growth">
            <h4 className="text-gray-800 dark:text-gray-400">Personal Growth</h4>
            <div className="inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-blue-50 text-blue-500 rounded-full shrink-0 dark:bg-gray-800 dark:text-gray-300">
              5
            </div>
          </a>
        </li>
        <li>
          <a className="flex items-center justify-between py-2" href="/category/lifestyle">
            <h4 className="text-gray-800 dark:text-gray-400">Lifestyle</h4>
            <div className="inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-blue-50 text-blue-500 rounded-full shrink-0 dark:bg-gray-800 dark:text-gray-300">
              4
            </div>
          </a>
        </li>
        <li>
          <a className="flex items-center justify-between py-2" href="/category/travel">
            <h4 className="text-gray-800 dark:text-gray-400">Travel</h4>
            <div className="inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-blue-50 text-blue-500 rounded-full shrink-0 dark:bg-gray-800 dark:text-gray-300">
              3
            </div>
          </a>
        </li>
        <li>
          <a className="flex items-center justify-between py-2" href="/category/technology">
            <h4 className="text-gray-800 dark:text-gray-400">Technology</h4>
            <div className="inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-blue-50 text-blue-500 rounded-full shrink-0 dark:bg-gray-800 dark:text-gray-300">
              3
            </div>
          </a>
        </li>
        <li>
          <a className="flex items-center justify-between py-2" href="/category/design">
            <h4 className="text-gray-800 dark:text-gray-400">Design</h4>
            <div className="inline-flex items-center justify-center font-bold px-2 h-6 text-sm bg-blue-50 text-blue-500 rounded-full shrink-0 dark:bg-gray-800 dark:text-gray-300">
              2
            </div>
          </a>
        </li>
      </ul>
    </div>
  );
}

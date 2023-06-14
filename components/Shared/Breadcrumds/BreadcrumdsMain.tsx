import Link from 'next/link';
import * as React from 'react';
import { BreadcrumbsProps } from './Breadcrumds';

export function BreadcrumdMain({ items }: BreadcrumbsProps) {
  const length = items.length - 1;
  return (
    <div className="flex gap-2 items-start flex-nowrap overflow-x-auto pb-4">
      {items.map((crumb, i) => {
        const isLastItem = i === length;
        if (!isLastItem) {
          return (
            <div key={crumb.path}>
              <Link
                href={crumb.path}
                key={i}
                className="text-black hover:text-gray-800 hover:underline whitespace-nowrap"
              >
                {crumb.label}
              </Link>
              {/* separator */}
              <span> / </span>
            </div>
          );
        } else {
          return (
            <span key={crumb.path} className="text-gray-500 whitespace-nowrap">
              {crumb.label}
            </span>
          );
        }
      })}
    </div>
  );
}

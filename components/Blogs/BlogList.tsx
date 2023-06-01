import * as React from 'react';
import BlogItem from './BlogItem';

export interface BlogListProps {}

const data = [
  {
    id: 1,
    title: 'Top esssential Trends in 2021',
    desc: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    author: 'SaberAli',
    date: '21 August,2020',
    thumbnail: ['/images/blogs/image01.png'],
  },
  {
    id: 2,
    title: 'Top esssential Trends in 2021',
    desc: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    author: 'Surfauxion',
    date: '21 August,2020',
    thumbnail: ['/images/blogs/image02.png'],
  },
  {
    id: 3,
    title: 'Top esssential Trends in 2021',
    desc: 'More off this less hello samlande lied much over tightly circa horse taped mightly',
    author: 'SaberAli',
    date: '21 August,2020',
    thumbnail: ['/images/blogs/image03.png'],
  },
];

export default function BlogList(props: BlogListProps) {
  return (
    <div className="grid justify-center items-center mx-auto lg:gap-10 gap-4 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 grid-flow-row">
      {data.map((blog) => (
        <BlogItem key={blog.id} blog={blog} />
      ))}
    </div>
  );
}

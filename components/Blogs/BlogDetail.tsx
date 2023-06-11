import React from 'react';
import Image from 'next/image';
import { BlogSidebar } from './BlogSidebar';
import Link from 'next/link';
import { BlogModel } from 'models';
import { formatDateTime, optionsDateFormats } from '@utils/common';

export interface BlogDetailProps {
  blog: BlogModel;
}

export function BlogDetail({
  blog: { title, main_image, author, content, excerpt, updatedAt },
}: BlogDetailProps) {
  return (
    <div>
      <div className="relative z-0 flex min-h-[calc(100vh-30vh)] items-center">
        <div className="absolute -z-10 h-full w-full before:absolute before:z-10 before:h-full before:w-full before:bg-black/30">
          <Image alt="" src={main_image} fill className="object-cover" />
        </div>
        <div className="mx-auto max-w-screen-lg px-5 py-20 text-center">
          <h1 className="text-brand-primary mb-3 mt-2 text-3xl font-semibold tracking-tight text-white lg:text-5xl lg:leading-tight">
            {title}
          </h1>
          <div className="mt-8 flex justify-center space-x-3 text-gray-500 ">
            <div className="flex flex-col gap-3 md:flex-row md:items-center">
              <div className="flex gap-3">
                {/* <div className="relative h-5 w-5 flex-shrink-0">
                  <a href="/author/joshua-wood">
                    <Image
                      alt="Joshua Wood"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      fill
                      className="rounded-full object-cover"
                      sizes="100vw"
                      src="https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    />
                  </a>
                </div> */}
                <p className="text-gray-100 ">
                  <a href="/author/joshua-wood">{author}</a>
                  <span className="hidden pl-2 md:inline"> ·</span>
                </p>
              </div>
              <div>
                <div className="flex space-x-2 text-sm md:flex-row md:items-center">
                  <time className="text-gray-100">
                    {formatDateTime(new Date(updatedAt), optionsDateFormats.primary)}
                  </time>

                  <span className="text-gray-100">·6 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto my-14 flex max-w-screen-xl flex-col gap-5 px-5 md:flex-row">
        <article className="flex-1 px-4">
          <div
            className="ql-editor !overflow-hidden"
            dangerouslySetInnerHTML={{
              __html: content,
            }}
          ></div>
          {/* <div className="prose prose-lg mx-auto my-3 dark:prose-invert prose-a:text-blue-500">
            <p>
              I recently went to the mountains with my friends. We were celebrating 50 years of
              friendship. It was very special. Six of us were to be together spending time in the
              mountains.
            </p>
            <p>
              I had never been to that place nor heard of the name. I was told by my friends that
              they had done all the bookings. I had to just pack and join them at the station.
            </p>
            <p>
              We would be going to{' '}
              <a href="https://en.wikipedia.org/wiki/Kumarsain" rel="noopener" target="_blank">
                ‘<em>Kumarsain’</em>
              </a>
              &nbsp;<em>which is at the foothill of</em>&nbsp;
              <a
                href="https://www.incredibleindia.org/content/incredibleindia/en/destinations/shimla/kotgarh.html"
                rel="noopener"
                target="_blank"
              >
                <em>Kotgarh.</em>
              </a>
              &nbsp;
              <em>
                Both are growing areas of apples, pears, apricots, almonds, cherries, and plums in
                Himachal Pradesh.
              </em>
            </p>
            <p>
              We were to go on the fast train called Shatabdi from Delhi to Kalka and the onward
              journey would be in an SUV called an Innova.
            </p>
            <p>
              We reached Kalka and the cab was waiting for us. We were excited souls. We reached the
              mountains at 8.30 PM after a long and arduous journey and were even wondering whether
              it was worth it.
            </p>
            <p>
              We reached our destination. It was calm quiet with the soft rustling winds whistling
              through the trees.
            </p>
            <p>The clean neat guest house The Wheeler Lodge B&amp;B looked amazing and inviting.</p>
            <h2>Inspirational welcome</h2>
            <p>
              The host and the hostess at the Wheeler lodge were waiting to welcome us. The warm
              welcome we received from them made us feel very much at home. The hostess had a major
              kidney surgery which we did not know about. They did not cancel our booking having
              committed to it.
            </p>
            <blockquote>
              She smiled and was very soft-spoken. Their two children were equally warm and treated
              us with respect, happiness, and kindness.
            </blockquote>
            <p>
              They served us fresh food. We enjoyed the simple but tasty homemade food. The whole
              family served the food and kept us busy with anecdotes about the small village. I
              could see that they were all proud of their beautiful village.
            </p>
            <p>
              They were humble and lovely as a family. We came to know that these young girls
              between the age of 10 and 13 walk 4kms to school every day on the steep elevated
              mountains. Winter and summer they bear it all. This makes the children hardy and
              strong.
            </p>
            <p>
              The girls also help out at the two beautiful orchards that they possessed at the time
              of sowing and picking the fruit. The orchards had fruit trees of apples, apricots,
              almonds, and cherries.
            </p>
            <h2>Community work</h2>
            <p>
              Taking a round of the orchards I found that a large number of people were working
              there. I enquired whether these people were specially hired for the work in the
              orchard. While some of them were laborers that come in from Nepal and Bihar other
              people were owners of orchards who had come to help as they believed in helping the
              community and worked in each other’s orchards when the need arose.
            </p>
            <blockquote>
              The people looked happy and relaxed and completely tension-free. The air was pure.
              There was no pollution. It was cool weather. The village consisted of only 150 people
              who helped each other all the time.
            </blockquote>
            <p>
              The community experience was something like the Japanese Ikegai in that the community
              work gave each person a sense of belonging and a purpose to do some work together.
              People are happy and committed to each other. They work together in unison.
            </p>
            <p>
              This purpose of life and good physical work keeps their bodies fit too. They sleep
              well.
            </p>
            <p>
              In fact in the quiet village with pollution-free and pure air we all from big cities
              slept extremely well. Every night was refreshing.
            </p>
            <h2>Patience</h2>
            <p>
              People in the village were very patient. Farming teaches you a lot of patience. Once
              you sow the trees, it takes four years for the fruits to arrive. The trees last
              between 10–15 years giving fruit. Once the buds begin to flower it takes six months
              for the apples to be ripe and sold on the market.
            </p>
            <p>
              During that time the farmers are free to do other jobs and patiently wait for a good
              crop.
            </p>
            <p>
              I found cherries to be the most cumbersome. Each cherry had to be picked individually.
              If they hit the ground they would spoil the crop. It could neither be eaten nor kept.
              The crop gets wasted.
            </p>
            <p>
              They are also afraid that the hail storm and other pests would spoil the crop. So all
              the trees are covered with nets.
            </p>
            <p>The apple and pear trees are netted to avoid destruction from weather and pests. </p>
            <h2>Longevity</h2>
            <p>
              People in this village live a long life. It is stress-free living there. The parents
              are highly respected by their children.
            </p>
            <p>
              Even people in the community respect the elders and mingle with them and do their
              work.
            </p>
            <p>
              In return, the old people offer life lessons storytelling and happiness to people.
            </p>
            <p>
              Some cook excellent dishes and send them to the youngsters. This life is like a
              partnership between young and old.
            </p>
            <p>Photo of the old lady who is so happy and stress-free. </p>
            <p />
          </div> */}
          <div className="mb-7 mt-7 flex justify-center">
            <Link
              className="bg-brand-secondary/20 rounded-full px-5 py-2 text-sm text-blue-600 dark:text-blue-500 "
              href="/blog"
            >
              ← View all posts
            </Link>
          </div>
          <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
            <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
              {/* <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
                <a href="/author/joshua-wood">
                  <Image
                    alt=""
                    src="https://stablo-pro.web3templates.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Fcijrdavx%2Fproduction%2F5be1635417f1814b3fb09f8e9f74f37079899f72-4032x3024.jpg%3Fw%3D2000%26auto%3Dformat&w=3840&q=75"
                    fill
                  />
                </a>
              </div> */}
              <div>
                <div className="mb-3">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-300">
                    About {/* */}
                    {author}
                  </h3>
                </div>
                <div>
                  <p>{excerpt}</p>
                </div>
                {/* <div className="mt-3">
                  <a
                    className="py-2 text-sm text-blue-600 rounded-full dark:text-blue-500 bg-brand-secondary/20 "
                    href="/author/joshua-wood"
                  >
                    View Profile
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </article>

        <BlogSidebar />
      </div>
    </div>
  );
}

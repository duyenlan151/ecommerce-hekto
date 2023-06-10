import { useRouter } from 'next/router';
import { UrlObject } from 'url';

export interface IuseRouterPushProps {}

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
  unstable_skipClientCache?: boolean;
}
export declare type Url = UrlObject;

export function useRouterPush() {
  const router = useRouter();

  const routerPushQuery = (url: Url, as?: Url, options?: TransitionOptions) => {
    router.push(
      {
        path: router.pathname,
        ...url,
      },
      undefined,
      { scroll: false }
    );
  };
  return { routerPushQuery };
}

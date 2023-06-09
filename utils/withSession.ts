import {
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
} from 'next';

// https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/pages/api/cors.ts
// https://www.npmjs.com/package/nextjs-cors
import NextCors from 'nextjs-cors';
function withNextCors(handler: NextApiHandler): NextApiHandler {
  return async function nextApiHandlerWrappedWithNextCors(req, res) {
    const methods = ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'];
    await NextCors(req, res, {
      methods,
      // origin: "https://www.test.com",
      // origin: CORS_ALLOWED_ORGIN,
      origin: '*',
      // optionsSuccessStatus: 400,
      optionsSuccessStatus: 200,
    });

    // console.log(2);

    // console.log(req);
    // console.log(res);
    // console.log(ALLOWED_METHODS);

    // await useCors(req, res, cors);
    // console.log(3);

    return handler(req, res);
  };
}

export function withNextCorsRoute(handler: NextApiHandler) {
  return withNextCors(handler);
}

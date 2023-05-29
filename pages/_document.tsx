import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#000000" />
          <link rel="shortcut icon" href="/img/brand/favicon.ico" />
          <link rel="apple-touch-icon" sizes="76x76" href="/img/brand/apple-icon.png" />
          {/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRKl1zvLbUPYuOsyYXSZwRtFu9C2EpOYU"></script> */}
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCACwpcek5FdW8bn02P0HG7IA07d1Zd6ys"></script>
          <script src="https://unpkg.com/react-popper/dist/index.umd.js"></script>
        </Head>
        <body className="text-blueGray-700 antialiased">
          <div id="page-transition"></div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

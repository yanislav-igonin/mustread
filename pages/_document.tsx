import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html className="dark">
      <Head>
        <meta name="description" content="h0b0's mustreads" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="https://mustreads.h0b0.dev/api/og" />
        <meta property="twitter:image" content="https://mustreads.h0b0.dev/api/og" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

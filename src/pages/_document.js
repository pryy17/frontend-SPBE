import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body className="xl:px-[0] 2xl:px-[17em] w-full">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

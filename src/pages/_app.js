/* eslint-disable react/prop-types */
import Head from "next/head";
import "../styles/globals.css";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

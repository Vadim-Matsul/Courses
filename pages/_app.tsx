import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/global.css';

export default function MyApp ( { Component, pageProps }:AppProps ):JSX.Element {

  return (
    <>
      <Head>
        <title> App </title>
        <meta name='description' content='On all pages'/>

      </Head>
      <Component {...pageProps} />
    </>
  );

}
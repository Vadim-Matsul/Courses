import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import '../styles/app.css';


export default function App ( { Component, pageProps }:AppProps ){

  return (
    <>
      <Head>
        <meta name='keywords' content='Next.JS, Javascript, SSR' />
        <meta name='description' content='first meeting with SSR-technologies and Next.JS' />
      </Head>
      <NextNProgress
        color='lightgreen'
        startPosition={ 0.45 }
        stopDelayMs={ 170 }
        height={ 3 }
      />
      <Component {...pageProps} />
    </>
  );

}

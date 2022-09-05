import { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import '../styles/app.css';


export default function App ( { Component, pageProps }:AppProps ){

  return (
    <>
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

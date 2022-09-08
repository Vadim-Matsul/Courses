import { NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/main.css';
const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {

  return (
    <>
      <Head>
        <meta name='keywords' content='Nextjs,javacript,React,SSR,typescript' />
        <meta name='description' content='First meeting with Next.JS' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}


export default MyApp;

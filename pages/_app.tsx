import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/global.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  const router = useRouter();

  return (
    <>
      <Head>
        <title>OwlTop</title>
        <meta property='og:locale' content='ruRU' />
        <meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
      </Head>
      <Component {...pageProps} />
    </>
  );

}
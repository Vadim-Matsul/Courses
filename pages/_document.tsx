import Document, { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument ():JSX.Element {

  return(
    <Html lang='ru' >
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>  {/*браузер преждевременно установит соединение*/}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='anonymous' /> 
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
        <Main/>  {/* render pages-components */}
        <NextScript/>   {/* next scripts */}
      </body>
    </Html>
  );

}

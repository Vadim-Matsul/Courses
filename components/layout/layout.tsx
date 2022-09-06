import Head from "next/head";
import Link from "next/link";
import { AppRoute } from "../../const";
import cl from '../../styles/layout.module.css';

type LayoutProps = {
    children: JSX.Element,
    title: string
}

export default function Layout ( { title, children }:LayoutProps ) {


  return (
    <>
      <Head>
        <title>{ title }</title>
      </Head>
      <nav className={ cl.nav }>
        <Link href={ AppRoute.Main }>
          <a> Main </a>
        </Link>
        <Link href={ AppRoute.About }>
          <a> About </a>
        </Link>
        <Link href={ AppRoute.Posts }>
          <a> Posts </a>
        </Link>
      </nav>
      <main>
        { children }
      </main>
    </>
  );
}

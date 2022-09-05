import Link from "next/link";
import { AppRoute } from "../const";
import cl from '../styles/layout.module.css';

type LayoutProps = {
    children: JSX.Element
}

export default function Layout ( { children }:LayoutProps ) {
  

  return (
    <>
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

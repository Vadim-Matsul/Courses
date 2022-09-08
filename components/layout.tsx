import { NextPage } from 'next';
import Link from 'next/link';

type layoutType = {
  children: JSX.Element
}

const LayoutNav:NextPage< layoutType > = ({ children }) => {


  return(
    <>
      <nav> 
        <Link href='/'>
          <a> MAIN </a>
        </Link>
        <Link href='/users'>
          <a> Users </a>
        </Link>
        <Link href='/posts'>
          <a> Posts </a>
        </Link>
      </nav>
      <div>
        { children }
      </div>
    </>
  );
}


export default LayoutNav;

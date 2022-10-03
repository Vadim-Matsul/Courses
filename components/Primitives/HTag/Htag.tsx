import { NextPage } from 'next';
import { HTAG } from './HTag.props';
import stls from './Htag.module.css';

export const HTag: NextPage<HTAG> = ({ tag, children, ...props }) => {

  return (
    <>
      {tag === 'h1' && <h1 className={stls.h1} {...props}>{children}</h1>}
      {tag === 'h2' && <h2 className={stls.h2} {...props}>{children}</h2>}
      {tag === 'h3' && <h3 className={stls.h3} {...props}>{children}</h3>}
    </>
  );
}

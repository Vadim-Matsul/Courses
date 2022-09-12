import { NextPage } from 'next';
import { HTAG } from './HTag.props';
import stls from './HTag.module.css';

export const HTag: NextPage<HTAG> = ({ tag, children }) => {

  return (function (tag, children) {
    return (
      <>
        {tag === 'h1' && <h1 className={ stls.h1 } >{children}</h1>}
        {tag === 'h2' && <h2 className={ stls.h2 } >{children}</h2>}
        {tag === 'h3' && <h3 className={ stls.h3 } >{children}</h3>}
      </>
    );
  })(tag, children)
}

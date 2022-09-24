import { NextPage } from 'next';
import { SeoBlockProps } from './SeoBlock.props';
import stls from './SeoBlock.module.css';
import { P } from '../Product/Product';

export const SeoBlock: NextPage<SeoBlockProps> = ({ seoText }) => {

  return (
    <div className={stls.seoTextWrapper} dangerouslySetInnerHTML={{ __html: seoText }} />
  );
}

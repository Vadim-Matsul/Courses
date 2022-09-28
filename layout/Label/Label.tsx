import { NextPage } from 'next';
import { OwlLabel } from '../../components/svg';
import { LabelProps } from './Label.props';
import stls from './Label.module.css';
import Link from 'next/link';
import classNames from 'classnames';

export const Label: NextPage<LabelProps> = ({ className, ...props }) => {

  const LabelClass = classNames(stls.titleLable, className);

  return (
    <div className={LabelClass} {...props}>
      <Link href={{ pathname: '/' }} >
        <a>
          <OwlLabel />
          <span>OWL</span>
          <span>top</span>
        </a>
      </Link>
    </div>
  )
}

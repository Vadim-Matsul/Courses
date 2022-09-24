import { NextPage } from 'next';
import { OwlLabel } from '../../components/svg';
import { LabelProps } from './Label.props';
import stls from './Label.module.css';
import Link from 'next/link';

export const Label: NextPage<LabelProps> = (props) => {


  return (
    <div className={stls.titleLable} {...props}>
      <Link href={{pathname: '/'}} >
        <a>
          <OwlLabel />
          <span>OWL</span>
          <span>top</span>
        </a>
      </Link>
    </div>
  )
}

import { NextPage } from 'next';
import { OwlLabel } from '../../components/svg';
import { LabelProps } from './Label.props';
import stls from './Label.module.css';

export const Label: NextPage<LabelProps> = ( props ) => {


  return (
    <div className={stls.titleLable} {...props}>
      <OwlLabel />
      <span>OWL</span>
      <span>top</span>
    </div>
  )
}

import classNames from 'classnames';
import { NextPage } from 'next';
import { DeviderProps } from './Devider.props';
import stls from './Devider.module.css';

export const Devider: NextPage<DeviderProps> = ({ className, children, ...props }) => {
  const Devider = classNames(stls.devider, className)
  return <hr className={Devider} {...props} />
}
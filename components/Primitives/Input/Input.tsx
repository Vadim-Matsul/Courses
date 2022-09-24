import classNames from 'classnames';
import { NextPage } from 'next';
import { InputProps } from './Input.props';
import stls from './Input.module.css';

export const Input: NextPage<InputProps> = ({ className, ...props }) => {
  const InputClass = classNames(className, stls.input);
  return <input className={InputClass} {...props} />
}

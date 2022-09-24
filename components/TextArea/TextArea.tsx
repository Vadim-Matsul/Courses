import classNames from 'classnames';
import { NextPage } from 'next';
import { TextAreaProps } from './TextArea.props';
import stls from './TextArea.module.css';

export const TextArea: NextPage<TextAreaProps> = ({ className, ...props }) => {
  const TextAreaClass = classNames(className, stls.textarea);
  return <textarea className={TextAreaClass} {...props} />
}

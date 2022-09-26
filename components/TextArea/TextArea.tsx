import classNames from 'classnames';
import { TextAreaProps } from './TextArea.props';
import stls from './TextArea.module.css';
import React from 'react';

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {

  const { className, errors, ...propsTextArea } = props;

  const TextAreaWrapperClass = classNames(stls.textAreaWrapper, className);

  const TextAreaClass = classNames(stls.textarea, {
    [stls.textAreaError]: errors
  });

  return (
    <div className={TextAreaWrapperClass}>
      <textarea className={TextAreaClass} {...propsTextArea} ref={ref} />
      {errors && <span>{errors.message}</span>}
    </div>
  )
})


TextArea.displayName = 'TextArea';
export { TextArea };
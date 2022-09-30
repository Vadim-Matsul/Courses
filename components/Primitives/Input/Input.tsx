import classNames from 'classnames';
import { NextPage } from 'next';
import { InputProps } from './Input.props';
import stls from './Input.module.css';
import React, { ForwardedRef } from 'react';
import PropTypes from 'prop-types'


const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, errors, ...props }, ref): JSX.Element => {

  const inputWrapperClass = classNames(className, stls.inputWrapper)

  const InputClass = classNames(stls.input, {
    [stls.errorInput]: errors
  });

  return (
    <div className={inputWrapperClass}>
      <input className={InputClass} {...props} ref={ref} />
      {errors && <span role='alert' >{errors.message}</span>}
    </div>
  )
})

Input.displayName = 'Input';
export { Input };

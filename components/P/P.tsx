import classNames from 'classnames';
import { NextPage } from 'next';
import { PProps } from './P.props';
import stls from './P.module.css';

export const P: NextPage<PProps> = ({ size = 'medium', children, ...props }) => {

  const PClass = classNames(stls.p, {
    [stls.Plarge]: size === 'large',
    [stls.Pmedium]: size === 'medium',
    [stls.Psmall]: size === 'small'
  })

  return (
    <p
      {...props}
      className={PClass}
    >
      {children}
    </p>
  )
}
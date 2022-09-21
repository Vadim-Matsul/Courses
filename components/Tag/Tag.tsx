import classNames from 'classnames';
import { NextPage } from 'next';
import { TagProps } from './Tag.props';
import stls from './Tag.module.css';
import { PropsWithChildren } from 'react';

export const Tag: NextPage<PropsWithChildren<TagProps>> = ({ size = 'small', color = 'primary', href, children, className, ...props }) => {


  const TagClass = classNames(className, stls.tag, {
    [stls.small]: size === 'small',
    [stls.medium]: size === 'medium',
    [stls.large]: size === 'large',

    [stls.grey]: color === 'grey',
    [stls.ghost]: color === 'ghost',
    [stls.green]: color === 'green',
    [stls.red]: color === 'red',
    [stls.primary]: color === 'primary',
  });

  return (
      <div
        {...props}
        className={TagClass}
      >
        {href
          ? <a href={href}>{children}</a>
          : <>{children}</>}
      </div>
  );
};

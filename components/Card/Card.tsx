import classNames from 'classnames';
import { NextPage } from 'next';
import { CardProps } from './Card.props';
import { Arrow } from '../svg';
import stls from './Card.module.css';
import React from 'react';

const Card = React.forwardRef<HTMLDivElement, CardProps>((props, ref) => {

  const { color = 'white', className, children, ...propsCard } = props;
  const CardClass = classNames(stls.defaultCard, className, {
    [stls.blue]: color === 'blue'
  });
  return (
    <div
      className={CardClass}
      {...propsCard}
      ref={ref}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';
export { Card };

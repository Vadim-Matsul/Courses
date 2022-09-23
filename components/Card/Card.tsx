import classNames from 'classnames';
import { NextPage } from 'next';
import { CardProps } from './Card.props';
import { Arrow } from '../svg';
import stls from './Card.module.css';


export const Card: NextPage<CardProps> = ({ color = 'white', className, children, ...props }) => {

  const CardClass = classNames(stls.defaultCard, className, {
    [stls.blue]: color === 'blue'
  });


  return (
    <div className={CardClass} {...props}>
      {children}
    </div>
  );
};

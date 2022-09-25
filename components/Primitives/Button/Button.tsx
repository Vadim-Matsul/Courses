import classNames from 'classnames';
import { NextPage } from 'next';
import { ButtonProps } from './Button.props';
import { Arrow } from '../../svg';
import stls from './Button.module.css';


export const Button: NextPage<ButtonProps> = ({ appearance, arrow = 'none', className, children, ...props }) => {

  const ButtonClass = classNames(stls.button, className, {
    [stls.primary]: appearance,
    [stls.ghost]: !appearance
  });

  const ArrowClass = classNames(stls.arrow, {
    [stls.arrowdown]: arrow === 'down'
  });


  return (
    <button
      {...props}
      className={ButtonClass}
    >{children}
      {arrow !== 'none' && <Arrow className={ArrowClass} />}
    </button>
  );
};

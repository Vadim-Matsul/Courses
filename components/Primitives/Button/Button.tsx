import classNames from 'classnames';
import { NextPage } from 'next';
import { ButtonProps } from './Button.props';
import { Arrow } from '../../svg';
import stls from './Button.module.css';


export const Button: NextPage<ButtonProps> = ({ disabled, appearance, arrow = 'none', className, children, ...props }) => {

  const ButtonClass = classNames(stls.button, className, {
    [stls.primary]: appearance,
    [stls.ghost]: !appearance,
    [stls.disabled]: disabled
  });

  const ArrowClass = classNames(stls.arrow, {
    [stls.arrowdown]: arrow === 'down'
  });


  return (
    <button
      className={ButtonClass}
      {...props}
      disabled={disabled}
    >{children}
      {arrow !== 'none' && <Arrow className={ArrowClass} />}
    </button>
  );
};

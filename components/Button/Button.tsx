import classNames from 'classnames';
import { NextPage } from 'next';
import { ButtonProps } from './Button.props';
import ArrowIcon from './Arrow.svg';
import stls from './Button.module.css';


export const Button: NextPage<ButtonProps> = ({ appearance, arrow = 'none', children, ...props }) => {

  const ButtonClass = classNames(stls.button, {
    [stls.primary]: appearance,
    [stls.ghost]: !appearance
  });

  const ArrowClass = classNames(stls.arrow, {
    [stls.arrowright]: arrow === 'right',
    [stls.arrowdown]: arrow === 'down'
  });


  return (
    <button
      {...props}
      className={ButtonClass}
    >{children}
      {/* {arrow !== 'none' && <ArrowIcon/> } */}
    </button>
  );
};

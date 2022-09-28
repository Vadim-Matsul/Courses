import classNames from 'classnames';
import { NextPage } from 'next';
import { ButtonIconProps, IconInButton } from './ButtonIcon.props';
import { Arrow } from '../../svg';
import stls from './ButtonIcon.module.css';


export const ButtonIcon: NextPage<ButtonIconProps> = ({ appearance, icon, className, ...props }) => {

  const ButtonIconClass = classNames(stls.button, className, {
    [stls.primary]: appearance,
    [stls.ghost]: !appearance,
  });
  
  const Icon = IconInButton[icon]
  return (
    <button
      className={ButtonIconClass}
      {...props}
    >
      <Icon />
    </button>
  );
};

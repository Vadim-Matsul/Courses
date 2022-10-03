import { ButtonHTMLAttributes, DetailedHTMLProps, PropsWithChildren } from 'react';
import { Button } from '../..';

interface ButtonToggleProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  buttonToggleClass: string,
  onClick: () => void
}

export const ButtonToggle: React.FC<PropsWithChildren<ButtonToggleProps>> = ({ buttonToggleClass, onClick, children, ...props }) => (
  <Button className={buttonToggleClass}
    onClick={onClick}
    onMouseLeave={onClick}
    tabIndex={-1}
    aria-hidden={true}
    {...props}
  >{children}</Button>
)
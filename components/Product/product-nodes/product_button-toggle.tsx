import { PropsWithChildren } from 'react';
import { Button } from '../..';

interface ButtonToggleProps {
  buttonToggleClass: string,
  onClick: () => void
}

export const ButtonToggle: React.FC<PropsWithChildren<ButtonToggleProps>> = ({ buttonToggleClass, onClick, children }) => (
  <Button className={buttonToggleClass}
    onClick={onClick}
    tabIndex={-1}
    aria-hidden={true}
  >{children}</Button>
)
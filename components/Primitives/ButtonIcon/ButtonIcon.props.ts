import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import { Menu, ArrowUp, Close } from '../../svg';

export const IconInButton = {
  Menu,
  ArrowUp,
  Close
}

type IconInButton = keyof typeof IconInButton;

export interface ButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance?: boolean,
  icon: IconInButton
}

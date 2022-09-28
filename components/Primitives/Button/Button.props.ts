import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps extends Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'ref'
> {
  appearance?: boolean,
  arrow?: 'right' | 'down' | 'none',
  children: React.ReactNode
}

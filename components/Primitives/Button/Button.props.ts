import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance?: boolean,
  arrow?: 'right' | 'down' | 'none',
  children: React.ReactNode
}

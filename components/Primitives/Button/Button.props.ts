import React from 'react';
import { DetailedProps } from '../../svg/types';

export interface ButtonProps extends DetailedProps<HTMLButtonElement> {
  appearance?: boolean,
  arrow?: 'right' | 'down' | 'none'
  children: React.ReactNode
}

import React, { PropsWithChildren } from 'react';
import { DetailedProps } from '../svg/types';

export interface CardProps extends PropsWithChildren<DetailedProps>{
  color?: 'white' | 'blue'
}

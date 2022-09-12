import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.HTMLAttributes< HTMLButtonElement >, HTMLButtonElement > {
  appearance?: boolean,
  arrow?: 'right' | 'down'| 'none'
  children: React.ReactNode
}

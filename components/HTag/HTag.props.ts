import { DetailedProps } from '../svg/types';

export interface HTAG extends DetailedProps<HTMLHeadingElement> {
  tag: 'h1' | 'h2' | 'h3',
  children: React.ReactNode
}

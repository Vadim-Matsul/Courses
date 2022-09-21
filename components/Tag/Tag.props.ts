import { DetailedProps } from '../svg/types';

export interface TagProps extends DetailedProps {
  size?: 'small' | 'medium' | 'large',
  color?: 'grey' | 'ghost' | 'green' | 'red' | 'primary',
  href?: string,
}

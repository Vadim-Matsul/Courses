import { MutableRefObject } from 'react';
import { DetailedProps } from '../svg/types';

export interface SkipLinkProps extends Omit<
  DetailedProps<HTMLAnchorElement>,
  'onAnimationStart' | 'onDrag' | 'onDragStart' | 'onDragEnd' | 'ref'
> {
  focusBlock: MutableRefObject<HTMLElement>
}

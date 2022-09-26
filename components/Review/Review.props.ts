import { Review } from '../../types/product.types';
import { DetailedProps } from '../svg/types';

export interface ReviewProps extends DetailedProps {
  review: Review
}

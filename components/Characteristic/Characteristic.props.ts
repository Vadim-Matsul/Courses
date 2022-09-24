import { Characteristic } from '../../types/product.types';
import { DetailedProps } from '../svg/types';

export interface CharacteristicProps extends DetailedProps {
  characteristics: Characteristic[]
}

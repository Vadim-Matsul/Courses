import { ProductModel } from '../../types/product.types'
import { DetailedProps } from '../svg/types'

export interface ProductProps extends DetailedProps {
  product: ProductModel
}

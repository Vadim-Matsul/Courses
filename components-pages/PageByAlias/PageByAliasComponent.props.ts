import { CATEGORY } from '../../const'
import { PageModel } from '../../types/page.types'
import { ProductModel } from '../../types/product.types'

export interface PageByAliasProps {
  firstCategory: CATEGORY,
  page: PageModel,
  products: ProductModel[]
}
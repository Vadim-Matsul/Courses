import { Dispatch } from 'react'
import { SortProductsOptions } from '../../const'
import { SortAction } from '../../state/reducers/sort-reducer/sort.reducer.types'
import { DetailedProps } from '../svg/types'

export interface SortFormProps extends DetailedProps {
  sort: SortProductsOptions,
  setSort: Dispatch<SortAction>,
  ratingIsOpen: boolean,
  priceIsOpen: boolean
}

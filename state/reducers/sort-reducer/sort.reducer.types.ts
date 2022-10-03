import { SortProductsOptions } from '../../../const';
import { ProductModel } from '../../../types/product.types';
import { changeRatingOpen, changePriceOpen, setPriceHighToLow, setPriceLowToHigh, setRatingHighToLow, setRatingLowToHigh, setStateProducts, setSortNone } from '../../actions/sort.actions';


export type SortAction =
  | ReturnType<typeof setSortNone>
  | ReturnType<typeof setStateProducts>
  | ReturnType<typeof setRatingHighToLow>
  | ReturnType<typeof setRatingLowToHigh>
  | ReturnType<typeof setPriceHighToLow>
  | ReturnType<typeof setPriceLowToHigh>
  | ReturnType<typeof changeRatingOpen>
  | ReturnType<typeof changePriceOpen>


export interface InitialSortState {
  sort: SortProductsOptions,
  products: ProductModel[],
  ratingIsOpen: boolean,
  priceIsOpen: boolean
}
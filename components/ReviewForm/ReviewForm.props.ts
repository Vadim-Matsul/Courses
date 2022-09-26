import { DetailedProps } from '../svg/types';

export interface ReviewFormProps extends DetailedProps<HTMLFormElement> {
  productId: string
}

export interface FormData {
  title: string,
  name: string,
  description: string,
  rating: number
}

export interface responsePostReview {
  message: string
}

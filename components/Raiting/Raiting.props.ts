import { FieldError } from 'react-hook-form'
import { DetailedProps } from '../svg/types'

export interface RaitingProps extends DetailedProps {
  rating?: number,
  isEditable?: boolean,
  setRating?: (rating: number) => void
  errors?: FieldError
}

export interface StaticRaitingProps extends DetailedProps {
  rating?: number
}

export interface DinamicRaitingProps extends DetailedProps {
  errors?: FieldError
  currentRating: number
  setRating: (rating: number) => void
}
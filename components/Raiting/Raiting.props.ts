import { DetailedProps } from '../svg/types'

export interface RaitingProps extends DetailedProps {
  rating?: number,
  isEditable?: boolean,
}

export interface StaticRaitingProps {
  rating?: number
}

export interface DinamicRaitingProps {
  currentRating?: number
}
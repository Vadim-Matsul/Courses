import { DetailedProps } from '../svg/types'

export interface PProps extends DetailedProps<HTMLParagraphElement> {
  size?: 'large' | 'medium' | 'small'
  children: string
}

export interface TagProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'small' | 'medium' | 'large',
  color?: 'grey' | 'ghost' | 'green' | 'red' | 'primary',
  href?: string,
  children: string
}

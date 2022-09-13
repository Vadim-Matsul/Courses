export interface PProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  size?: 'large' | 'medium' | 'small'
  children: string
}

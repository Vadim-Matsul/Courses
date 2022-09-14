import { NextPage } from 'next';
import { FooterProps } from './Footer.props';


export const Footer: NextPage<FooterProps> = ({ ...props }) => (
  <footer {...props}>
    Footer
  </footer>
)


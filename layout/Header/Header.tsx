import { NextPage } from 'next';
import { HeaderProps } from './Header.props';


export const Header: NextPage<HeaderProps> = ({ ...props }) => (
  <header {...props}>
    Header
  </header>
)


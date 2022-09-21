import { NextPage } from 'next';
import { SideBarProps } from './SideBar.props';
import { Menu, Label, Search } from '../'

export const SideBar: NextPage<SideBarProps> = ({ ...props }) => {

  return (
    <nav {...props}>
      <Label />
      <Search/>
      <Menu />
    </nav>
  )
}



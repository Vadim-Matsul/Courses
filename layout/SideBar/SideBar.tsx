import { NextPage } from 'next';
import { SideBarProps } from './SideBar.props';
import { Menu } from '../'

export const SideBar: NextPage<SideBarProps> = ({ ...props }) => {

  return (
    <nav {...props}>
      <Menu />
    </nav>
  )
}



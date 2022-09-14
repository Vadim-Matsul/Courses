import { NextPage } from 'next';
import { SideBarProps } from './SideBar.props';


export const SideBar: NextPage<SideBarProps> = ({ ...props }) => (
  <nav {...props}>
    SideBar
  </nav>
)


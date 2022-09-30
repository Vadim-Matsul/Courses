import { NextPage } from 'next';
import { SideBarProps } from './SideBar.props';
import { Menu, Label, Search } from '../'
import stls from './SideBar.module.css';
import classNames from 'classnames';

export const SideBar: NextPage<SideBarProps> = ({ className, ...props }) => {

  const SideBarClass = classNames(className, stls.sideBar)

  return (
    <div className={SideBarClass} {...props}>
      <Label />
      <Search />
      <Menu />
    </div>
  )
}



import { NextPage } from 'next';
import { MenuProps } from './Menu.props';
import stls from './Menu.module.css';
import MenuFirstLevel from './MenuLevels/Menu-FirstLevel';

export const Menu: NextPage<MenuProps> = ({ ...props }) => {

  return (
    <nav className={stls.menu} {...props} role='navigation' >
      <MenuFirstLevel />
    </nav>
  )
}

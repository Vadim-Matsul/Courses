import classNames from 'classnames'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ServicesCloud } from '../../../components/svg/svg-components/ServicesCloud/ServicesCloud'
import { UndergraduateHelmet } from '../../../components/svg/svg-components/UndergraduateHelmet/UndergraduateHelmet'
import { CATEGORY, MenuDataRoutes, MenuDataTitle } from '../../../const'
import { MyContext } from '../../../context/AppContext'
import { MenuData, MenuItem } from '../../../types/menu.types'
import stls from '../Menu.module.css';
import { MenuThirdLevel } from './Menu-ThirdLevel'

interface MenuSecondLevelProps {
  menu: MenuItem[],
  route: MenuDataRoutes,
}

export const MenuSecondLevel: NextPage<MenuSecondLevelProps> = ({ menu, route }) => {

  const { setMenu } = useContext(MyContext);

  function handlerOpenCategory(category_name: string): void {
    const updatedMenu = menu.map(category => {
      category._id.secondCategory === category_name
        ? category.isOpened = !category.isOpened
        : category.isOpened = false

      return category;
    })
    setMenu && setMenu(updatedMenu)
  }

  return (
    <div className={stls.secondLevelBlock}>
      {menu.map(category => {

        return (
          <div key={category._id.secondCategory} >
            <span
              className={stls.secondLevel}
              onClick={() => handlerOpenCategory(category._id.secondCategory)}
            >{category._id.secondCategory.toUpperCase()}</span>
            <MenuThirdLevel category={category} route={route} />
          </div>
        )
      })}
    </div>
  )

}
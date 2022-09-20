import classNames from 'classnames'
import { NextPage } from 'next'
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
  route: MenuDataRoutes
}

export const MenuSecondLevel: NextPage<MenuSecondLevelProps> = ({ menu, route }) => {

  return (
    <div className={stls.secondLevelBlock}>
      {menu.map(category => {

        return (
          <div key={category._id.secondCategory} >
            <span className={stls.secondLevel} >{category._id.secondCategory.toUpperCase()}</span>
            <MenuThirdLevel category={category} route={route} />
          </div>
        )
      })}
    </div>
  )

}
import classNames from 'classnames'
import { NextPage } from 'next'
import { useContext } from 'react'
import { ServicesCloud } from '../../../components/svg/svg-components/ServicesCloud/ServicesCloud'
import { UndergraduateHelmet } from '../../../components/svg/svg-components/UndergraduateHelmet/UndergraduateHelmet'
import { CATEGORY, MenuDataRoutes, MenuDataTitle } from '../../../const'
import { MyContext } from '../../../context/AppContext'
import { MenuData, MenuItem, Page } from '../../../types/menu.types'
import stls from '../Menu.module.css';

interface MenuThirdLevelProps {
  category: MenuItem,
  route: MenuDataRoutes
}

export const MenuThirdLevel: NextPage<MenuThirdLevelProps> = ({ category, route }) => {

  const thirdLevelBlock = classNames(stls.thirdLevelBlock, {
    [stls.thirdLevelBlockActive]: category.isOpened
  })

  return (
    <div className={thirdLevelBlock}>
      {category.pages.map(page => {
        const thirdLevelClass = classNames(stls.thirdLevel, {
          [stls.thirdLevelActive]: false //route
        })

        return (
          <a
            key={page._id}
            className={thirdLevelClass}
            href={route + page.alias}
          >
            {page.alias}
          </a>
        )

      })}
    </div>
  )

}
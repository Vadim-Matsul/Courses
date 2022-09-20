import classNames from 'classnames'
import { useContext } from 'react'
import { ServicesCloud, UndergraduateHelmet } from '../../../components/svg'
import { CATEGORY, MenuDataRoutes, MenuDataTitle } from '../../../const'
import { MyContext } from '../../../context/AppContext'
import { MenuData } from '../../../types/menu.types'
import stls from '../Menu.module.css';
import { MenuSecondLevel } from './Menu-SecondLevel'

export const MenuFirstLevel = () => {
  const { menu, firstCategory } = useContext(MyContext)
  const firstLevelData: MenuData[] = [
    { title: MenuDataTitle.COURSES, id: CATEGORY.COURSES, route: MenuDataRoutes.COURSES, icon: UndergraduateHelmet },
    { title: MenuDataTitle.SERVICES, id: CATEGORY.SERVIСES, route: MenuDataRoutes.SERVICES, icon: ServicesCloud }
  ]

  return (
    <>
      {firstLevelData.map(menuTitle => {

        const shouldShow = firstCategory === menuTitle.id;
        const firstLevelClass = classNames(stls.firstLevel, {
          [stls.firstLevelActive]: shouldShow
        })

        return (
          <div key={menuTitle.id}>
            <a href={menuTitle.route}>
              <div className={firstLevelClass}>
                <menuTitle.icon />
                <span>{menuTitle.title}</span>
              </div>
            </a>
            {shouldShow && <MenuSecondLevel menu={menu} route={menuTitle.route} />}
          </div>
        )
      })}
    </>
  )

}
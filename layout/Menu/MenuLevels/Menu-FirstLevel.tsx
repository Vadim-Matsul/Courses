import classNames from 'classnames'
import Link from 'next/link'
import { useContext } from 'react'
import { firstLevelData } from '../../../const';
import { MyContext } from '../../../context/AppContext'
import stls from '../Menu.module.css';
import { MenuSecondLevel } from './Menu-SecondLevel'

export const MenuFirstLevel = () => {
  const { menu, firstCategory } = useContext(MyContext)


  return (
    <>
      {firstLevelData.map(menuTitle => {

        const shouldShow = firstCategory === menuTitle.id;
        const firstLevelClass = classNames(stls.firstLevel, {
          [stls.firstLevelActive]: shouldShow
        })

        return (
          <div key={menuTitle.id}>
            <Link href={menuTitle.route}>
              <a>
                <div className={firstLevelClass}>
                  <menuTitle.icon />
                  <span>{menuTitle.title}</span>
                </div>
              </a>
            </Link>
            {shouldShow && <MenuSecondLevel menu={menu} route={menuTitle.route} />}
          </div>
        )
      })}
    </>
  )

}
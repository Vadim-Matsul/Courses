import classNames from 'classnames'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
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

  const router = useRouter();

  (function () {

    const currentAlias = router.asPath.split('/').pop();
    const aliasArr = category.pages.map(page => page.alias);

    if (currentAlias && aliasArr.includes(currentAlias)) { category.isOpened = true }
  })()


  const thirdLevelBlock = classNames(stls.thirdLevelBlock, {
    [stls.thirdLevelBlockActive]: category.isOpened
  })



  return (
    <div className={thirdLevelBlock}>
      {category.pages.map(page => {

        const thirdLevelClass = classNames(stls.thirdLevel, {
          [stls.thirdLevelActive]: page.alias === router.asPath.split('/').pop()
        })

        return (
          <Link
            key={page._id}
            href={route + page.alias}
          >
            <a className={thirdLevelClass}>{page.alias}</a>
          </Link>
        )
      })}
    </div>
  )

}
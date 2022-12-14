import { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import { MenuDataRoutes } from '../../../const'
import { MyContext } from '../../../context/AppContext'
import { MenuItem } from '../../../types/menu.types'
import stls from '../Menu.module.css';
import MenuThirdLevel from './Menu-ThirdLevel'
import React from 'react';
import { handleTap } from '../../../utils/helpers'
import { useRouter } from 'next/router'


interface MenuSecondLevelProps {
  menu: MenuItem[],
  route: MenuDataRoutes,
}

const MenuSecondLevel: NextPage<MenuSecondLevelProps> = ({ menu, route }) => {

  const router = useRouter();
  const { setMenu } = useContext(MyContext);
  const [menuState, setMenuState] = useState<MenuItem[]>(menu)

  function handlerOpenCategory(category_name: string): void {
    const updatedMenu = menu.map(category => {
      category._id.secondCategory === category_name
        ? category.isOpened = !category.isOpened
        : category.isOpened = false

      return category;
    })
    setMenu && setMenu(updatedMenu)
  }

  menuState.flatMap(category => {
    const aliasS = category.pages.map(aliasBundle => aliasBundle.alias);
    const currentAlias = router.asPath.split('/').pop();
    if (currentAlias && aliasS.includes(currentAlias)) category.isOpened = true
  })


  return (
    <div className={stls.secondLevelBlock}>
      {menuState.map(category => {
        return (
          <div key={category._id.secondCategory}>
            <span
              className={stls.secondLevel}
              onClick={() => handlerOpenCategory(category._id.secondCategory)}
              onKeyDown={evt => handleTap<HTMLSpanElement>(evt, handlerOpenCategory, category._id.secondCategory)}
              tabIndex={0}
              role='button'
              aria-expanded={category.isOpened ?? false}
              aria-label={`Категория ${category._id.secondCategory}, элементов ${category.pages.length}`}
            >{category._id.secondCategory.toUpperCase()}</span>
            <MenuThirdLevel category={category} route={route} />
          </div>
        )
      })}
    </div >
  )
}

export default React.memo(MenuSecondLevel);

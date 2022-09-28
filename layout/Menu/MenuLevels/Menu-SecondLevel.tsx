import { NextPage } from 'next'
import { useContext, useEffect, useState } from 'react'
import { MenuDataRoutes } from '../../../const'
import { MyContext } from '../../../context/AppContext'
import { MenuItem } from '../../../types/menu.types'
import stls from '../Menu.module.css';
import MenuThirdLevel from './Menu-ThirdLevel'
import React from 'react';

interface MenuSecondLevelProps {
  menu: MenuItem[],
  route: MenuDataRoutes,
}

export const MenuSecondLevel: NextPage<MenuSecondLevelProps> = ({ menu, route }) => {

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


  function handleTapSpace(evt: React.KeyboardEvent<HTMLSpanElement>, categoryTitle: string): void {
    if (evt && evt.code === 'Space' || evt.code === 'Enter') {
      evt.preventDefault();
      handlerOpenCategory(categoryTitle);
    }
  }

  return (
    <div className={stls.secondLevelBlock}>
      {menuState.map(category => {

        

        return (
          <div
            key={category._id.secondCategory}
          >
            <span
              className={stls.secondLevel}
              onClick={() => handlerOpenCategory(category._id.secondCategory)}
              onKeyDown={evt => handleTapSpace(evt, category._id.secondCategory)}
              tabIndex={0}
            >{category._id.secondCategory.toUpperCase()}</span>
            <MenuThirdLevel category={category} route={route} />
          </div>
        )
      })}
    </div >
  )

}
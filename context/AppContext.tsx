import { NextPage } from 'next';
import { createContext, PropsWithChildren, useState } from 'react';
import { CATEGORY } from '../const';
import { MenuItem } from '../types/menu.types';

export interface MyContextType {
  firstCategory: CATEGORY,
  menu: MenuItem[],
  setMenu?: (updatedMenu: MenuItem[]) => void
}

export const MyContext = createContext<MyContextType>({
  firstCategory: CATEGORY.COURSES,
  menu: []
})

export const AppContextProvider: NextPage<PropsWithChildren<MyContextType>> = ({ children, menu, firstCategory }) => {
  const [menuState, setMenuState] = useState<MenuItem[]>(menu)
  const setMenu = (updatedMenu: MenuItem[]) => {
    setMenuState(updatedMenu)
  }

  return (
    <MyContext.Provider value={{ menu: menuState, firstCategory: firstCategory, setMenu }}>
      {children}
    </MyContext.Provider>
  )
}
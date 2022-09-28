import classNames from 'classnames'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuDataRoutes } from '../../../const'
import { MenuItem } from '../../../types/menu.types'
import { motion } from 'framer-motion';
import stls from '../Menu.module.css';
import { useEffect, useLayoutEffect, useMemo } from 'react'


interface MenuThirdLevelProps {
  category: MenuItem,
  route: MenuDataRoutes
}

const MenuThirdLevel: NextPage<MenuThirdLevelProps> = ({ category, route }) => {

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'afterChildren',
        staggerChildren: 0.05
      }
    },
    hidden: {
      marginBottom: 10
    }
  }

  const variantsChildren = {
    visible: {
      opacity: 1,
      height: 29
    },
    hidden: {
      opacity: 0,
      height: 0
    }
  }

  const router = useRouter();

  const thirdLevelBlock = classNames(stls.thirdLevelBlock)

  const categoryAliaSarr = useMemo(() => category.pages.map(aliasBundle => aliasBundle.alias), [category]);
  const currentAlias = router.asPath.split('/').pop();

  if (currentAlias && categoryAliaSarr.includes(currentAlias)) {
    category.isOpened = true
  }



  return (
    <motion.div
      variants={variants}
      layout
      initial={category.isOpened ? 'visible' : 'hidden'}
      animate={category.isOpened ? 'visible' : 'hidden'}
      className={thirdLevelBlock}
    >
      {category.pages.map(page => {

        const thirdLevelClass = classNames(stls.thirdLevel, {
          [stls.thirdLevelActive]: `${route}${page.alias}` == router.asPath
        });


        return (
          <motion.div
            key={page._id}
            variants={variantsChildren}
          >
            <Link
              href={route + page.alias}
            >
              <a
                className={thirdLevelClass}
                tabIndex={category.isOpened ? 0 : -1}
              >{page.alias}</a>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )

}

export default MenuThirdLevel;
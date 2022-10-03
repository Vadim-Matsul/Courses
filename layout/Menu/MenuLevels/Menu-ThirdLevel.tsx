import classNames from 'classnames'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuDataRoutes } from '../../../const'
import { MenuItem } from '../../../types/menu.types'
import { motion, useReducedMotion } from 'framer-motion';
import stls from '../Menu.module.css';
import { handleTap } from '../../../utils/helpers'
import React from 'react'


interface MenuThirdLevelProps {
  category: MenuItem,
  route: MenuDataRoutes
}

const MenuThirdLevel: NextPage<MenuThirdLevelProps> = ({ category, route }) => {

  const stopAnimation = useReducedMotion();
  const router = useRouter();

  const variants = {
    visible: {
      marginBottom: 20,
      transition: {
        when: 'afterChildren',
        staggerChildren: stopAnimation ? 0 : 0.05,
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



  const thirdLevelBlock = classNames(stls.thirdLevelBlock)
  const togglePathOnTap = (path: string) => router.push(path);


  return (
    <motion.div
      variants={variants}
      layout={stopAnimation ? false : true}
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
                aria-label={
                  `${route}${page.alias}` == router.asPath
                    ? `Текущая страница ${page.alias}`
                    : page.alias
                }
                aria-current={`${route}${page.alias}` == router.asPath} // не читается всеми screenReader
                onKeyDown={evt => handleTap<HTMLAnchorElement>(evt, togglePathOnTap, route.concat(page.alias))}
              >{page.alias}</a>
            </Link>
          </motion.div>
        )
      })}
    </motion.div>
  )

}

export default MenuThirdLevel;
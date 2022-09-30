import { motion, useReducedMotion } from 'framer-motion';
import { NextPage } from 'next';
import { ButtonIcon } from '../../components/Primitives/ButtonIcon/ButtonIcon';
import { Label } from '../Label/Label';
import { SideBar } from '../SideBar/SideBar';
import { HeaderProps } from './Header.props';
import stls from './Header.module.css';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useRouter } from 'next/router';

export const Header: NextPage<HeaderProps> = ({ className, ...props }) => {

  const [isOpened, setIsOpened] = useState<boolean>(false);
  const stopAnimation = useReducedMotion();
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false)
  }, [router])

  const variants = {
    hidden: {
      opacity: stopAnimation ? 0 : 1,
      x: '100%',
      transition: {
        stiffness: stopAnimation ? 0 : 100,
        duration: stopAnimation ? 1.5 : 0.5
      }
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: stopAnimation ? 0 : 100,
        duration: stopAnimation ? 1.5 : 0.8
      }
    }
  }

  const headerClass = classNames(stls.header, className);
  console.log(isOpened);

  return (
    <header {...props} className={headerClass} >
      <Label className={stls.label} />
      <ButtonIcon
        icon='Menu'
        className={stls.menu}
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={stls.mobileMenu}
        initial={'hidden'}
        animate={isOpened ? 'visible' : 'hidden'}
        variants={variants}
      >
        <ButtonIcon
          icon='Close'
          className={stls.close}
          onClick={() => setIsOpened(false)}
        />
        <SideBar />
      </motion.div>
    </header>
  );
};


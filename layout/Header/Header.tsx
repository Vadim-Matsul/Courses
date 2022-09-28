import { motion } from 'framer-motion';
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
  const router = useRouter();

  useEffect(() => {
    setIsOpened(false)
  }, [router])

  const variants = {
    hidden: {
      x: '100%'
    },
    visible: {
      x: 0,
      transition: {
        stiffness: 100
      }
    }
  }

  const headerClass = classNames(stls.header, className);

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


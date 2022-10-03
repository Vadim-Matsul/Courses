import { NextPage } from 'next';
import stls from './Up.module.css';
import { ArrowUp } from '../../svg';
import { motion, useAnimation } from 'framer-motion';
import { useScroll } from '../../../hooks/useScroll';
import { MutableRefObject, useEffect, useState } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

interface UpProps {
  focusBlock: MutableRefObject<HTMLDivElement>
}

export const Up = ({ focusBlock }: UpProps): JSX.Element => {
  const control = useAnimation()
  const Yposition = useScroll();

  useEffect(() => {
    control.start({
      opacity: Yposition / document.body.scrollHeight
    })
  }, [Yposition, control])

  function handleScreenUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    focusBlock.current.focus()
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={control}
      onClick={handleScreenUp}
    >
      <ButtonIcon aria-label='Пролистать вверх страницы' appearance icon='ArrowUp' className={stls.scrollUp} />
    </motion.div>
  );
}

import { NextPage } from 'next';
import stls from './Up.module.css';
import { ArrowUp } from '../../svg';
import { motion, useAnimation } from 'framer-motion';
import { useScroll } from '../../../hooks/useScroll';
import { useEffect } from 'react';
import { ButtonIcon } from '../ButtonIcon/ButtonIcon';

export const Up = (): JSX.Element => {
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
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={control}
      onClick={handleScreenUp}
    >
      <ButtonIcon appearance icon='ArrowUp' className={stls.scrollUp} />
    </motion.div>
  );
}

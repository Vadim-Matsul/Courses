import classNames from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import React, { useState } from 'react';
import Raiting from '../../../Raiting/Raiting';
import { ButtonToggle } from '../product_button-toggle';

interface ProductAdvantagesBlockProps {
  buttonClass: string,
  blockClass: string,
  blockClassOpen: string,

  advantages: string | undefined
}

const ProductAdvantagesBlock: React.FC<ProductAdvantagesBlockProps> = (props) => {

  const { buttonClass, blockClass: advantages_c, blockClassOpen: advantages_open_c, advantages } = props;

  const [advantagesOpen, setAdvantagesOpen] = useState<boolean>(false);

  const AdvantagesClass = classNames(advantages_c, { [advantages_open_c]: advantagesOpen });
  const stopAnimation = useReducedMotion();

  const changeShowAdvantages = () => setAdvantagesOpen(!advantagesOpen)


  return (
    <>
      {advantages &&
        <>
          <ButtonToggle
            buttonToggleClass={buttonClass}
            onClick={changeShowAdvantages}
          >Преимущества</ButtonToggle >

          <motion.div
            layout={stopAnimation ? false : true}
            transition={{ duration: 0.2 }}
            className={AdvantagesClass}
          >
            <div>Преимущества</div>
            {advantages}
          </motion.div>
        </>
      }
    </>
  );
};

export default React.memo(ProductAdvantagesBlock);

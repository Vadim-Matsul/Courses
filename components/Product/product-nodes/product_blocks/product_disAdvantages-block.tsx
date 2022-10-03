import classNames from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import React, { useState } from 'react';
import Raiting from '../../../Raiting/Raiting';
import { ButtonToggle } from '../product_button-toggle';

interface ProductDisAdvantagesBlockProps {
  buttonClass: string,
  blockClass: string,
  blockClassOpen: string,

  disAdvantages: string | undefined
}

const ProductDisAdvantagesBlock: React.FC<ProductDisAdvantagesBlockProps> = (props) => {

  const { buttonClass, blockClass: disAdvantages_c, blockClassOpen: disAdvantages_open_c, disAdvantages } = props;

  const [disAdvantagesOpen, setDisAdvantagesOpen] = useState<boolean>(false);

  const DisAdvantagesClass = classNames(disAdvantages_c, { [disAdvantages_open_c]: disAdvantagesOpen });
  const stopAnimation = useReducedMotion();

  const changeShowDisadvantages = () => setDisAdvantagesOpen(!disAdvantagesOpen)


  return (
    <>
      {disAdvantages &&
        <>
          <ButtonToggle
            buttonToggleClass={buttonClass}
            onClick={changeShowDisadvantages}
          >Недостатки</ButtonToggle >

          <motion.div
            layout={stopAnimation ? false : true}
            transition={{ duration: 0.2 }}
            className={DisAdvantagesClass}
          >
            <div>Недостатки</div>
            {disAdvantages}
          </motion.div>
        </>
      }
    </>
  );
};

export default React.memo(ProductDisAdvantagesBlock);

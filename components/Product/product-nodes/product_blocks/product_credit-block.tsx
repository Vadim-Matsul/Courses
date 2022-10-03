import classNames from 'classnames';
import { motion, useReducedMotion } from 'framer-motion';
import React, { useState } from 'react';
import { getFormatter } from '../../../../utils/helpers';
import { ButtonToggle } from '../product_button-toggle';

interface ProductCreditBlockProps {
  buttonClass: string,
  blockClass: string,
  blockClassOpen: string,

  credit: number,
}

const ProductCreditBlock: React.FC<ProductCreditBlockProps> = (props) => {

  const { buttonClass, blockClass: credit_c, blockClassOpen: credit_open_c, credit } = props;

  const [creditOpen, setCreditOpen] = useState<boolean>(false);
  const formatter = getFormatter();
  const stopAnimation = useReducedMotion();

  const CreditClass = classNames(credit_c, { [credit_open_c]: creditOpen });

  const changeShowCredit = () => setCreditOpen(!creditOpen);

  return (
    <>
      <ButtonToggle
        buttonToggleClass={buttonClass}
        onClick={changeShowCredit}
      >В кредит</ButtonToggle>
      <motion.span
        className={CreditClass}
        layout={stopAnimation ? false : true}
      >
        <span className='visually-aria-hidden'>Кредит</span>
        {formatter.format(credit)}<span>/мес</span>
      </motion.span>
    </>
  );
};

export default React.memo(ProductCreditBlock);

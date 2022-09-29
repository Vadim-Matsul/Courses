import { SkipLinkProps } from './SkipLink.props';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '..';
import React from 'react';

const SkipLink = React.forwardRef<HTMLAnchorElement, SkipLinkProps>((props, ref) => {
  const { focusBlock, ...skipLinkProps } = props;
  const [helperForTub, setHelperForTub] = useState<boolean>(false);

  function handleSkipLink(evt: React.KeyboardEvent<HTMLAnchorElement>) {
    if (evt && evt.code === 'Space' || evt.code === 'Enter') {
      evt.preventDefault()
      focusBlock.current.focus({
        preventScroll: true
      })
      setHelperForTub(false)
    }
    if (evt && evt.code === 'Tab') setHelperForTub(false);
  }

  const variants = {
    hidden: {
      height: 0,
      overflow: 'hidden',
      y: '50%'
    },
    visible: {
      height: 'auto',
      y: 0
    }
  }

  return (
    <motion.a
      initial={'hidden'}
      animate={helperForTub ? 'visible' : 'hidden'}
      variants={variants}
      onFocus={() => setHelperForTub(true)}
      onKeyDown={handleSkipLink}
      tabIndex={1}
      {...skipLinkProps}
      ref={ref}
    >
      <Button appearance tabIndex={-1}>Перейти к контенту</Button>
    </motion.a>
  );
});

SkipLink.displayName = 'SkipLink';
export { SkipLink }
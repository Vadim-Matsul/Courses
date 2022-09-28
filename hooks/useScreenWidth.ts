import { useEffect, useState } from 'react';

export const useScreenWidth = (): number => {
  const [innerWidth, setInnerWidth] = useState<number>(0);
  const isBrowser = typeof window !== 'undefined';

  function getActualWidth() {
    const width = isBrowser ? window.innerWidth : 0;
    setInnerWidth(width)
  }

  useEffect(() => {
    window.addEventListener('resize', getActualWidth, true)
    return window.removeEventListener('resize', getActualWidth)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return innerWidth;
}
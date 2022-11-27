import { useEffect, useState } from 'react'
import { throttle } from '../utils/helpers';


export const useScroll = (): number => {
  const [Yposition, setYposition] = useState<number>(0);
  const isBrowser: boolean = typeof window !== 'undefined';

  const handleScroll = throttle(function () {
    let Browser_Y: number = 0;
    if (isBrowser) Browser_Y = window.scrollY;
    setYposition(Browser_Y);
  }, 200);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });

    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return Yposition;
}

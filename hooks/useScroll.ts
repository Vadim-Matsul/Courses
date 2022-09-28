import { useEffect, useState } from 'react'



export const useScroll = (): number => {

  const [Yposition, setYposition] = useState<number>(0);

  const isBrowser: boolean = typeof window !== 'undefined';

  function handleScroll() {
    const Browser_Y = isBrowser ? window.scrollY : 0;
    setYposition(Browser_Y);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', handleScroll);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return Yposition;
}

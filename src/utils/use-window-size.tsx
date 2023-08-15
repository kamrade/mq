import { useState, useLayoutEffect } from 'react';
import { debounce } from 'lodash';

export interface IWindowSize {
  width: number;
  height: number;
}

export const useWindowSize: (debounceTime?: number) => IWindowSize = (debounceTime) => {

  const [windowSize, setWindowSize] = useState<IWindowSize>({
    width: 0,
    height: 0
  });

  useLayoutEffect(() => {

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    const handleResizeDebounced = debounceTime ? debounce(handleResize, debounceTime) : handleResize;

    window.addEventListener('resize', handleResizeDebounced);

    handleResize();

    return () => window.removeEventListener('resize', handleResizeDebounced);


  }, [debounceTime]);

  return windowSize;

}

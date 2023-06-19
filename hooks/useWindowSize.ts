import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleWindowResize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();

    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return windowSize;
}

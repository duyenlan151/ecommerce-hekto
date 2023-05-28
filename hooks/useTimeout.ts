import React, { useEffect } from 'react';

export const useTimeout = (callback, delay) => {
  const timeoutRef = React.useRef(null);
  const savedCallback = React.useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay && delay !== 0) {
      return;
    }
    const tick = () => savedCallback.current();
    const id = setTimeout(tick, delay);

    return () => clearTimeout(id);
  }, [delay]);

  return timeoutRef;
};

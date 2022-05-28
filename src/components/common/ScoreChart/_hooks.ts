import { useState, useEffect, useRef } from 'react';

export const useRectBound = <T extends HTMLElement>() => {
  const boundRef = useRef<T>(null);
  const [boundHeight, setBoundHeight] = useState(0);
  const [boundWidth, setBoundWidth] = useState(0);

  useEffect(() => {
    if (!boundRef.current) return;
    setBoundHeight(boundRef.current.offsetHeight);
    setBoundWidth(boundRef.current.offsetWidth);
  }, [boundRef, setBoundHeight, setBoundWidth]);

  return { boundRef, boundHeight, boundWidth };
};

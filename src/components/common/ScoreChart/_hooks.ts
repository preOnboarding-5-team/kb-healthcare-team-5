import { useState, useEffect, useRef, RefObject } from 'react';

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

export const useIntersectionObserver = <
  T extends HTMLElement,
  S extends HTMLElement
>(
  containerRef: RefObject<T> | undefined,
  boundRef: RefObject<S>
) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleObserve = (
    [entry]: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    if (entry.isIntersecting) {
      setIsVisible(true);
      observer.unobserve(entry.target);
    }
  };

  useEffect(() => {
    let observer: IntersectionObserver;

    if (containerRef?.current && boundRef.current) {
      const options = {
        root: containerRef.current,
        threshold: 0.75,
      };
      observer = new IntersectionObserver(handleObserve, options);
      observer.observe(boundRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [containerRef, boundRef]);

  return { isVisible };
};

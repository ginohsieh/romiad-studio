import { useEffect, useState } from 'react';

export default function useOnScreen(ref, { rootMargin = '0px', once = false } = {}) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (once && isVisible) {
      return () => {}
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin
      }
    );

    const currentElement = ref?.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      observer.unobserve(currentElement);
    };
  }, [isVisible]);
  return isVisible;
}

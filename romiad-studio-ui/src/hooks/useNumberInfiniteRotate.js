import { useEffect, useState } from 'react';

export default function useNumberInfiniteRotate({ start, end, interval = 3000 } = {}) {
  const [currentNumber, setCurrentNumber] = useState(start);
  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentNumber((prev) => {
        if (prev >= end) {
          return start;
        }
        return prev + 1;
      });
    }, interval);

    return () => {
      clearInterval(intervalID);
    };
  }, [interval]);

  return currentNumber;
}

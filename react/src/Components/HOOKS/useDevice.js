import { useEffect, useState } from 'react';

export function useDevice() {
  const [device, setDevice] = useState('desktop');

  useEffect(() => {
    const check = () => {
      const width = window.innerWidth;

      if (width <= 767) setDevice('mobile');
      else if (width <= 1023) setDevice('tablet');
      else setDevice('desktop');
    };

    check();
    window.addEventListener('resize', check);

    return () => window.removeEventListener('resize', check);
  }, []);

  return device; // "mobile" | "tablet" | "desktop"
}

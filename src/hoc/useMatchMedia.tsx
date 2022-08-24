import { useState, useEffect } from 'react';

export const useMatchMedia = (mediaQuery: string, initialValue: boolean) => {
  const [isMatching, setIsMatching] = useState<boolean>(initialValue);
  useEffect(() => {
    const watcher = window.matchMedia(mediaQuery);
    setIsMatching(watcher.matches);
    const listener = (matches:any) => {
      setIsMatching(matches.matches);
    };
    if (watcher.addEventListener) {
      watcher.addEventListener('change', listener);
    } else {
      watcher.addListener(listener);
    }
    return () => {
      if (watcher.removeEventListener) {
        return watcher.removeEventListener('change', listener);
      } else {
        return watcher.removeListener(listener);
      }
    };
  }, [mediaQuery]);

  return isMatching;
};
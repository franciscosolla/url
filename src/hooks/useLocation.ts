import { useState, useEffect } from 'react';

/**
 * Custom hook that returns the current location object and updates it whenever the URL changes.
 * @returns The current location object.
 */
export function useLocation() {
  const [location, setLocation] = useState(window.location);

  useEffect(() => {
    function handleLocationChange() {
      setLocation(window.location);
    }

    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return location;
}
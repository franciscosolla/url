import { useLocation } from "./useLocation";

/**
 * Custom hook that returns the current pathname from the browser's location.
 * @returns The current pathname.
 */
export function usePath() {
  const { pathname } = useLocation();
  return pathname.slice(1);
}
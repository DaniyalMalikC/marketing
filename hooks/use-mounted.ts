import { useEffect, useState } from "react";

/**
 * Hook to check if component is mounted
 * Useful for preventing hydration errors with client-side only features
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

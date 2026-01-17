import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface LoadingContextType {
  isLoading: boolean;
  isReady: boolean;
}

const LoadingContext = createContext<LoadingContextType>({
  isLoading: true,
  isReady: false,
});

export function useLoading() {
  return useContext(LoadingContext);
}

interface LoadingProviderProps {
  children: ReactNode;
  loadingDuration?: number;
}

export function LoadingProvider({ 
  children, 
  loadingDuration = 1500 
}: LoadingProviderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Hide loader after duration
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, loadingDuration);

    // Set ready state slightly after loading ends to trigger tile animations
    const readyTimer = setTimeout(() => {
      setIsReady(true);
    }, loadingDuration + 100);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(readyTimer);
    };
  }, [loadingDuration]);

  return (
    <LoadingContext.Provider value={{ isLoading, isReady }}>
      {children}
    </LoadingContext.Provider>
  );
}

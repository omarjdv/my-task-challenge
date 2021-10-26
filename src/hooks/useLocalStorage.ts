import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [value, setValue] = useState<T>(() => {
      const value = localStorage.getItem(key);
      if (!value) return initialValue;
  
      try {
        const parseValue = JSON.parse(value);
        return parseValue as T;
      } catch (err) {
        return initialValue;
      }
    });
  
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);
  
    return [value, setValue] as const;
  }
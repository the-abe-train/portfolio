import { useState, useEffect } from "react";

function getStorageValue<T>(key: string, defaultValue?: T): T {
  const saved = localStorage.getItem(key);
  if (saved) {
    return JSON.parse(saved);
  } else if (defaultValue) {
    return defaultValue;
  } else {
    throw new Error("Local storage error");
  }
}

export default function useLocalStorage<T>(
  key: string,
  defaultValue: T
): [T, React.Dispatch<React.SetStateAction<T>>] {
  let [value, setValue] = useState(() => {
    return getStorageValue<T>(key, defaultValue);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, defaultValue]);

  return [value, setValue];
}

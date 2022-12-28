import {useEffect, useState} from "react";




export const useLocalStorage = (storageKey, templateValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem(storageKey)) ?? templateValue;
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(state));
  }, [storageKey, state])

  return [state, setState]
};

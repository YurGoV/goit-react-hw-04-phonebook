import {useEffect, useState} from "react";




export const useLocalStorage = (templateValue) => {
  const [state, setState] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? templateValue;
  });

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(state));
  }, [state])

  return [state, setState]
};

import { useContext } from 'react';
import { createContext } from 'react';

export const FilterContext = createContext({});

export const useFilterContext = () => {
  const myContext = useContext(FilterContext);
  return myContext;
};

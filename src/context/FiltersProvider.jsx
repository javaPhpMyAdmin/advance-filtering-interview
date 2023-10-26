import { useEffect, useReducer } from 'react';
import { useFilterType, useQuery } from '../hooks';
import { filterReducer, FilterContext, initialState } from '../context';
import {
  BY_CATEGORY,
  BY_COLOR,
  BY_COMPANY,
  BY_PRICE,
  FILTER_BY_CATEGORY,
  FILTER_BY_COLOR,
  FILTER_BY_COMPANY,
  FILTER_BY_PRICE,
  FILTER_BY_SEARCH,
} from './types';

export const FiltersProvider = ({ children }) => {
  const { query, updateQuery } = useQuery();
  const { updateCategoryType, selectedCategory, filterBy } = useFilterType();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  const handleInputChange = (evt) => {
    updateQuery(evt.target.value);
    dispatch({ type: FILTER_BY_SEARCH, payload: query });
  };

  const handleFiltersByCategory = (evt) => {
    updateCategoryType(evt.target.value, BY_CATEGORY);
  };

  const handleFiltersByPrice = (evt) => {
    updateCategoryType(evt.target.value, BY_PRICE);
  };

  const handleFiltersByColor = (evt) => {
    updateCategoryType(evt.target.value, BY_COLOR);
  };

  const handleButtonsChange = (evt) => {
    updateCategoryType(evt.target.value, BY_COMPANY);
  };

  useEffect(() => {
    switch (filterBy) {
      case BY_CATEGORY:
        dispatch({ type: FILTER_BY_CATEGORY, payload: selectedCategory });
        break;
      case BY_PRICE:
        dispatch({ type: FILTER_BY_PRICE, payload: selectedCategory });
        break;
      case BY_COLOR:
        dispatch({ type: FILTER_BY_COLOR, payload: selectedCategory });
        break;
      case BY_COMPANY:
        dispatch({ type: FILTER_BY_COMPANY, payload: selectedCategory });
        break;
      default:
        break;
    }
  }, [selectedCategory, filterBy]);

  return (
    <FilterContext.Provider
      value={{
        products: state?.products,
        filteredProducts: state?.filteredProducts,
        query,
        handleInputChange,
        handleFiltersByCategory,
        handleFiltersByPrice,
        handleFiltersByColor,
        handleButtonsChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

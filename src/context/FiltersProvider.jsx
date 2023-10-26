import { FilterContext } from './FiltersContex';
import { data } from '../db/data';
import { useCategory, useQuery, useFilterProducts } from '../hooks';

export const FiltersPrvider = ({ children }) => {
  const { query, updateQuery } = useQuery();
  const { updateCategoryType, selectedCategory } = useCategory();
  const { filteredProducts } = useFilterProducts(data, selectedCategory, query);

  const handleInputChange = (evt) => {
    updateQuery(evt.target.value);
  };

  const handleCategoryChange = (evt) => {
    updateCategoryType(evt.target.value);
  };

  const handleButtonsChange = (evt) => {
    updateCategoryType(evt.target.value);
  };

  return (
    <FilterContext.Provider
      value={{
        filteredProducts,
        query,
        handleInputChange,
        handleCategoryChange,
        handleButtonsChange,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

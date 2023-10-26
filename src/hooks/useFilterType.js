import { useState } from 'react';

export const useFilterType = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filterBy, setFilterType] = useState('');

  const updateCategoryType = (category, filterType) => {
    setSelectedCategory(category);
    setFilterType(filterType);
  };

  return { updateCategoryType, selectedCategory, filterBy };
};

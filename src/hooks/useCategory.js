import { useState } from 'react';

export const useCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const updateCategoryType = (category) => {
    setSelectedCategory(category);
  };

  return { updateCategoryType, selectedCategory };
};

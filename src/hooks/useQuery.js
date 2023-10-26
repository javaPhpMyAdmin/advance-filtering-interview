import { useState } from 'react';

export const useQuery = () => {
  const [query, setQuery] = useState('');

  const updateQuery = (inputText) => {
    setQuery(inputText);
  };

  return { query, updateQuery };
};

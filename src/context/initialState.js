import { data } from '../db/data';

export const initialState = {
  products: [...data],
  filteredProducts: [],
};

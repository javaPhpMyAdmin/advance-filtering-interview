import {
  FILTER_BY_CATEGORY,
  FILTER_BY_COLOR,
  FILTER_BY_COMPANY,
  FILTER_BY_PRICE,
  FILTER_BY_SEARCH,
  CLEAR_FILTER,
} from './types';

export const filterReducer = (state, action) => {
  switch (action.type) {
    case FILTER_BY_CATEGORY:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (prod) => prod.category === action.payload
        ),
      };
    case FILTER_BY_PRICE:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (prod) => prod.newPrice === action.payload && action.payload !== ''
        ),
      };
    case FILTER_BY_COLOR:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (prod) => prod.color === action.payload
        ),
      };
    case FILTER_BY_COMPANY:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (prod) => prod.company === action.payload
        ),
      };
    case FILTER_BY_SEARCH:
      return {
        ...state,
        filteredProducts: state.products.filter(
          (prod) =>
            prod.title
              .toLocaleLowerCase()
              .indexOf(action.payload?.toLocaleLowerCase()) !== -1
        ),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filteredProducts: [],
      };
    default:
      return state;
  }
};

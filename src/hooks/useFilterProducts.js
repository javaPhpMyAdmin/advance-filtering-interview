export const useFilterProducts = (products, selectedCategory, query) => {
  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query?.toLocaleLowerCase()) !==
      -1
  );
  let filteredProducts = products;

  if (query) {
    filteredProducts = filteredItems;
  }

  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      ({ category, color, company, newPrice, title }) =>
        category === selectedCategory ||
        color === selectedCategory ||
        company === selectedCategory ||
        newPrice === selectedCategory ||
        title === selectedCategory
    );
  }
  return { filteredProducts };
};

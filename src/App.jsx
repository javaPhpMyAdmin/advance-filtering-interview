// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import { Product } from './Products';
import { Recommended } from './Recommended';
import SideBar from './SideBar/SideBar/SideBar';
import { Nav } from './navigation';
import { data } from './db/data';
import { Card } from './components';
import { AiFillStar } from 'react-icons/ai';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState('');

  const handleInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleCategoryChange = (evt) => {
    setSelectedCategory(evt.target.value);
  };

  const handleButtonsChange = (evt) => {
    setSelectedCategory(evt.target.value);
  };

  const filteredItems = data.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  const filterData = (products, selectedCategory, query) => {
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

    return filteredProducts.map(
      ({ img, title, reviews, prevPrice, newPrice }) => (
        <Card
          key={crypto.randomUUID()}
          img={img}
          title={title}
          star={<AiFillStar className="ratings-star" />}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  };

  const results = filterData(data, selectedCategory, query);

  return (
    <>
      <div>
        <SideBar handleCategoryChange={handleCategoryChange} />
        <Nav query={query} handleInputChange={handleInputChange} />
        <Recommended handleButtonsChange={handleButtonsChange} />
        <Product results={results} />
      </div>
    </>
  );
}

export default App;

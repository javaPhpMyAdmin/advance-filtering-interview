// import { useState } from 'react';
import './Index.css';
import { Product } from './Products';
import { Recommended } from './Recommended';
import SideBar from './SideBar/SideBar/SideBar';
import { FiltersPrvider } from './context/FiltersProvider';
import { Nav } from './navigation';

function App() {
  return (
    <>
      <FiltersPrvider>
        <div>
          <SideBar />
          <Nav />
          <Recommended />
          <Product />
        </div>
      </FiltersPrvider>
    </>
  );
}

export default App;

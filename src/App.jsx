// import { useState } from 'react';
import './Index.css';
import { Product } from './Products';
import { Recommended } from './Recommended';
import SideBar from './SideBar/SideBar/SideBar';
import { FiltersProvider } from './context/FiltersProvider';
import { Nav } from './navigation';

function App() {
  return (
    <>
      <FiltersProvider>
        <div>
          <SideBar />
          <Nav />
          <Recommended />
          <Product />
        </div>
      </FiltersProvider>
    </>
  );
}

export default App;

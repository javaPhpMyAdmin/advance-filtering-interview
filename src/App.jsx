// import { useState } from 'react';
import './App.css';
import { Product } from './Products';
import { Recommended } from './Recommended';
import SideBar from './SideBar/SideBar/SideBar';
import { Input, Card, Button } from './components';
import { Nav } from './navigation';

function App() {
  return (
    <>
      <div>
        <SideBar />
        <Nav />
        <Recommended />
        <Product />
      </div>
    </>
  );
}

export default App;

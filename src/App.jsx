// import { useState } from 'react';
import './App.css';
import { Product } from './Products';
import { Input, Card, Button } from './components';
import { Nav } from './navigation';

function App() {
  return (
    <>
      <div>
        <Input />
        <Card />
        <Button />
        <Nav />
        <Product />
      </div>
    </>
  );
}

export default App;

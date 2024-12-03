import React, { useState } from 'react';
import './App.css';
import Banner from './Banner';
import Footer from './Footer';
import Navbar from './Navbar';
import Products from './Products';

function App() {
  const [showCategoryToggle, setCategoryToggle] = useState(false);
  const handleClickOnNavBar = () => {
    setCategoryToggle(!showCategoryToggle);
  }
  return (
    <div className="App">
      <Navbar handleClickOnNavBar={handleClickOnNavBar} />
      <Banner />
      <Products showCategoryToggle={showCategoryToggle}  />
      <Footer />
    </div>
  );
}

export default App;

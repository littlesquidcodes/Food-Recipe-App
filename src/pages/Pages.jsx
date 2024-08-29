import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched'; 
import Recipe from './Recipe';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './Favorites';
import Page404 from './404';


function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      {/* Add the ':type' parameter to the Cuisine route */}
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} /> {/* Add this route */}
      <Route path="/recipe/:id" element={<Recipe />} />
	    <Route path="*" element={<Page404 />} />
    </Routes>
  );
}




export default Pages;

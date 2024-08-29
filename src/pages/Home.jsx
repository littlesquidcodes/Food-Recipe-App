import Veggies from "../components/Veggies";  
import Popular from "../components/popular";  
import React from 'react';

function Home() {
  return (
    <div>
      <Veggies />
      <Popular />
    </div>
  );
}

export default Home;  // This function will render the Veggies and Popular components on the Home page           
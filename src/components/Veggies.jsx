import React, { useEffect, useState} from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Default theme
import styled from 'styled-components';
import {Link} from 'react-router-dom';

function Veggies() {
  const [veggie, setVeggie] = useState([]); //seteaza un state cu numele popular si o functie setPopular care va schimba valoarea state-ului


    useEffect(() => {
        getVeggie();
    }, []);


    const getVeggie = async () => {

const check = localStorage.getItem('veggie');

if(check){
  setVeggie(JSON.parse(check));
}else {
  const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=dabe172b08514fda98b4647a2d1dc7c9&number=9&tags=vegetarian`);
  const data = await api.json();
  localStorage.setItem('veggie', JSON.stringify(data.recipes)); //salveaza datele in local storage
  setVeggie(data.recipes); //seteaza state-ul cu datele primite de la api
  console.log(data.recipes);
}


       
     
 
    };

    return (
      <div>
        <h3>Veggie Picks</h3>
    
        <Splide
          options={{
            perPage: 4,           // Number of slides to show per page
            arrows: true,         // Show navigation arrows
            pagination: false,    // Hide pagination dots
            drag: 'free',         // Enable free dragging
            gap: '1rem',          // Gap between slides
          }}
        >
          {veggie.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={`/recipe/${recipe.id}`}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
                </Link>
              </Card>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    );
  }

  const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem; 
  margin-top: 20px;

`;

const Card = styled.div`
  width: 18em; 
  height: 20rem; 
  margin: 1rem;
  overflow: hidden; 
  border-radius: 0.6rem; 
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1); 
  position: relative; 
  transition: transform 0.3s ease, box-shadow 0.3s ease;

 
  &:hover {
    transform: scale(1.05); 
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); 
  }

  img {
    width: 100%; 
    height: 100%; 
    object-fit: cover; 
    border-radius: 1rem; 
  }

  p {
    position: absolute;
    bottom: 0; 
    width: 100%; 
    margin: 0;
    padding: 0.5rem;
    font-size: 1rem; 
    font-family: 'Playfair Display', serif; 
    font-weight: 700; 
    color: #fff; 
    text-align: center; 
    text-decoration: none; 
    background: rgba(0, 0, 0, 0.5); 
    border-bottom-left-radius: 0.6rem; 
    border-bottom-right-radius: 0.6rem; 
  }

`;



export default Veggies

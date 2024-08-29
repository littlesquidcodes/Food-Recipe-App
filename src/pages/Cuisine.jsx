import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';
import Recipes from '../recipes';

function Cuisine() {
	
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    try {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=dabe172b08514fda98b4647a2d1dc7c9&cuisine=${name}`);
      const recipes = await data.json();
      setCuisine(recipes.results);
    } catch (error) {
      console.error("Error fetching the cuisine data:", error);
    }
  
  };

  useEffect(() => {
    getCuisine(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <div>
      <Grid>
        {cuisine.map((item) => {
          return (
            <Card key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem;

`;

const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }

  a {
    text-decoration: none;
  }

  h4 {
    text-align: center;
    padding: 1rem;
  }
    h3{
    text-align: left;
    font-size: 1.5rem;
    }

`;

export default Cuisine;

import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {
  const [searchedRecipies, setSearchedRecipies] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=dabe172b08514fda98b4647a2d1dc7c9&query=${name}`);
    const recipes = await data.json();
    setSearchedRecipies(recipes.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return (
    <div>
      {searchedRecipies.length === 0 ? (
        <NoResultsMessage>
          There are no recipes meeting your searched criteria.
        </NoResultsMessage>
      ) : (
        <Grid>
          {searchedRecipies.map((item) => (
            <Card key={item.id}>
              <Link to={`/recipe/${item.id}`}>
                <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          ))}
        </Grid>
      )}
    </div>
  );
}

const NoResultsMessage = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin-top: 2rem;


`;

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


  



`;

export default Searched;

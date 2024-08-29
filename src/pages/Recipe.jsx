import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import styled from 'styled-components';
import React from 'react';
import DOMPurify from 'dompurify';
import { addToFavorites, removeFromFavorites } from './Favorites';

function Recipe() {
  let params = useParams();
  
  const [details, setDetails] = useState({});  
  const [activeTab, setActiveTab] = useState('instructions');

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=dabe172b08514fda98b4647a2d1dc7c9`);
      const detailData = await data.json();
      setDetails(detailData);
    };

    fetchDetails();
  }, [params.id]);

  return (
    <DetailWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
	      <button onClick={() => addToFavorites(params.id)}>Add to favorites</button>
	      <button onClick={() => removeFromFavorites(params.id)}>Remove from favorites</button>
      </div>
      <Info>
        <ButtonWrapper>
          <Button
            className={activeTab === 'instructions' ? 'active' : ''}
            onClick={() => setActiveTab('instructions')}
          >
            Instructions
          </Button>
          <Button
            className={activeTab === 'ingredients' ? 'active' : ''}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </Button>
        </ButtonWrapper>

        {activeTab === 'instructions' && (
          <div>
            <h3>Instructions</h3>
            <p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(details.instructions) }}></p>
          </div>
        )}
        {activeTab === 'ingredients' && (
          <div>
            <h3>Ingredients</h3>
            <ul>
              {details.extendedIngredients && details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
            </ul>
          </div>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex; 
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.5rem;
    line-height: 2.7rem;
  }
  ul {
    margin-top: 2rem;
    font-size: 1.5rem;
  }


`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 2rem;



`;

const Button = styled.button`
  padding: 1.5rem 3rem; 
  color: #313131;
  background: #f1f1f1;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  font-size: 1.2rem; 
  cursor: pointer;
  transition: background 0.3s ease-in-out, color 0.3s ease-in-out; 

  &:hover {
    background: #e0e0e0; 
  }

  &.active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }



`;

const Info = styled.div`
  margin-left: 6rem;
  flex: 1;
`;

export default Recipe;

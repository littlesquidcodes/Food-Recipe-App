import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const favoritesIds = [];

export const addToFavorites = (id) => {
	if(!favoritesIds.find(favId => favId === id)) {
		favoritesIds.push(id);
	}
	console.log(favoritesIds);
}

export const removeFromFavorites = (id) => {
	favoritesIds.forEach((fav, index) => {
		if(fav === id) {
			favoritesIds.splice(index, 1);
		}
	})
	console.log(favoritesIds);
}

const Favorites = () => {
	const [favorites, setFavorites] = React.useState([]);
	
	favoritesIds.forEach(async favId => {
		const data = await fetch(`https://api.spoonacular.com/recipes/${favId}/information?apiKey=dabe172b08514fda98b4647a2d1dc7c9`);
		const detailData = await data.json();
		const newFavs = favorites;
		newFavs.push(detailData);
		setFavorites(newFavs);
	})
	
	useEffect(() => {
		console.log(favorites);
	}, [favorites]);
	
	return (<div>
		<Grid>
			{favorites.map((item) => {
				console.log(item);
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
	</div>)
}

export default Favorites;

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
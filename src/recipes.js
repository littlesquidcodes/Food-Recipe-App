const Recipes = async () => {
	const data = await fetch(`https://api.spoonacular.com/recipes/informationBulk?apiKey=dabe172b08514fda98b4647a2d1dc7c9`);
	
	const recipesData = await data.json();
	
	console.log(recipesData.results);
	
	return recipesData.results;
}

export default Recipes;
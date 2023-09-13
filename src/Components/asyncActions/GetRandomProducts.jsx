export const GetRandomProducts = () => {
  return async function (dispatch) {
    let response = await fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=b31827e8574a44e0ae4737c8ebc42229&addRecipeNutrition=true&addRecipeInformation=true&number=10");
    let data = await response.json();
    dispatch({ type: "ADD_RECEPIES", payload: data.recipes });
  };
};

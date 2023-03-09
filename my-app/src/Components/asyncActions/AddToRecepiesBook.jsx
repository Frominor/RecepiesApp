export const AddToRecepiesBook = (id) => {
  return async function (dispatch) {
    let res = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=b31827e8574a44e0ae4737c8ebc42229&includeNutrition=true`
    );
    let data = await res.json();
  
    dispatch({ type: "ADD_TO_RECEPIES_BOOK", payload: data });
  };
};

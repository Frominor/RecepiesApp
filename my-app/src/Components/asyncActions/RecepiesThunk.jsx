export const fetchRecepies=(e)=>{
    return async function(dispatch){
     await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&query=${e.target.innerHTML}&addRecipeInformation=true&addRecipeNutrition=true`)
     .then(res=>res.json())
     .then(json=>dispatch({type:'ADD_YOURRECEPIES',payload:json.results[0]}))
    }
}
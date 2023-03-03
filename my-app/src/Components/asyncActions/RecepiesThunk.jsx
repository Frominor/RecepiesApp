export const fetchRecepies=(e)=>{
    return async function(dispatch){
    let res= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&query=${e.target.innerHTML}&addRecipeInformation=true&addRecipeNutrition=true`)
     let data=await res.json()
     dispatch({type:'ADD_YOURRECEPIES',payload:data.results[0]})
    }
}
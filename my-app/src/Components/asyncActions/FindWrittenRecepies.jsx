export const FindWrittenRecepies=(e)=>{
  return async function(dispatch){
       let res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&query=${e.target.value}&addRecipeInformation=true&addRecipeNutrition=true`)
       let data=await res.json()
       console.log(data)
       dispatch({type:'SHOW_FIND_RECEPT',payload:data.results})
  }
}
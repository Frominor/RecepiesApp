
export const FindFullInfoRecepies=(State)=>{
    return async function(dispatch){
        const respone=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&diet=${State.Diet}&cuisine=${State.cuisine}&type=${State.Category}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
          const data=await respone.json()
          dispatch({type:'ADD_RECEPIES',payload:data.results})
            
    }
}
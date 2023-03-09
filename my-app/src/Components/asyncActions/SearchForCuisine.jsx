export const SearchForCuisine=(value,bool)=>{
    return async function(dispatch){
        if(bool){
            let res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&cuisine=${value}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
       let data= await res.json()
       console.log(data)
       dispatch({ type: "ADD_RECEPIES", payload: data.results });
        }else{
            let res = await fetch(
                `https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&type=${value}&addRecipeInformation=true&addRecipeNutrition=true&number=10`
              );
              let data = await res.json();
              dispatch({ type: "ADD_RECEPIES", payload: data.results });
        }
    }
}
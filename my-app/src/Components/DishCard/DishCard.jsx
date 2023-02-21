import React from "react";
import './DishCard.css'
import { useDispatch } from "react-redux";
import serving from './servings.png'
export default function DishCard({title,img,cuisines,servings,pricePerServing,dishTypes,ingridients,extendedIngredients,aggregateLikes}){
  if(ingridients==undefined){
    ingridients=false
  }
   if(extendedIngredients==undefined){
extendedIngredients=[]
  }
  console.log(ingridients)
  console.log(extendedIngredients)
   const dispatch=useDispatch()
      
  
    return(
        <div className="DishCard">
          <div className="Img">
            <img src={img}></img>
          </div>
          <div className="Info">
            <div className="AboutDish">
            <h6 onClick={async (e)=>{
                let response= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&cuisine=${e.target.innerHTML.toLowerCase()}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
                let data= await response.json()
                
                dispatch({type:'ADD_RECEPIES',payload:data.results})
            }}>{cuisines[0]?.toUpperCase()}</h6>
            <h6 onClick={ async(e)=>{        
              let response= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&&addRecipeInformation=true&type=${e.target.innerHTML.toLowerCase()}&addRecipeNutrition=true&number=10`)
              let data= await response.json()
              dispatch({type:'ADD_RECEPIES',payload:data.results})
            }}>{dishTypes[0]?.toUpperCase()}</h6>
            </div>
            <div>
               <h3>{title}</h3>
               <div className="ServingAndPrice"> 
               <div className="Servings">
                <div>
                <img src={serving}></img>
               <h3>{servings} {servings>1?'servings':'serving'}</h3>
                </div>
               <div>
               <h3>{extendedIngredients.length||ingridients.length} ingridients</h3>
               </div>
               </div>
               <h3>{pricePerServing} price Per Serving</h3>
               </div>
              
               </div>

          </div>
        </div>
    )
}
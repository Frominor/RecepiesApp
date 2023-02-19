import React from "react";
import './DishCard.css'
import { useDispatch } from "react-redux";
export default function DishCard({title,img,cuisines=['any'],servings,pricePerServing,dishTypes}){
   const dispatch=useDispatch()
      
  
    return(
        <div className="DishCard">
          <div className="Img">
            <img src={img}></img>
          </div>
          <div className="Info">
            <div className="AboutDish">
            <h6 onClick={async (e)=>{
                let response= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&cuisine=${e.target.innerHTML}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
                let data= await response.json()
                console.log(data)
                dispatch({type:'ADD_RECEPIES',payload:data.results})
            }}>{cuisines[0]?.toUpperCase()}</h6>
            <h6 onClick={ async(e)=>{
              console.log(e.target.innerHTML.toLowerCase())
let response= await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&type=${e.target.innerHTML.toLowerCase()}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
let data= await response.json()
console.log(data)
dispatch({type:'ADD_RECEPIES',payload:data.results})
            }}>{dishTypes[0]?.toUpperCase()}</h6>
            </div>
            <div>
               <h3>{title}</h3>
               <h3>{servings}</h3>
               <h3>{pricePerServing}</h3>
               </div>

          </div>
        </div>
    )
}
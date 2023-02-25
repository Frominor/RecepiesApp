import React from "react";
import './DishCard.css'
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import serving from './servings.png'
import food from './food.png'
import dollar from './dollar.png'
export default function DishCard({title,img,cuisines,servings,pricePerServing,dishTypes,Ingridients}){
   const dispatch=useDispatch()
  
    return(
        <div className="DishCard">
          <div className="Img">
            <img src={img}></img>
          </div>
          <div className="Info">
           
               {cuisines.length>0?<div className="CuisinesAndTypes">
                <h6 onClick={async(e)=>{
                let res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&cuisine=${e.target.innerHTML}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
                let data= await res.json()
                dispatch({type:'ADD_RECEPIES',payload:data.results})
                }}>{cuisines[0]?.toUpperCase()}</h6>
                <h6 onClick={async (e)=>{
                 let res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&type=${e.target.ingridients}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
                 let data=await  res.json()
                 dispatch({type:'ADD_RECEPIES',payload:data.results})
                }}>{dishTypes[0]?.toUpperCase()}</h6>
               </div>:<h6 onClick={async(e)=>{
                let res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&type=${e.target.innerHTML}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
                 let data=await res.json()
                 dispatch({type:'ADD_RECEPIES',payload:data.results})
               }}>{dishTypes[0]?.toUpperCase()}</h6>}
            
            <div c>
               <h3 onClick={async(e)=>{
                let res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&query=${e.target.innerHTML}&addRecipeInformation=true&addRecipeNutrition=true`)
                let data= await res.json()
                console.log(data.results[0])
                
                 
                 dispatch({type:'ADD_YOURRECEPIES',payload:data.results[0]})
                
               }}><NavLink to={'AboutDish'}>{title}</NavLink></h3>
               <div className="ServingAndPrice"> 
               <div className="ServingsAndIngridients">
                <div className="Servings">
                <img src={serving}></img>
               <h3>{servings} {servings>1?'Servings':'Serving'}</h3>
                </div>
               <div className="Ingridients">
                <img src={food}></img>
               <h3>{2} Ingridients</h3>
               </div>
               </div>
               <div className="Price">
                <img src={dollar}></img>
               <h3>{Math.ceil(pricePerServing/100)} Price Per Serving</h3>
               </div>
               </div>
              
               </div>

          </div>
        </div>
    )
}
import React from "react";
import './DishCard.css'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import serving from './servings.png'
import food from './food.png'
import dollar from './dollar.png'
import {AddToRecepiesBook} from "../asyncActions/AddToRecepiesBook";
import { AboutRecepies } from "../asyncActions/AboutRecepies";
export default function DishCard({title,img,cuisines,servings,pricePerServing,dishTypes,id,extendedIngredients,nutrition}){
const State=useSelector(state=>state)
   const dispatch=useDispatch()

  const SearchForCuisine=async(e)=>{
    let res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&cuisine=${e.target.innerHTML}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
    let data= await res.json()
    dispatch({type:'ADD_RECEPIES',payload:data.results})
  }

 if(extendedIngredients===undefined){
  extendedIngredients=[]
 }
  const SearchForType=async(e)=>{
    let res=await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=b31827e8574a44e0ae4737c8ebc42229&type=${e.target.ingridients}&addRecipeInformation=true&addRecipeNutrition=true&number=10`)
                 let data=await  res.json()
                 dispatch({type:'ADD_RECEPIES',payload:data.results})
  }

  const FetchRecepies=(e)=>{
    dispatch(AboutRecepies(e))
  }

const AddReceptToRecepiesBook=()=>{
  dispatch(AddToRecepiesBook(id))
}
    return(
        <div className="DishCard">
          <div className="Img">
            <img src={img} ></img>
          </div>
          <div className="Info">
           
               {cuisines.length>0?<div className="CuisinesAndTypes">
                <h6 onClick={SearchForCuisine}>{cuisines[0]?.toUpperCase()}</h6>
                <h6 onClick={SearchForType}>{dishTypes[0]?.toUpperCase()}</h6>
               </div>:<h6 onClick={SearchForType}>{dishTypes[0]?.toUpperCase()}</h6>}
            
            <div >
               <h3 onClick={FetchRecepies}><Link to={'aboutdish'}>{title}</Link></h3>
               <div className="ServingAndPrice"> 
               <div className="ServingsAndIngridients">
                <div className="Servings">
                <img src={serving}></img>
               <h3>{servings} {servings>1?'Servings':'Serving'}</h3>
                </div>
               <div className="Ingridients">
                <img src={food}></img>
               <h3>{extendedIngredients?.length||nutrition.ingredients.length} Ingridients</h3>
               </div>
               </div>
               <div className="Price">
                <img src={dollar}></img>
               <h3>{Math.ceil(pricePerServing/100)} Price Per Serving</h3>
               </div>
               </div>
               </div>
               <div className="Add">
            {State.isAdded?<span></span>: <button  value={id} onClick={AddReceptToRecepiesBook} className='Add_Button'>Add to Recepies Book</button>}
          </div>
          </div>
        </div>
    )
}
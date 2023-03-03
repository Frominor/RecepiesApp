import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './AboutDish.css'
export default function AboutDish(){
  const DishInfo=useSelector((state)=>state.YourRecepies)
  const dispatch=useDispatch()
  React.useEffect(()=>{
console.log(DishInfo)
  },[])
  if(!DishInfo){
    return null
   }
    return(
        <div className="Recepies">
          <div className="Categories">
            <ul className="CategoriesButtons">
              <li>Main Page</li>
              {DishInfo?.cuisines?.length>0?<li>{DishInfo.cuisines[0]}</li>:<li>Any</li>}
              {DishInfo?.dishTypes?.length>0?<li>{DishInfo.dishTypes[0]}</li>:<li>Any</li>}
              <li>Step-By-Step Recipes</li>
            </ul>
          </div>
         <div className="Title">
        <h1>{DishInfo?.title}</h1>
         </div>
         <h2>Energy value per serving</h2>
         <div className="NutrientsAndIngridients">
         <div className="NutritionDescription">
          <div className="Nutrient Calories">
            <h3>Calories</h3>
            <h3>{DishInfo?.nutrition?.nutrients[0]?.amount}</h3>
          </div>
          <div className="Nutrient Protein">
             <h3>Protein</h3>
             <h3>{DishInfo?.nutrition?.nutrients[8]?.amount}</h3>
          </div>
          <div className="Nutrient Carbs">
            <h3>Carbs</h3>
            <h3>{DishInfo?.nutrition?.nutrients[3]?.amount}</h3>
          </div>
          <div className="Nutrient Fat">
            <h3>Fat</h3>
            <h3>{DishInfo?.nutrition?.nutrients[1]?.amount}</h3>
          </div>
         </div>
         <div className="Nutrient Ingridients">
          <div>
            <h3>Ingridients</h3>
          </div>
          {DishInfo?.nutrition?.ingredients?.map((item)=>{
            return <h5>{item.name} {item.amount} {item.unit}</h5>
          })}
         </div>
         </div>
         <h3>Cooking instructions</h3>
         <div className="HowToCook">
          {DishInfo?.analyzedInstructions?.map((item)=>{
            let StepCount=0
            return  item.steps.map((item)=>{
              StepCount++
              
                return <div className="InstructionBox">
                  <div className="InstructionSide">
                    <h2>Step {StepCount}:</h2>
                        <p>{item.step}</p>
                  </div>
                  
                  <br></br>
                </div>
               })
          })}
         </div>
        </div>
    )
}
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
         <div className="Nutrition">
          <h2>Энергетическая ценность на порцию</h2>
          <div className="Calories">
            <h3>Calories</h3>
            <h3>{DishInfo?.nutrition?.nutrients[0]?.amount}</h3>
          </div>
          <div className="Protein">
             <h3>Protein</h3>
             <h3>{DishInfo?.nutrition?.nutrients[8]?.amount}</h3>
          </div>
          <div className="Carbs">
            <h3>Carbs</h3>
            <h3>{DishInfo?.nutrition?.nutrients[3]?.amount}</h3>
          </div>
          <div className="Fat">
            <h3>Fat</h3>
            <h3>{DishInfo?.nutrition?.nutrients[1]?.amount}</h3>
          </div>
         </div>
         <div className="Ingridients">
          <div>
            <h3>Ингридиенты</h3>
            <p onClick={()=>{
               for(let k of  DishInfo?.nutrition?.ingredients){
                       k.amount=k.amount-k.amount
                 }
                 dispatch({type:'ADD_CATEGORY',payload:[]})
            }} className="Munis">-</p>
            <p onClick={()=>{
               for(let k of DishInfo?.nutrition?.ingredients){
                k.amount=k.amount+k.amount
               }
               alert(1)
               dispatch({type:'ADD_CATEGORY',payload:[]})
            }} className="Plus">+</p>
          </div>
          {DishInfo?.nutrition?.ingredients?.map((item)=>{
            return <h5>{item.name} {item.amount}</h5>
          })}
         </div>
        </div>
    )
}
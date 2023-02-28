import React from "react";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import DishCard from "../DishCard/DishCard";
import SortByPriceAndCalories from "../SortBy/SortByPriceAndCalories";
import FindBySettings from "../ReUseComponents/FindBySettings";
import {GetRandomProducts} from "../asyncActions/GetRandomProducts";
export default function Main({}) {
 const dispatch=useDispatch()
 const State=useSelector((state)=>state)
     const Filter=()=>{
      if(!State.isActive){
        for(let i=0;i<State.Recepies.length;i++){
          for(let k =i+1;k<State.Recepies.length;k++){
            if(Math.floor(State.Recepies[i].pricePerServing)<Math.floor(State.Recepies[k].pricePerServing)){
              let float=State.Recepies[k]
              State.Recepies[k]=State.Recepies[i]
              State.Recepies[i]=float
            }
          }
        }
        let filteredRecepies=[...State.Recepies]
        dispatch({type:'ADD_RECEPIES',payload:filteredRecepies})
      }else{
        for(let i=0;i<State.Recepies.length;i++){
          for(let k =i+1;k<State.Recepies.length;k++){
            if(State.Recepies[i].nutrition.nutrients[0].amount <State.Recepies[k].nutrition.nutrients[0].amount){
              let float=State.Recepies[k]
              State.Recepies[k]=State.Recepies[i]
              State.Recepies[i]=float
            }
          }
        }
        let filteredRecepies=[...State.Recepies]
        dispatch({type:'ADD_RECEPIES',payload:filteredRecepies})
      }
      dispatch({type:'CHANGE_ACTIVE',payload:!State.isActive})
     }
  React.useEffect(()=>{

  },[])
 
  return (
    <div className="Main">
      <div className="Row"></div>
      <FindBySettings></FindBySettings>
      <h1>Рецепты</h1>
      <p>
        Ищите рецепты, выбирая категорию блюда, его подкатегорию, кухню или
        меню. А в дополнительных фильтрах можно искать по нужному (или
        ненужному) ингредиенту: просто начните писать его название и сайт
        подберет соответствующий.
      </p>
      
      <div className="ThreeRows">
        <div className="Rows">______________</div>
        <div className="Rows">______________</div>
        <div className="Rows">______________</div>
      </div>

      <div className="TopIngr">
        <p>
          Топ три продукта дня:{" "}
          
        </p>
        <br></br>
      </div>
         <SortByPriceAndCalories></SortByPriceAndCalories>
      <div className="Recepies">
        {State.Recepies.map((item,id)=>{
          return <DishCard key={id} title={item.title} img={item.image} dishTypes={item.dishTypes} cuisines={item.cuisines} servings={item.servings} pricePerServing={item.pricePerServing} aggregateLikes={item.aggregateLikes}></DishCard>
        })}
      </div>
      <div className="Footer">
        
      </div>
    </div>
  );
}

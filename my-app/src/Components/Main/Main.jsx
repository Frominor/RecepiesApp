import React from "react";
import "./Main.css";
import { useDispatch, useSelector } from "react-redux";
import DishCard from "../DishCard/DishCard";
import SortByPriceAndCalories from "../SortBy/SortByPriceAndCalories";
import FindBySettings from "../ReUseComponents/FindBySettings";
import {GetRandomProducts} from "../asyncActions/GetRandomProducts";
import { fetchRecepies } from "../asyncActions/RecepiesThunk";
export default function Main({}) {
 const dispatch=useDispatch()
 const State=useSelector((state)=>state)
console.log(State)
     const fetchRandomRecepies=()=>{
      dispatch(GetRandomProducts())
    }
    const fetchRecepiesInTopProducts=(e)=>{
        dispatch(fetchRecepies(e))
        
    }
    function ShowAddButton(){
      dispatch({type:'ADD_RECEPT',payload:false})
    }
  React.useEffect(()=>{
   fetchRandomRecepies()
  ShowAddButton()
  },[])
 
  return (
    <div className="Main">
      <div className="Row"></div>
      <FindBySettings State={State}></FindBySettings>
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
      <p>
          Топ три продукта дня:
        </p>
      <div className="TopIngr">
       
        {State.TopDayProducts.map((item)=>{
             return <li onClick={(e)=> fetchRecepiesInTopProducts(e)} className="TopProduct">{item}</li>
          })}
          
        <br></br>
      </div>
         <SortByPriceAndCalories></SortByPriceAndCalories>
      <div className="Recepies">
       
        {State?.Recepies?.map((item)=>{
          return <DishCard State={State} nutrition={item.nutrition} key={item.id} extendedIngredients={item.extendedIngredients}id={item.id} title={item.title} img={item.image} dishTypes={item.dishTypes} cuisines={item.cuisines} servings={item.servings} pricePerServing={item.pricePerServing} aggregateLikes={item.aggregateLikes}></DishCard>
        })}
      </div>
      <div className="Footer">
      </div>
    </div>
  );
}

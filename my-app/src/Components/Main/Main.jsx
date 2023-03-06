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
        <div className="ThreeRows_Row">______________</div>
        <div className="ThreeRows_Row">______________</div>
        <div className="ThreeRows_Row">______________</div>
      </div>
      <p>
          Топ три продукта дня:
        </p>
      <div className="TopIngr">
        {State.Recepies.TopDayProducts.map((item)=>{
             return <li onClick={(e)=> fetchRecepiesInTopProducts(e)} className="TopIngr_TopProduct">{item}</li>
          })}
          
        <br></br>
      </div>
         <SortByPriceAndCalories fetchRecepies={fetchRecepies}></SortByPriceAndCalories>
      <div className="Recepies">
        {State?.Recepies?.Recepies?.map((item)=>{
          return <DishCard State={State.Recepies} nutrition={item.nutrition} key={item.id} extendedIngredients={item.extendedIngredients}id={item.id} title={item.title} img={item.image} dishTypes={item.dishTypes} cuisines={item.cuisines} servings={item.servings} pricePerServing={item.pricePerServing} aggregateLikes={item.aggregateLikes}></DishCard>
        })}
      </div>
      <div className="Footer">
      </div>
    </div>
  );
}

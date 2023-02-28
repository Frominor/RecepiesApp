import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DishCard from "../DishCard/DishCard";
import FindBySettings from "../ReUseComponents/FindBySettings";
import SortByPriceAndCalories from "../SortBy/SortByPriceAndCalories";
import "./MyBookOfRecepies.css";
import pan from "./pan.png";
export default function MyBookOfRecepies({}) {
  const dispatch = useDispatch();
  const State = useSelector((state) => state);
  console.log(State);
  const Recipes = useSelector((state) => state.Recepies);
  const Cuisine = useSelector((state) => state.cuisine);
  return (
    <div className="MyBookOfRecepies">
      <div className="Text">
        <h1>Моя книга рецептов</h1>
        <h5>то,что я люблю</h5>
      </div>
      <FindBySettings></FindBySettings>
      <div className="Row"></div>
      <SortByPriceAndCalories></SortByPriceAndCalories>
      <div>
        {Recipes.length > 0 ? (
          Recipes.map((item) => {
            <DishCard
              key={item.title}
              title={item.title}
              img={item.image}
              dishTypes={item.dishTypes}
              cuisines={item.cuisines}
              servings={item.servings}
              pricePerServing={item.pricePerServing}
              extendedIngredients={item.extendedIngredients}
              ingridients={item.nutrition?.ingridients}
              aggregateLikes={item.aggregateLikes}
            ></DishCard>;
          })
        ) : (
          <div className="Empty">
            <img src={pan}></img>
            <h3>
              Мы не нашли ничего по вашему запросу, попробуйте изменить
              параметры фильтра.
            </h3>
          </div>
        )}
      </div>
    </div>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import DishCard from "../DishCard/DishCard";
import FindBySettings from "../ReUseComponents/FindBySettings";
import SortByPriceAndCalories from "../SortBy/SortByPriceAndCalories";
import "./MyBookOfRecepies.css";
import pan from "./pan.png";
export default function MyBookOfRecepies({}) {
  const State = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch({ type: "ADD_RECEPT", payload: true });
  }, []);
  return (
    <div className="MyBookOfRecepies">
      <div className="MyBookOfRecepies_Title">
        <h1>Моя книга рецептов</h1>
        <h5>то,что я люблю</h5>
      </div>
      <FindBySettings State={State}></FindBySettings>
      <div className="MyBookOfRecepies_Title_Row Row"></div>
      <SortByPriceAndCalories></SortByPriceAndCalories>
      <div>
        {State?.Recepies.BookOfRecepies?.length > 0 ? (
          State?.Recepies.BookOfRecepies?.map((item) => {
            return (
              <DishCard
                key={item.id}
                title={item.title}
                img={item.image}
                dishTypes={item.dishTypes}
                cuisines={item.cuisines}
                servings={item.servings}
                pricePerServing={item.pricePerServing}
                extendedIngredients={item.extendedIngredients}
                ingridients={item.nutrition?.ingridients}
                aggregateLikes={item.aggregateLikes}
              ></DishCard>
            );
          })
        ) : (
          <div className="MyBookOfRecepies_Empty">
            <img src={pan}></img>
            <h3>Ваша книга рецептов пуста.</h3>
          </div>
        )}
      </div>
    </div>
  );
}

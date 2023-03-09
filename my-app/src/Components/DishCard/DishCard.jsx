import React from "react";
import "./DishCard.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import serving from "./servings.png";
import food from "./food.png";
import dollar from "./dollar.png";
import { AboutRecepies } from "../asyncActions/AboutRecepies";
import { SearchForCuisine } from "../asyncActions/SearchForCuisine";
import SearchButton from "../ReUseComponents/SearchButton";
export default function DishCard({
  title,
  img,
  cuisines,
  servings,
  pricePerServing,
  dishTypes,
  id,
  extendedIngredients,
  nutrition,
}) {
  const State = useSelector((state) => state.BoolState);
  const dispatch = useDispatch();
const SearchForType=(e)=>{
  let value=e.target.innerHTML
  let bool=false
  dispatch(SearchForCuisine(value,bool))
}
  const SearchForCuisines =(e) => {
    let value=e.target.innerHTML
      let bool=true
   dispatch(SearchForCuisine(value,bool))
  };
  const FetchRecepies = (e) => {
    const value=e.target.innerHTML
    dispatch(AboutRecepies(value));
  };

  return (
    <div className="DishCard">
      <div className="DishCard_Img">
        <img src={img}></img>
      </div>
      <div className="DishCard_Info">
        {cuisines.length > 0 ? (
          <div className="DishCard_CuisinesAndTypes">
            <button className="SearchFor" onClick={SearchForCuisines}>{cuisines[0]?.toUpperCase()}</button>
            <button className="SearchFor" onClick={SearchForType}>{dishTypes[0]?.toUpperCase()}</button>
          </div>
        ) : (
          <button className="SearchFor" onClick={SearchForType}>{dishTypes[0]?.toUpperCase()}</button>
        )}

        <div>
          <button className="ToAboutDish" onClick={FetchRecepies}>
            <Link to={"aboutdish"}>{title}</Link>
          </button>
          <div className="DishCard_ServingAndPrice">
            <div className="DishCard_ServingsAndIngridients">
              <div className="DishCard_Servings">
                <img src={serving}></img>
                <h3>
                  {servings} {servings > 1 ? "Servings" : "Serving"}
                </h3>
              </div>
              <div className="DishCard_Ingridients">
                <img src={food}></img>
                <h3>
                  {extendedIngredients?.length || nutrition.ingredients.length}{" "}
                  Ingridients
                </h3>
              </div>
            </div>
            <div className="DishCard_Price">
              <img src={dollar}></img>
              <h3>{Math.ceil(pricePerServing / 100)} Price Per Serving</h3>
            </div>
          </div>
        </div>
        <div className="Add">
          {State.isAdded ? (
            <span></span>
          ) : (
            <SearchButton id={id}></SearchButton>
          )}
        </div>
      </div>
    </div>
  );
}
